/**
 * Builds a regex alternation group (?:key1|key2|...) from map keys.
 */
export function buildAlternationGroup(map) {
  if (!map || typeof map !== "object") return "";

  // Escape basic regex chars
  const escapedKeys = Object.keys(map)
    .map((key) => key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .sort((a, b) => b.length - a.length);

  if (escapedKeys.length === 0) return "";

  return `(?:${escapedKeys.join("|")})`;
}

/**
 * Universally localize things direct string IDs or data-driven string IDs.
 * @param {string} stringId
 * @param {Record<string, unknown>} [data]
 * @returns {string}
 */
export function localize(stringId, data) {
  return game.release.generation < 14 && data
    ? game.i18n.format(stringId, data)
    : game.i18n.localize(stringId, data);
}
