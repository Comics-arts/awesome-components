import { makeBadge } from "badge-maker";
import fs from "fs";

export const createBadge = (format) => {
  try {
    const badge = makeBadge(format);
    fs.writeFileSync(`./src/assets/${format.label}.badge.svg`, badge);
    console.log(
      `${format.label} badge saved in ./src/assets/${format.label}.badge.svg`,
    );
  } catch (e) {
    console.error(e);
  }
};
