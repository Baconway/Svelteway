function computeLuminence(backgroundcolor) {
  let colors = hexToRgb(backgroundcolor);

  const components = ["r", "g", "b"];
  for (let i in components) {
    let c = components[i];

    colors[c] = colors[c] / 255.0;

    if (colors[c] <= 0.03928) {
      colors[c] = colors[c] / 12.92;
    } else {
      colors[c] = Math.pow((colors[c] + 0.055) / 1.055, 2.4);
    }
  }

  const luminence = 0.2126 * colors.r + 0.7152 * colors.g + 0.0722 * colors.b;

  return luminence;
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function interpretImageLinks(application_id, img) {
  if (!img || img == undefined) {
    return null;
  }

  const image_link =
    img.substring(0, 3) != "mp:"
      ? `https://cdn.discordapp.com/app-assets/${application_id}/${img.substring(
          0,
        )}`
      : `https://media.discordapp.net/${img.substring(3)}`;

  let valid_check = fetch(image_link).then((response) => {
    if (response.status != 200) image_link = "/salt2.png";
  });

  return image_link;
}

export function cleanUpActivities(activities) {
  // pretty much made just to handle custom statuses with id='custom'
  let cleaned = [];
  for (let index = 0; index < activities.length; index++) {
    const element = activities[index];
    if (element.id === "custom") continue;

    cleaned.push(element);
  }

  return cleaned;
}

export function shouldTextBeBlack(backgroundcolor) {
  return computeLuminence(backgroundcolor) > 0.179;
}
