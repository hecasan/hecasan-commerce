import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar.js";
import Footer from "./Footer.js";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + " | Hecasan" : "Hecasan"}</title>
        <meta name="description" content="Portas e Janelas de Alumínio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <Navbar />
        </header>

        <main className="container m-auto mt-4 px-4">{children}</main>

        <footer className="flex h-20 justify-center items-center shadow-inner py-6">
          <Footer />
        </footer>
      </div>
    </>
  );
}
