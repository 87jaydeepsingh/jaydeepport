import clientPromise from "../lib/mongodb";
import ProjectCard from "../components/ProjectCard";

import Skills from "../components/Skills";
import Timeline from "../components/Timeline";

export default async function Home() {

  const client = await clientPromise;
  const db = client.db("jaydeepport");

  const projects = await db
    .collection("projects")
    .find({})
    .limit(3)
    .toArray();

  return (

<div>

{/* HERO SECTION */}

<section style={{
padding:"100px 80px",
display:"flex",
justifyContent:"space-between",
alignItems:"center",
flexWrap:"wrap"
}}>

<div style={{maxWidth:"500px"}}>

<p style={{color:"#ef4444",fontWeight:"bold"}}>HELLO!</p>

<h1 style={{fontSize:"55px"}}>
I Am <span style={{color:"#38bdf8"}}>Jaydeep</span>
</h1>

<p style={{color:"#cbd5f5",lineHeight:"1.6"}}>
Soon to be a Fullstack developer focused on Flask + React.
I enjoy building scalable web apps and IoT systems.
</p>

<div style={{marginTop:"25px"}}>

<a href="/projects" style={buttonStyle}>
View Work
</a>

<a href="/contact" style={buttonStyle}>
Hire Me
</a>

</div>

</div>

<img src="/profile.png" style={{width:"350px"}}/>

</section>


{/* EXPERTISE SECTION */}

<section style={{
padding:"80px",
background:"#020617"
}}>

<h2 style={{
textAlign:"center",
fontSize:"32px",
marginBottom:"50px"
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
<h3>{skill.name}</h3>
</div>
))}

</div>

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
