import clientPromise from "../../../lib/mongodb";

export async function POST(request){

  try{

    const body = await request.json();

    const client = await clientPromise;

    const db = client.db("jaydeepport");

    await db.collection("contact").insertOne(body);

    return Response.json({
      success:true
    });

  }catch(error){

    return Response.json({
      success:false,
      error:error.message
    });
  }
}