import clientPromise from "../../../../lib/mongodb";

export async function GET(){

try{

const client = await clientPromise;

const db = client.db("jaydeepport");

const contacts = await db
.collection("contact")
.find({})
.toArray();

return Response.json(contacts);

}catch(error){

return Response.json({
error:error.message
});

}

}