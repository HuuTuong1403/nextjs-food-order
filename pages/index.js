import Head from "next/head";
import { Featured, PizzaList, AddModal, AddButton } from "@/components/index";
import axios from "axios";
import { useState } from "react";

export default function Home({ pizzaList, admin }) {
  const [close, setClose] = useState(true);

  return (
    <div>
      <Head>
        <title>Pizza Restaurant in Newyork</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {admin && <AddButton setClose={setClose} />}
      <PizzaList pizzaList={pizzaList} />
      {!close && <AddModal setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  const res = await axios.get("http://localhost:3000/api/products");
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  return {
    props: {
      pizzaList: res.data,
      admin,
    },
  };
};
