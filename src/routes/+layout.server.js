import { PUBLIC_USERID } from "$env/static/public";

import dayJS from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import advanedFormat from "dayjs/plugin/advancedFormat";

import { getPalette } from "colorthief";
import { createCanvas, loadImage } from "canvas";

import {
  template_avatar,
  template_banner,
  default_status,
  default_timezone,
  default_format, //see format list: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} from "$lib/jsons/defaults.json";

import { profile_banner } from "$lib/jsons/siteSettings.json";

// extend module https://day.js.org/docs/en/plugin/plugin
dayJS.extend(utc);
dayJS.extend(timezone);
dayJS.extend(advanedFormat);

async function ExtractColorPalette(source) {
  // load the img from the link, creates and draws the image onto a similarly sized canvas, then gets the palette as a buffer
  const image = await loadImage(source);
  const canvas = createCanvas(image.width, image.height);
  const context = canvas.getContext("2d");
  context.drawImage(image, 0, 0);

  const returningPalette = await getPalette(canvas.toBuffer(), {
    colorCount: 3,
  });

  const hexPalette = [];
  returningPalette.forEach((c) => hexPalette.push(c.hex()));

  return hexPalette;
}

function getGuildBadge(user) {
  let guildBadge = {};

  try {
    const guildBadgeImage = `https://cdn.discordapp.com/guild-tag-badges/${user.primary_guild.identity_guild_id}/${user.primary_guild.badge}.png`;
    const guildTagName = user.primary_guild.tag;

    guildBadge["badge"] = guildBadgeImage;
    guildBadge["guild_tag"] = guildTagName;
  } catch (TypeError) {
    //doesnt show up for some reason
    return;
  }

  if (!user.primary_guild.identity_enabled) return; //no guild tag

  return guildBadge;
}

// load profile data
const currentDay = dayJS().tz(default_timezone).format(default_format);
const PaletteOptions = { colorCount: 3 };

async function GetLanyardData() {
  let response = await fetch(
    `https://api.lanyard.rest/v1/users/${PUBLIC_USERID}`,
  );
  response = await response.json();

  if (!response.success) {
    return {
      display_name: "Display Name",
      username: "username",
      avatar: template_avatar,
      banner: template_banner,
      status: default_status,
      date: currentDay,
      palette: await ExtractColorPalette(`./static/${template_banner}`),
    };
  }
  return {
    display_name: response.data.discord_user.display_name,
    username: response.data.discord_user.username,
    avatar: `https://cdn.discordapp.com/avatars/${response.data.discord_user.id}/${response.data.discord_user.avatar}.webp?size=256`,
    banner: profile_banner,
    ...getGuildBadge(response.data.discord_user),
    status: response.data.discord_status,
    date: currentDay,
    palette: await ExtractColorPalette(profile_banner),
  };
}

export async function load() {
  return {
    profileData: await GetLanyardData(),
  };
}
