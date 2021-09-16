import React from "react"
import Header from "../header/header";
import Footer from "../footer/footer";

const  Layout = ({ children }) => {
  return (
    <div className="page-wrapper boxed">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;
