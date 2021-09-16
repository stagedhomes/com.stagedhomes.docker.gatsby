import React from "react";
import "./header.scss";

const  Header = () => {
  return (
    <div className="header-container">
      <div className="header-top">
        <div className="container">
          top part of header
        </div>
      </div> 

      <header className="header">
        <div className="container">
          bottom part of header
        </div>
      </header>
    </div>
  )
}

export default Header;
