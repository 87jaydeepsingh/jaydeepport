export default function Timeline(){

const timeline = [

{
year:"2024",
title:"Started Fullstack Journey",
desc:"Learning Python, Flask and frontend development."
},

{
year:"2025",
title:"Building Web Applications",
desc:"Created multiple projects using React and MongoDB."
},

{
year:"Future",
title:"Fullstack Developer",
desc:"Working on scalable cloud and web applications."
}

];

return(

<section style={{
padding:"80px"
}}>

<h2 style={{
textAlign:"center",
fontSize:"32px",
marginBottom:"60px"
}}>
Experience Timeline
</h2>

<div style={{
position:"relative",
maxWidth:"1000px",
margin:"auto"
}}>

{/* horizontal line */}

<div style={{
position:"absolute",
top:"20px",
left:"0",
right:"0",
height:"3px",
background:"#38bdf8"
}}/>

<div style={{
display:"flex",
justifyContent:"space-between"
}}>

{timeline.map((item,index)=>(

<div key={index} style={{
textAlign:"center",
width:"30%"
}}>

{/* dot */}

<div style={{
width:"18px",
height:"18px",
background:"#38bdf8",
borderRadius:"50%",
margin:"auto",
marginBottom:"15px",
position:"relative",
zIndex:"2"
}}/>

{/* card */}

<div style={{
background:"#1e293b",
padding:"20px",
borderRadius:"10px",
border:"1px solid #334155"
}}>

<h4 style={{color:"#22d3ee"}}>
{item.year}
</h4>

<h3>
{item.title}
</h3>

<p style={{color:"#94a3b8"}}>
{item.desc}
</p>

</div>

</div>

))}

</div>

</div>

</section>

)

}