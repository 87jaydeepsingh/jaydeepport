export default function Timeline(){

const timeline = [

{
year:"2024",
title:"Started Fullstack Journey",
desc:"Learning Flask, React and backend development."
},

{
year:"2025",
title:"Building Portfolio Projects",
desc:"Created multiple web apps using Next.js and MongoDB."
},

{
year:"Future",
title:"Fullstack Developer",
desc:"Working on scalable web apps and cloud systems."
}

];

return(

<section style={{
padding:"80px",
background:"#020617"
}}>

<h2 style={{
textAlign:"center",
fontSize:"32px",
marginBottom:"50px"
}}>
Experience
</h2>

<div style={{
maxWidth:"800px",
margin:"auto",
borderLeft:"3px solid #38bdf8",
paddingLeft:"30px"
}}>

{timeline.map((item,index)=>(

<div key={index} style={{
marginBottom:"40px",
position:"relative"
}}>

<div style={{
position:"absolute",
left:"-38px",
top:"5px",
width:"15px",
height:"15px",
background:"#38bdf8",
borderRadius:"50%"
}}/>

<h3>{item.year}</h3>

<h4 style={{color:"#38bdf8"}}>
{item.title}
</h4>

<p style={{color:"#94a3b8"}}>
{item.desc}
</p>

</div>

))}

</div>

</section>

)

}