import { json } from "@sveltejs/kit";
import fs from "fs";
import test from "./test.js?raw";
import { error } from "console";

const checkPageUrl =
  "https://lng-tgk-aime-gw.am-all.net/common_auth/login?site_id=maimaidxex&redirect_url=https://maimaidx-eng.com/maimai-mobile/&back_url=https://maimai.sega.com/";
const loginUrl = "https://lng-tgk-aime-gw.am-all.net/common_auth/login/sid";

function ProcessCookie(blob) {
  const matched = blob.match(/clal=([^;]+)/); // starts at clal, contains everything that doesnt end with ;

  if (matched) {
    return matched[1];
  }
}
const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "https://lng-tgk-aime-gw.am-all.net",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Private-Network": "true",
  "Access-Control-Allow-Credentials": "true",
};

// This handles the browser's "pre-check"
export function OPTIONS() {
  return new Response(null, {
    headers: CORS_HEADERS,
  });
}

export async function POST({ request }) {
  // learnt everything from tomomai repo: https://github.com/shedaniel/tomomai/blob/main/src/server/services/maimai-login.ts#L342
  const { login_mode, sid, password, cookies } = await request.json();

  const checkStatus = await fetch(checkPageUrl, {
    method: "GET",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Mobile Safari/537.36",
    },

    redirect: "manual",
  });

  if (checkStatus.status !== 200) {
    return new Response(json({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (login_mode === "sid") {
    const params = new URLSearchParams({
      retention: "1",
      sid: sid,
      password: password,
    });

    const request = await fetch(`${loginUrl}?${params}`, {
      method: "POST",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Mobile Safari/537.36",
        Cookie: checkStatus.headers.getSetCookie().join("; "),
      },

      redirect: "manual",
    });

    if (request.status === 302) {
      return new Response(
        JSON.stringify({
          token: ProcessCookie(request.headers.get("Set-Cookie")), // just use get(set-cookie) to avoid envs that dont support getsetcookie
        }),
        {
          status: 200,
          statusText: "Token retrieved successfully",
        },
      );
    }
  } else if (login_mode === "token") {
    console.log(login_mode, cookies);

    return new Response(JSON.stringify({ entry: "idqijdqjdiq" }), {
      status: 200,
      statusText: "OK",
      headers: {
        ...OPTIONS(),

        "Content-Type": "application/json",
      },
    });
  }

  return json("api returned somehow");
}

export async function GET({}) {
  const data = await fs.readFileSync("./src/routes/api/login.js/test.js");
  return new Response(data, {
    status: 200,
    statusText: "Sending over raw token fetch",
    headers: {
      "Content-Type": "application/javascript",
    },
  });
}

export async function fallback({ url }) {
  return new Response(
    json({ error: "Please send either a POST or GET request" }),
    {
      status: 405,
      statusText: "Not POST or GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
}
