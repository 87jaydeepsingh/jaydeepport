import clientPromise from "../lib/mongodb";
import ProjectCard from "../components/ProjectCard";

import Skills from "../components/Skills";
import Timeline from "../components/Timeline";

export default async function Home() {

  const client = await clientPromise;
  const db = client.db("jaydeepport");

  const projects = await db
    .collection("portfolio")
    .find({})
    .limit(3)
    .toArray();

  return (


<div>

{/* HERO SECTION */}
<section style={{
display:"flex",
alignItems:"center",
justifyContent:"space-between",
padding:"80px 10%",
flexWrap:"wrap"
}}>

{/* LEFT SIDE */}

<div style={{maxWidth:"600px"}}>

<h1 style={{
fontSize:"48px",
fontWeight:"700",
lineHeight:"1.2"
}}>
Hi There,<br/>
I'm <span style={{color:"#22d3ee"}}>Jaydeep Singh</span>
</h1>

<p style={{
marginTop:"20px",
fontSize:"20px",
color:"#94a3b8"
}}>
I Am Into <span style={{color:"#22d3ee"}}>Fullstack Development</span>
</p>

{/* BUTTON */}

<button style={{
marginTop:"30px",
background:"#2563eb",
color:"white",
padding:"12px 28px",
borderRadius:"30px",
border:"none",
fontSize:"16px",
cursor:"pointer",
boxShadow:"0 6px 20px rgba(0,0,0,0.3)"
}}>
About Me
</button>

{/* SOCIAL ICONS */}

<div style={{
display:"flex",
gap:"15px",
marginTop:"30px"
}}>

<a href="#" style={iconStyle}>in</a>
<a href="#" style={iconStyle}>gh</a>
<a href="#" style={iconStyle}>tw</a>
<a href="#" style={iconStyle}>ig</a>
<a href="#" style={iconStyle}>yt</a>

</div>

</div>

{/* RIGHT SIDE IMAGE */}

<div>

<img
src="/profile.png"
alt="profile"
style={{
width:"320px",
borderRadius:"50%",
border:"6px solid #22d3ee",
boxShadow:"0 0 30px rgba(34,211,238,0.5)"
}}
/>

</div>

</section>

{/* EXPERTISE SECTION */}

<section style={{
padding:"80px",
background:"#020617"
}}>

<h2 style={{
  textAlign:"center",
  fontSize:"32px",
  marginBottom:"50px",
  color:"#22d3ee",
  letterSpacing:"1px",
  textShadow:"0 0 10px rgba(34,211,238,0.6)"
}}>
Top Expertise
</h2>

<p style={{
textAlign:"center",
color:"#94a3b8",
marginBottom:"40px"
}}>
Soon to be a Fullstack developer with primary focus on Flask + React.
</p>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",
gap:"25px",
maxWidth:"1000px",
margin:"auto"
}}>

{skills.map((skill)=>(
<div key={skill.name} style={skillCard}>
  <div style={{fontSize:"30px"}}>{skill.icon}</div>

  <h3 style={{
    color:"#22d3ee",
    marginTop:"10px"
  }}>
    {skill.name}
  </h3>

</div>
))}

</div>

<Timeline/>

</section>


{/* PROJECTS */}

<section style={{
padding:"80px"
}}>

<h2 style={{
textAlign:"center",
fontSize:"32px",
marginBottom:"40px"
}}>
Projects
</h2>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
gap:"30px",
maxWidth:"1100px",
margin:"auto"
}}>

{projects.map((project)=>(
<ProjectCard key={project._id} project={project}/>
))}

</div>

</section>


{/* CTA SECTION */}

<section style={{
background:"#1e293b",
padding:"70px",
textAlign:"center"
}}>

<h2 style={{fontSize:"32px"}}>
Let's Build Something Together
</h2>

<p style={{color:"#94a3b8",marginTop:"10px"}}>
Have a project in mind? Let's talk.
</p>

<a href="/contact" style={{
background:"#38bdf8",
padding:"12px 28px",
borderRadius:"8px",
color:"black",
textDecoration:"none",
marginTop:"20px",
display:"inline-block"
}}>
Contact Me
</a>

</section>


{/* FOOTER */}

<footer style={{
textAlign:"center",
padding:"40px",
color:"#64748b"
}}>
© {new Date().getFullYear()} Jaydeep Portfolio
</footer>

</div>

  );
}

const iconStyle = {
width:"40px",
height:"40px",
background:"#0f172a",
borderRadius:"50%",
display:"flex",
alignItems:"center",
justifyContent:"center",
color:"#22d3ee",
textDecoration:"none",
fontWeight:"bold",
border:"1px solid #334155"
};


const buttonStyle={
background:"#ef4444",
padding:"12px 28px",
borderRadius:"30px",
color:"white",
textDecoration:"none",
marginRight:"10px"
}

const skillCard={
background:"#1e293b",
padding:"25px",
borderRadius:"10px",
textAlign:"center",
border:"1px solid #334155"
}

const skills=[
{ name:"Python", icon:"🐍"},
{ name:"Flask", icon:"⚡"},
{ name:"React", icon:"⚛️"},
{ name:"MongoDB", icon:"🍃"},
{ name:"HTML / CSS", icon:"🌐"},
{ name:"Bootstrap", icon:"🎨"},
{ name:"JavaScript", icon:"📜"},
{ name:"MySQL", icon:"🗄"}
]
