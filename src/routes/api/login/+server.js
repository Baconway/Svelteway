import { json } from "@sveltejs/kit";
import { read } from "$app/server";
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

export async function POST({ request }) {
  // learnt everything from tomomai repo: https://github.com/shedaniel/tomomai/blob/main/src/server/services/maimai-login.ts#L342
  const { login_mode, sid, password, cookies, redirectLink } =
    await request.json();

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
    const cook = ProcessCookie(cookies);

    const req = await fetch(checkPageUrl, {
      // look for 302
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Mobile Safari/537.36",
        Cookie: `clal=${cook}`,
      },

      redirect: "manual",
    });

    console.log(req);

    return new Response(JSON.stringify({ entry: "idqijdqjdiq" }), {
      status: 200,
      statusText: "OK",
      headers: {
        "Access-Control-Allow-Origin": "https://lng-tgk-aime-gw.am-all.net",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Methods": "GET, POST",
        "Access-Control-Allow-Headers": "Origin, Content-Type",
        "Content-Type": "application/json",
      },
    });
  }

  return json("api returned somehow");
}

export async function fallback({ url }) {
  return new Response(json({ error: "Please send a POST request" }), {
    status: 405,
    statusText: "Method Not Allowed",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
