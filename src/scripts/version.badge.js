// a executable command that prints the version of the package and save it in ./assets/version.badge
// Usage: node cmd/version.badge.js

import packageJSON from "../../package.json" assert { type: "json" };
import { createBadge } from "./badge.js";

const { version } = packageJSON;

createBadge({
  label: "version",
  message: version,
  color: "green",
});
