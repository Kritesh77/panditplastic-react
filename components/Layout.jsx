import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Head>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
      {children}
      <ToastContainer />
      <Footer />
    </>
  );
}
