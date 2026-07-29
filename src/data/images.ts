import hero from "@/assets/hero-plumber.jpg";
import waterHeaterOld from "@/assets/water-heater.jpg";
import drainOld from "@/assets/drain-cleaning.jpg";
import bathroomOld from "@/assets/bathroom.jpg";
import commercialOld from "@/assets/commercial.jpg";
import gasLineOld from "@/assets/gas-line.jpg";
import leakOld from "@/assets/leak-detection.jpg";

import emergencyPlumbing from "@/assets/emergency-plumbing.png";
import waterHeaters from "@/assets/water-heaters.png";
import drainAndSewer from "@/assets/drain-and-sewer.png";
import leakDetection from "@/assets/leak-detection.png";
import repiping from "@/assets/repiping.png";
import gasLine from "@/assets/gas-line.png";
import bathroomPlumbing from "@/assets/bathroom-plumbing.png";
import kitchenPlumbing from "@/assets/kitchen-plumbing.png";
import residentialPlumbing from "@/assets/residential-plumbing.png";
import commercialPlumbing from "@/assets/commercial-plumbing.png";

import aboutTeam from "@/assets/about-team.png";
import areaHero from "@/assets/area-hero.png";
import blogDrain from "@/assets/blog-drain.png";

export const images = {
  hero,
  waterHeaterOld,
  drainOld,
  bathroomOld,
  commercialOld,
  gasLineOld,
  leakOld,
  emergencyPlumbing,
  waterHeaters,
  drainAndSewer,
  leakDetection,
  repiping,
  gasLine,
  bathroomPlumbing,
  kitchenPlumbing,
  residentialPlumbing,
  commercialPlumbing,
  aboutTeam,
  areaHero,
  blogDrain,
} as const;

export type ImageKey = keyof typeof images;
