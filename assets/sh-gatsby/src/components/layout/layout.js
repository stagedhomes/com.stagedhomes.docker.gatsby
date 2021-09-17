import React from "react"
import Header from "../header/header";
import Footer from "../footer/footer";
import "./og-style.css";
import "./og-gold.css";
import "./og-stagedhomes.css";
import "./og-homepage.css";
import "./layout.scss";

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
