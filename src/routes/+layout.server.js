import video from "$lib/video/fragrance.mp4";
import audio from "$lib/audio/fragrance.mp3";

export async function load() {
  return {
    vid: video,
    audio: audio,
  };
}
