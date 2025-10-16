import { cleanUpActivities } from "./utilities.js";
export async function load({ params }) {
  //put async so it actually waits

  const response = await fetch(
    "https://api.lanyard.rest/v1/users/714482641134551071"
  );
  const data = await response.json();
  let av_link = `https://cdn.discordapp.com/avatars/${data.data.discord_user.id}/${data.data.discord_user.avatar}.webp?size=256`;
  return {
    avatar: av_link,
    customStatus: cleanUpActivities(data.data.activities, true),
  };
}
