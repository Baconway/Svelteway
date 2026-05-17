import { USERID } from "$env/static/private";

import dayJS from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import advanedFormat from "dayjs/plugin/advancedFormat";

import { getPalette } from "colorthief";

import {
  template_avatar,
  template_banner,
  default_timezone,
  default_format, //see format list: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} from "$lib/defaults/defaultProfile.json";

import video from "$lib/video/fragrance.mp4";
import audio from "$lib/audio/fragrance.mp3";

// extend module https://day.js.org/docs/en/plugin/plugin
dayJS.extend(utc);
dayJS.extend(timezone);
dayJS.extend(advanedFormat);

// load profile data
const currentDay = dayJS().tz(default_timezone).format(default_format);
const PaletteOptions = { colorCount: 3 };

async function ExtractColorPalette(source) {
  const returningPalette = await getPalette(source, PaletteOptions);

  const hexPalette = [];
  returningPalette.forEach((c) => hexPalette.push(c.hex()));

  return hexPalette;
}

async function GetLanyardData() {
  let response = await fetch(`https://api.lanyard.rest/v1/users/${USERID}`);
  response = await response.json();

  if (!response.success) {
    return {
      display_name: "Display Name",
      username: "username",
      avatar: template_avatar,
      banner: template_banner,
      date: currentDay,
      palette: await ExtractColorPalette(`./static/${template_banner}`),
    };
  }

  return {
    display_name: response.data.discord_user.display_name,
    username: response.data.discord_user.username,
    avatar: `https://cdn.discordapp.com/avatars/${response.data.discord_user.id}/${response.data.discord_user.avatar}.webp?size=256`,
    banner: "/frame.png",
    date: currentDay,
    palette: await ExtractColorPalette(`./static/frame.png`),
  };
}

export async function load() {
  return {
    profileData: await GetLanyardData(),
    vid: video,
    audio: audio,
  };
}
