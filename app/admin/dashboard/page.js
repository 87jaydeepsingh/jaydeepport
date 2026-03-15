"use client"

import { useEffect,useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard(){

const [contacts,setContacts] = useState([]);
const router = useRouter();

useEffect(()=>{

const admin = localStorage.getItem("admin");

if(!admin){
router.push("/admin");
}

fetch("/api/admin/contacts")
.then(res=>res.json())
.then(data=>setContacts(data));

},[]);

return(

<div style={{padding:"40px"}}>

<h1>Contact Messages</h1>

{contacts.map((c)=>(
<div key={c._id} style={{
border:"1px solid #ddd",
padding:"20px",
marginBottom:"10px"
}}>

<h3>{c.name}</h3>
<p>{c.email}</p>
<p>{c.message}</p>

</div>
))}

</div>

)

}