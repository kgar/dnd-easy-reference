// @ts-check

/** @import { PatternDefinitions } from "../types/_types.mjs" */

import { enDefinitions } from "./definitions/en.mjs";
import { frDefinitions } from "./definitions/fr.mjs";

/**
 * @type {Record<string, PatternDefinitions>} Exported Pattern Definitions
 */
export const patternDefinitions = {
  en: enDefinitions,
  fr: frDefinitions,
};
