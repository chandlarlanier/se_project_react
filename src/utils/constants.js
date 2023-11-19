import clearDay from "../images/day/day-clear.svg";
import cloudyDay from "../images/day/day-clouds.svg";
import foggyDay from "../images/day/day-fog.svg";
import rainyDay from "../images/day/day-rain.svg";
import snowyDay from "../images/day/day-snow.svg";
import stormyDay from "../images/day/day-storm.svg";
import clearNight from "../images/night/night-clear.svg";
import cloudyNight from "../images/night/night-clouds.svg";
import foggyNight from "../images/night/night-fog.svg";
import rainyNight from "../images/night/night-rain.svg";
import snowyNight from "../images/night/night-snow.svg";
import stormyNight from "../images/night/night-storm.svg";

const weatherOptions = [
  { url: clearDay, day: true, type: "clear" },
  { url: cloudyDay, day: true, type: "clouds" },
  { url: foggyDay, day: true, type: "fog" },
  { url: rainyDay, day: true, type: "rain" },
  { url: snowyDay, day: true, type: "snow" },
  { url: stormyDay, day: true, type: "storm" },
  { url: clearNight, day: false, type: "clear" },
  { url: cloudyNight, day: false, type: "clouds" },
  { url: foggyNight, day: false, type: "fog" },
  { url: rainyNight, day: false, type: "rain" },
  { url: snowyNight, day: false, type: "snow" },
  { url: stormyNight, day: false, type: "storm" },
];

export { weatherOptions };
