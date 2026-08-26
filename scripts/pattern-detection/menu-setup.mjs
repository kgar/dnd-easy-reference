/** @import { SubMenuItem } from '../types/_types.mjs' */

import { startPatternScan } from "./pattern-scanner.mjs";
import { insertText } from "../prose-mirror/utils.mjs";

/**
 * Gets the submenu items for the Pattern Detection menu.
 * @returns {SubMenuItem[]}
 */
export function getDetectionSubMenuItems() {
  return [
    {
      title: "DND.MENU.HEAL.TITLE",
      key: "detect-heal",
      onMenuItemClick: (menu) =>
        startPatternScan(menu, "heal", (text) => insertText({ text, menu })),
    },
    {
      title: "DND.MENU.SAVES.TITLE",
      key: "detect-save",
      onMenuItemClick: (menu) =>
        startPatternScan(menu, "save", (text) => insertText({ text, menu })),
    },
    {
      title: "DND.MENU.CHECKS.TITLE",
      key: "detect-check",
      onMenuItemClick: (menu) =>
        startPatternScan(menu, "check", (text) => insertText({ text, menu })),
    },
    {
      title: "DND.MENU.DAMAGE.TITLE",
      key: "detect-damage",
      onMenuItemClick: (menu) =>
        startPatternScan(menu, "damage", (text) => insertText({ text, menu })),
    },
    {
      title: "DND.MENU.ATTACK.TITLE",
      key: "detect-attack",
      onMenuItemClick: (menu) =>
        startPatternScan(menu, "attack", (text) => insertText({ text, menu })),
    },
    {
      title: "DND.MENU.CONDITIONTYPES.TITLE",
      key: "detect-condition",
      onMenuItemClick: (menu) =>
        startPatternScan(menu, "condition", (text) => insertText({ text, menu })),
    },
    {
      title: "DND.MENU.RULES.TITLE",
      key: "detect-rule",
      onMenuItemClick: (menu) =>
        startPatternScan(menu, "rule", (text) => insertText({ text, menu })),
    },
    {
      title: "DND.MENU.WEAPONMASTERIES.TITLE",
      key: "detect-weaponMastery",
      onMenuItemClick: (menu) =>
        startPatternScan(menu, "weaponMastery", insertText),
    },
    {
      title: "DND.MENU.AREATARGETTYPES.TITLE",
      key: "detect-areaTargetType",
      onMenuItemClick: (menu) =>
        startPatternScan(menu, "areaTargetType", insertText),
    },
    {
      title: "DND.MENU.ITEMPROPERTIES.TITLE",
      key: "detect-spellProperty",
      onMenuItemClick: (menu) =>
        startPatternScan(menu, "spellProperty", insertText),
    },
    {
      title: "DND.MENU.ABILITIES.TITLE",
      key: "detect-ability",
      onMenuItemClick: (menu) =>
        startPatternScan(menu, "ability", (text) => insertText({ text, menu })),
    },
    {
      title: "DND.MENU.SKILLS.TITLE",
      key: "detect-skill",
      onMenuItemClick: (menu) =>
        startPatternScan(menu, "skill", (text) => insertText({ text, menu })),
    },
    {
      title: "DND.MENU.DAMAGETYPES.TITLE",
      key: "detect-damageType",
      onMenuItemClick: (menu) =>
        startPatternScan(menu, "damageType", (text) => insertText({ text, menu })),
    },
    {
      title: "DND.MENU.CREATURETYPES.TITLE",
      key: "detect-creatureType",
      onMenuItemClick: (menu) =>
        startPatternScan(menu, "creatureType", insertText),
    },
  ];
}
