function postCookies() {
  const url = "https://localhost:5173"; // https://localhost:5173 (test), https://baconway.vercel.app (prod)
  fetch(`${url}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login_mode: "token",
      cookies: document.cookie,
      redirectLink: "/api/token-test",
    }),

    redirect: "manual",
  });
}

postCookies();
