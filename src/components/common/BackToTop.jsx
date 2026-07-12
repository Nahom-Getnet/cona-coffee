import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

function BackToTop() {

const [show,setShow]=useState(false);

useEffect(()=>{

const handleScroll=()=>{

setShow(window.scrollY>400);

};

window.addEventListener("scroll",handleScroll);

return()=>window.removeEventListener("scroll",handleScroll);

},[]);

const scrollTop=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

return(

<button

onClick={scrollTop}

className={`back-top ${show ? "show" : ""}`}

>

<ChevronUp size={28}/>

</button>

);

}

export default BackToTop;