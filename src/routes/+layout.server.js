import { PUBLIC_USERID } from "$env/static/public";
import { env } from "$env/dynamic/private";

import {
  template_avatar,
  template_banner,
  default_status,
  default_timezone,
  default_format, //see format list: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} from "$lib/jsons/defaults.json";

function getGuildBadge(user) {
  let guildBadge = {};

  try {
    const guildBadgeImage = `https://cdn.discordapp.com/guild-tag-badges/${user.primary_guild.identity_guild_id}/${user.primary_guild.badge}.png`;
    const guildTagName = user.primary_guild.tag;

    guildBadge["badge"] = guildBadgeImage;
    guildBadge["guild_tag"] = guildTagName;
  } catch (TypeError) {
    //doesnt show up for some reason ()
    return;
  }

  if (!user.primary_guild.identity_enabled) return; //no guild tag

  return guildBadge;
}

// load profile data
async function GetLanyardData() {
  let Lanyard_response = await fetch(
    `https://api.lanyard.rest/v1/users/${PUBLIC_USERID}`,
  );
  Lanyard_response = await Lanyard_response.json();
  console.log(Lanyard_response);
  if (!Lanyard_response.success) {
    return {
      display_name: "Display Name",
      username: "username",
      avatar: template_avatar,
      status: default_status,
    };
  }

  const discord_avatar = `https://cdn.discordapp.com/avatars/${Lanyard_response.data.discord_user.id}/${Lanyard_response.data.discord_user.avatar}.png?size=256`;

  return {
    display_name: Lanyard_response.data.discord_user.display_name,
    username: Lanyard_response.data.discord_user.username,
    avatar: discord_avatar,
    ...getGuildBadge(Lanyard_response.data.discord_user),
    status: Lanyard_response.data.discord_status,
  };
}

async function getSteam_API_data() {
  // use https://steamid.io/lookup/ for ids
  if (!env.STEAM_API_KEY)
    return {
      image: "/steam.svg",
      link: "https://steamcommunity.com",
      caption: "None",
    };

  const steamAPI_REQUEST = await fetch(
    `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${env.STEAM_API_KEY}&steamids=76561199216739443`,
  );
  const jsonReturned = await steamAPI_REQUEST.json();
  const playersTable = jsonReturned.response.players;

  if (playersTable.length > 0) {
    return {
      image: "/steam.svg",
      link: playersTable[0].profileurl,
      caption: playersTable[0].personaname,
    };
  }
}

const returnedData = await GetLanyardData();
const steam_connectionData = await getSteam_API_data();

export function load() {
  return {
    profileData: returnedData,
    steamData: steam_connectionData,
  };
}
