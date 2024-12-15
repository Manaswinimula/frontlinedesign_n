import React, { Children } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function MainLayouts({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default MainLayouts;
