import clientPromise from "../lib/mongodb";
import ProjectCard from "../components/ProjectCard";

export default async function Home() {

  const client = await clientPromise;
  const db = client.db("jaydeepport");

  const projects = await db
    .collection("portfolio")
    .find({})
    .limit(3)
    .toArray();

  return (

    <div style={{
      minHeight:"100vh",
      background:"#0f172a",
      color:"white"
    }}>

{/* HERO SECTION */}

<section style={{
display:"flex",
alignItems:"center",
justifyContent:"space-between",
padding:"100px 80px",
flexWrap:"wrap"
}}>

<div style={{maxWidth:"550px"}}>

<p style={{
color:"#ef4444",
fontWeight:"bold",
letterSpacing:"2px"
}}>
HELLO!
</p>

<h1 style={{
fontSize:"55px",
margin:"10px 0",
fontWeight:"bold"
}}>
I Am <span style={{color:"#38bdf8"}}>Jaydeep</span>
</h1>

<p style={{
color:"#cbd5f5",
lineHeight:"1.6"
}}>
I'm a Full Stack Developer building modern websites,
IoT systems and cloud applications using Next.js,
Node.js and MongoDB.
</p>

<div style={{marginTop:"30px"}}>

<a href="/projects" style={{
background:"#ef4444",
padding:"12px 30px",
borderRadius:"30px",
color:"white",
textDecoration:"none",
marginRight:"15px"
}}>
View Work
</a>

<a href="/contact" style={{
background:"#ef4444",
padding:"12px 30px",
borderRadius:"30px",
color:"white",
textDecoration:"none"
}}>
Contact Me
</a>

</div>

</div>


{/* HERO IMAGE */}

<div>

<img
src="/profile.png"
style={{
width:"380px",
borderRadius:"10px"
}}
/>

</div>

</section>


{/* PROJECT SECTION */}

<section style={{
padding:"60px",
background:"#020617"
}}>

<h2 style={{
textAlign:"center",
fontSize:"32px",
marginBottom:"40px"
}}>
My Projects
</h2>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
gap:"25px",
maxWidth:"1100px",
margin:"auto"
}}>

{projects.map((project)=>(
<ProjectCard key={project._id} project={project}/>
))}

</div>

</section>

</div>

  );
}