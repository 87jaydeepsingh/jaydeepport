"use client"

import { useState } from "react";

export default function Contact() {

const [form,setForm] = useState({
name:"",
email:"",
message:""
});

const [status,setStatus] = useState("");

const handleChange = (e)=>{
setForm({...form,[e.target.name]:e.target.value});
};

const handleSubmit = async (e)=>{
e.preventDefault();

const res = await fetch("/api/contact",{
method:"POST",
headers:{ "Content-Type":"application/json" },
body:JSON.stringify(form)
});

const data = await res.json();

if(data.success){
setStatus("Message sent successfully!");
setForm({name:"",email:"",message:""});
}else{
setStatus("Error sending message");
}
};

return(

<div style={{
minHeight:"100vh",
display:"flex",
alignItems:"center",
justifyContent:"center",
padding:"40px"
}}>

<div style={{
display:"grid",
gridTemplateColumns:"1fr 1fr",
gap:"40px",
background:"#1e293b",
padding:"50px",
borderRadius:"15px",
maxWidth:"900px",
width:"100%",
boxShadow:"0 10px 30px rgba(0,0,0,0.5)"
}}>

{/* LEFT SIDE */}

<div>

<h2 style={{
fontSize:"32px",
color:"#38bdf8",
marginBottom:"10px"
}}>
Contact Me
</h2>

<p style={{color:"#cbd5f5"}}>
Feel free to reach out for collaborations,
projects or freelance work.
</p>

<div style={{marginTop:"30px"}}>

<p style={{marginBottom:"10px"}}>📧 Email</p>
<p style={{color:"#94a3b8"}}>jaydeep@example.com</p>

<p style={{marginTop:"20px"}}>📍 Location</p>
<p style={{color:"#94a3b8"}}>India</p>

</div>

</div>


{/* RIGHT SIDE FORM */}

<form
onSubmit={handleSubmit}
style={{
display:"flex",
flexDirection:"column",
gap:"15px"
}}
>

<input
type="text"
name="name"
placeholder="Your Name"
value={form.name}
onChange={handleChange}
required
style={inputStyle}
/>

<input
type="email"
name="email"
placeholder="Your Email"
value={form.email}
onChange={handleChange}
required
style={inputStyle}
/>

<textarea
name="message"
placeholder="Your Message"
value={form.message}
onChange={handleChange}
required
rows="5"
style={inputStyle}
/>

<button
type="submit"
style={{
background:"#38bdf8",
border:"none",
padding:"12px",
borderRadius:"8px",
fontWeight:"bold",
cursor:"pointer"
}}
>
Send Message
</button>

<p style={{color:"#38bdf8"}}>{status}</p>

</form>

</div>

</div>

);

}

const inputStyle = {
padding:"12px",
borderRadius:"8px",
border:"1px solid #334155",
background:"#0f172a",
color:"white",
outline:"none"
};