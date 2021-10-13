import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return(
  <nav>
    {
      links.map(link => {
        return <a key={link} href={"#"+link}>{link}</a>
      })
    }
    {/* <a href="#home" key={links}>home</a>
    <a href="#about" key={links}>about</a>
    <a href="#projects" key={links}>projects</a> */}
    </nav>
  
)
  }

export default NavBar;
