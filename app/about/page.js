export default function About() {

return (

<section style={{
padding:"100px 10%",
background:"#020617"
}}>

<div style={{
maxWidth:"1100px",
margin:"auto",
display:"flex",
gap:"50px",
alignItems:"center",
flexWrap:"wrap"
}}>

{/* LEFT IMAGE */}

<div style={{
flex:"1",
textAlign:"center"
}}>

<img
src="/about.png"
alt="about"
style={{
width:"320px",
borderRadius:"20px",
boxShadow:"0 20px 50px rgba(0,0,0,0.6)",
border:"4px solid #22d3ee"
}}
/>

</div>


{/* RIGHT CARD */}

<div style={{
flex:"1",
background:"#0f172a",
padding:"40px",
borderRadius:"20px",
border:"1px solid #1e293b",
boxShadow:"0 10px 40px rgba(0,0,0,0.5)"
}}>

<h2 style={{
fontSize:"34px",
marginBottom:"20px"
}}>
I Am Modern <span style={{color:"#22d3ee"}}>Web Developer</span>
</h2>

<p style={{
color:"#94a3b8",
lineHeight:"1.7",
marginBottom:"30px"
}}>
I build modern fullstack applications using React, Flask and MongoDB.
I focus on building scalable, fast and beautiful web experiences.
</p>


{/* INFO GRID */}

<div style={{
display:"grid",
gridTemplateColumns:"1fr 1fr",
gap:"15px",
marginBottom:"30px"
}}>

<div><b>Name:</b> Jaydeep Singh</div>
<div><b>Age:</b> 25</div>
<div><b>Location:</b> India</div>
<div><b>Email:</b> jaydeep@email.com</div>
<div><b>Phone:</b> +91 XXXXXXXX</div>
<div><b>Role:</b> Fullstack Developer</div>

</div>


{/* BUTTON */}

<a
href="/cv.pdf"
style={{
background:"#22d3ee",
padding:"12px 30px",
borderRadius:"30px",
color:"#020617",
fontWeight:"600",
textDecoration:"none",
boxShadow:"0 0 20px rgba(34,211,238,0.6)"
}}
>
Download CV
</a>

</div>

</div>

</section>

)

}