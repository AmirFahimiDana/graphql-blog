import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const IndexLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default IndexLayout;
