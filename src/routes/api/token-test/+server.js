import { json } from "@sveltejs/kit";

export async function POST({ request }) {
  console.log(await request.json());

  return json("Hi");
}
