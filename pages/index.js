import Head from "next/head";
import { Featured, PizzaList } from "@/components/index";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pizza Restaurant in Newyork</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList />
    </div>
  );
}
