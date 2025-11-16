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

export function cleanUpActivities(activities, needsCustom) {
  // pretty much made just to handle custom statuses with id='custom'
  let cleaned = [];
  for (let index = 0; index < activities.length; index++) {
    const element = activities[index];
    console.log(element);
    if (needsCustom) {
      if (element.id == "custom") {
        return element;
      }
    }
    if (element.id != "custom") {
      cleaned.push(element);
    }
  }

  return cleaned;
}
