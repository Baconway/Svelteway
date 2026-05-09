import test from "./test.js?raw";

const ALLOWED_ORIGIN = "https://lng-tgk-aime-gw.am-all.net";

const corsHeaders = {
  "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Credentials": "true",
  "Access-Control-Allow-Private-Network": "true",
  "Access-Control-Max-Age": "86400",
};

function withCors(response) {
  response.headers.set("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
  response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  response.headers.set("Access-Control-Allow-Credentials", "true");
  response.headers.set("Access-Control-Allow-Private-Network", "true");
  response.headers.set("Access-Control-Max-Age", "86400");
  return response;
}

export async function GET({}) {
  return new Response(test, {
    status: 200,
    statusText: "Sending over raw token fetch",
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "no-store",
      ...corsHeaders,
    },
  });
}
