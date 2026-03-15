"use client"

import { useEffect, useState } from "react";

export default function Skills(){

const skills = [
{ name:"Python", level:90 },
{ name:"Flask", level:80 },
{ name:"React", level:85 },
{ name:"MongoDB", level:75 },
{ name:"JavaScript", level:85 },
{ name:"HTML / CSS", level:90 },
{ name:"Bootstrap", level:80 },
{ name:"MySQL", level:70 }
];

const [animate,setAnimate] = useState(false);

useEffect(()=>{
setAnimate(true);
},[]);

return(

<section style={{
padding:"80px",
maxWidth:"900px",
margin:"auto"
}}>

<h2 style={{
textAlign:"center",
fontSize:"32px",
marginBottom:"50px"
}}>
Skills
</h2>

{skills.map((skill,index)=>(
<div key={index} style={{marginBottom:"25px"}}>

<div style={{
display:"flex",
justifyContent:"space-between"
}}>
<span>{skill.name}</span>
<span>{skill.level}%</span>
</div>

<div style={{
height:"10px",
background:"#1e293b",
borderRadius:"10px",
overflow:"hidden"
}}>

<div style={{
height:"10px",
width: animate ? skill.level+"%" : "0%",
background:"#38bdf8",
transition:"width 1.5s ease"
}}/>

</div>

</div>
))}

</section>

)

}