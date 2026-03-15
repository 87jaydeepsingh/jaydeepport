import clientPromise from "../../../lib/mongodb";

export async function GET() {
  try {

    const client = await clientPromise;

    const db = client.db("jaydeepport");

    const projects = await db
      .collection("portfolio")
      .find({})
      .toArray();

    return Response.json({
      success: true,
      data: projects
    });

  } catch (error) {

    return Response.json({
      success: false,
      error: error.message
    });

  }
}