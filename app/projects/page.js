import clientPromise from "../../lib/mongodb";
import ProjectCard from "../../components/ProjectCard";

export default async function Projects() {

  const client = await clientPromise;
  const db = client.db("jaydeepport");

  const projects = await db
  .collection("portfolio")
  .find({})
  .toArray();

  return (

    <div style={{padding:"40px"}}>

      <h1>My Projects</h1>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
        gap:"20px",
        marginTop:"30px"
      }}>

        {projects.map((project)=>(
          <ProjectCard key={project._id} project={project}/>
        ))}

      </div>

    </div>

  );
}