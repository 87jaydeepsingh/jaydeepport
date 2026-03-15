"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin(){

const [password,setPassword] = useState("");
const router = useRouter();

const handleLogin = ()=>{

if(password === "admin123"){
localStorage.setItem("admin","true");
router.push("/admin/dashboard");
}else{
alert("Wrong Password");
}

}

return(

<div style={{padding:"40px"}}>

<h1>Admin Login</h1>

<input
type="password"
placeholder="Enter Admin Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={handleLogin}>Login</button>

</div>

)

}