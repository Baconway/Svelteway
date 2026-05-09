import test from "./test.js?raw";

export async function GET({}) {
  return new Response(test, {
    status: 200,
    statusText: "Sending over raw token fetch",
    headers: {
      "Content-Type": "application/javascript",
    },
  });
}
