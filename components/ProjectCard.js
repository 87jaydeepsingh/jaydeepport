export default function ProjectCard({ project }) {

  return (

    <div style={{
      background:"#1e293b",
      padding:"30px",
      borderRadius:"12px",
      border:"1px solid #334155",
      textAlign:"center",
      color:"#cbd5f5",
      transition:"0.3s",
      boxShadow:"0 6px 20px rgba(0,0,0,0.3)"
    }}>

      {/* ICON */}

      <div style={{
        fontSize:"40px",
        marginBottom:"15px"
      }}>
        💻
      </div>

      {/* TITLE */}

      <h3 style={{
        color:"#38bdf8",
        marginBottom:"10px"
      }}>
        {project.name}
      </h3>

      {/* DESCRIPTION */}

      <p style={{
        fontSize:"14px",
        lineHeight:"1.6"
      }}>
        {project.description}
      </p>

    </div>

  );

}