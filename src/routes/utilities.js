export function interpretImageLinks(application_id, img) {
  if (!img || img == undefined) {
    return null;
  }
  if (img.substring(0, 3) != "mp:") {
    return `https://cdn.discordapp.com/app-assets/${application_id}/${img.substring(
      0
    )}`;
  } else {
    return `https://media.discordapp.net/${img.substring(3)}`;
  }
}
