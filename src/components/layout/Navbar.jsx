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

const links=[

"Home",

"About",

"Solutions",

"Origins",

"FAQ",

"Contact"

];

return(

<header
className={`navbar ${scroll?"scrolled":""}`}>

<div className="container nav-wrapper">

<div className="logo">

<img
src="/Images/Logo/logo.png"
alt="CONA Coffee Logo"
/>

<span>CONA Coffee</span>

</div>

<nav className={open?"open":""}>

{links.map(link=>(

<a

key={link}

href={`#${link.toLowerCase().replace(/\s/g,"-")}`}

onClick={()=>setOpen(false)}

>

{link}

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