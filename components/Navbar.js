import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      padding:"18px 60px",
      background:"#0f172a",
      color:"white",
      boxShadow:"0 4px 10px rgba(0,0,0,0.4)"
    }}>

      {/* LOGO */}

      <h2 style={{
        color:"#38bdf8",
        fontWeight:"bold"
      }}>
        Jaydeep Singh
      </h2>

      {/* MENU */}

      <div style={{
        display:"flex",
        gap:"30px",
        fontSize:"16px"
      }}>

        <Link href="/" style={linkStyle}>Home</Link>
        <Link href="/about" style={linkStyle}>About</Link>
        <Link href="/projects" style={linkStyle}>Projects</Link>
        <Link href="/contact" style={linkStyle}>Contact</Link>
        <Link href="/admin" style={adminStyle}>Admin</Link>

      </div>

    </nav>
  );
}

const linkStyle = {
  color:"#e2e8f0",
  textDecoration:"none",
  fontWeight:"500"
}

const adminStyle = {
  background:"#38bdf8",
  padding:"6px 14px",
  borderRadius:"6px",
  color:"black",
  textDecoration:"none",
  fontWeight:"bold"
}