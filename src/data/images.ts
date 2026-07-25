import hero from "@/assets/hero-plumber.jpg";
import waterHeater from "@/assets/water-heater.jpg";
import drain from "@/assets/drain-cleaning.jpg";
import bathroom from "@/assets/bathroom.jpg";
import van from "@/assets/service-van.jpg";
import commercial from "@/assets/commercial.jpg";
import gasLine from "@/assets/gas-line.jpg";
import leak from "@/assets/leak-detection.jpg";

export const images = {
  hero,
  waterHeater,
  drain,
  bathroom,
  van,
  commercial,
  gasLine,
  leak,
} as const;

export type ImageKey = keyof typeof images;
