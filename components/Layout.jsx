import { Footer, Navbar } from "@/components/index";

export function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
