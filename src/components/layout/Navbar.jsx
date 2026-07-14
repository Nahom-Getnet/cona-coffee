import {useState,useEffect} from "react";

import "../../styles/navbar.css";

import {Menu,X} from "lucide-react";

function Navbar(){

const[open,setOpen]=useState(false);

const[scroll,setScroll]=useState(false);

useEffect(()=>{

const handleScroll=()=>{

setScroll(window.scrollY>40);

};

window.addEventListener("scroll",handleScroll);

return()=>window.removeEventListener("scroll",handleScroll);

},[]);

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Solutions", href: "#services" },
  { name: "Origins", href: "#coffee" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" }
];

return(

<header
className={`navbar ${scroll?"scrolled":""}`}>

<div className="container nav-wrapper">

<a href="#home" className="logo">

<img
src="/Images/Logo/logo.png"
alt="CONA Coffee Logo"
/>

</a>

<nav className={open?"open":""}>

{links.map((link) => (

<a
key={link.name}
href={link.href}
onClick={() => setOpen(false)}
>

{link.name}

</a>

))}

<a

href="#contact"

className="btn btn-secondary"

>

Request Quote

</a>

</nav>

<button

className="menu"

onClick={()=>setOpen(!open)}

>

{open?<X/>:<Menu/>}

</button>

</div>

</header>

)

}

export default Navbar;