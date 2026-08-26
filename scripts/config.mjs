// @ts-check

/** @import { MenuConfigItem, SubMenuItem } from "./types/_types.mjs" */

import AttackFormulaDialog from "./applications/attack-formula.mjs";
import AwardFormulaDialog from "./applications/award-formula.mjs";
import CheckFormulaDialog from "./applications/check-formula.mjs";
import ConditionFormulaDialog from "./applications/condition-formula.mjs";
import DamageFormulaDialog from "./applications/damage-formula.mjs";
import HealFormulaDialog from "./applications/heal-formula.mjs";
import LookupFormulaDialog from "./applications/lookup-formula.mjs";
import RuleFormulaDialog from "./applications/rule-formula.mjs";
import SaveFormulaDialog from "./applications/save-formula.mjs";
import { insertText } from "./prose-mirror/utils.mjs";
import { createReferenceSubMenuEntriesFromSourceData } from "./reference.mjs";
import { getDetectionSubMenuItems } from "./pattern-detection/menu-setup.mjs";
import { getStyleMenuSubItems } from "./style-blocks/menu-setup.mjs";

/**
 * Gets the full menu config for the module.
 * @returns {Record<string, MenuConfigItem>}
 */
export function getMenuConfig() {
  return {
    saves: {
      title: "DND.MENU.SAVES.TITLE",
      setting: {
        key: "showsaves",
        name: "DND.MENU.SAVES.SETTING_NAME",
      },
      onMenuItemClick: async (menu) => {
        const text = await SaveFormulaDialog.create();
        insertText({ text, menu });
      },
    },
    checks: {
      onMenuItemClick: async (menu) => {
        const text = await CheckFormulaDialog.create();
        insertText({ text, menu });
      },
      setting: {
        key: "showchecks",
        name: "DND.MENU.CHECKS.SETTING_NAME",
      },
      title: "DND.MENU.CHECKS.TITLE",
    },
    attack: {
      onMenuItemClick: async (menu) => {
        const text = await AttackFormulaDialog.create();
        insertText({ text, menu });
      },
      setting: {
        key: "showattack",
        name: "DND.MENU.ATTACK.SETTING_NAME",
      },
      title: "DND.MENU.ATTACK.TITLE",
    },
    damage: {
      onMenuItemClick: async (menu) => {
        const text = await DamageFormulaDialog.create();
        insertText({ text, menu });
      },
      setting: {
        key: "showdamage",
        name: "DND.MENU.DAMAGE.SETTING_NAME",
      },
      title: "DND.MENU.DAMAGE.TITLE",
    },
    heal: {
      onMenuItemClick: async (menu) => {
        const text = await HealFormulaDialog.create();
        if (text) insertText({ text, menu });
      },
      setting: {
        key: "showheal",
        name: "DND.MENU.HEAL.SETTING_NAME",
      },
      title: "DND.MENU.HEAL.TITLE",
    },
    conditionTypes: {
      onMenuItemClick: async (menu) => {
        const text = await ConditionFormulaDialog.create();
        insertText({ text, menu });
      },
      setting: {
        key: "showconditionTypes",
        name: "DND.MENU.CONDITIONTYPES.SETTING_NAME",
      },
      title: "DND.MENU.CONDITIONTYPES.TITLE",
    },
    award: {
      onMenuItemClick: async (menu) => {
        const text = await AwardFormulaDialog.create();
        insertText({ text, menu });
      },
      setting: {
        key: "showaward",
        name: "DND.MENU.AWARD.SETTING_NAME",
      },
      title: "DND.MENU.AWARD.TITLE",
    },
    lookup: {
      onMenuItemClick: async (menu) => {
        const text = await LookupFormulaDialog.create();
        insertText({ text, menu });
      },
      setting: {
        key: "showlookup",
        name: "DND.MENU.LOOKUP.SETTING_NAME",
      },
      title: "DND.MENU.LOOKUP.TITLE",
    },
    rules: {
      onMenuItemClick: async (menu) => {
        const text = await RuleFormulaDialog.create();
        insertText({ text, menu });
      },
      setting: {
        key: "showrules",
        name: "DND.MENU.RULES.SETTING_NAME",
      },
      title: "DND.MENU.RULES.TITLE",
    },
    weaponMasteries: {
      title: "DND.MENU.WEAPONMASTERIES.TITLE",
      setting: {
        key: "showweaponMasteries",
        name: "DND.MENU.WEAPONMASTERIES.SETTING_NAME",
      },
      items: () =>
        createReferenceSubMenuEntriesFromSourceData({
          source: "weaponMasteries",
          callback: async ({ key, menu }) => {
            const reference = `weaponMastery=${key}`;
            insertText({ text: `&Reference[${reference}]`, menu });
          },
        }),
    },
    areaTargetTypes: {
      title: "DND.MENU.AREATARGETTYPES.TITLE",
      setting: {
        key: "showareaTargetTypes",
        name: "DND.MENU.AREATARGETTYPES.SETTING_NAME",
      },
      items: () =>
        createReferenceSubMenuEntriesFromSourceData({
          source: "areaTargetTypes",
          callback: async ({ key, menu }) => {
            insertText({ text: `&Reference[${key}]`, menu });
          },
        }),
    },
    itemProperties: {
      title: "DND.MENU.ITEMPROPERTIES.TITLE",
      setting: {
        key: "showitemProperties",
        name: "DND.MENU.ITEMPROPERTIES.SETTING_NAME",
      },
      items: () =>
        createReferenceSubMenuEntriesFromSourceData({
          source: "itemProperties",
          callback: async ({ key, menu }) => {
            insertText({ text: `&Reference[${key}]`, menu });
          },
        }),
    },
    abilities: {
      title: "DND.MENU.ABILITIES.TITLE",
      setting: {
        key: "showabilities",
        name: "DND.MENU.ABILITIES.SETTING_NAME",
      },
      items: () =>
        createReferenceSubMenuEntriesFromSourceData({
          source: "abilities",
          callback: async ({ key, menu }) => {
            insertText({ text: `&Reference[${key}]`, menu });
          },
        }),
    },
    skills: {
      title: "DND.MENU.SKILLS.TITLE",
      setting: {
        key: "showskills",
        name: "DND.MENU.SKILLS.SETTING_NAME",
      },
      items: () =>
        createReferenceSubMenuEntriesFromSourceData({
          source: "skills",
          callback: async ({ key, menu }) => {
            insertText({ text: `&Reference[${key}]`, menu });
          },
        }),
    },
    damageTypes: {
      title: "DND.MENU.DAMAGETYPES.TITLE",
      setting: {
        key: "showdamageTypes",
        name: "DND.MENU.DAMAGETYPES.SETTING_NAME",
      },
      items: () =>
        createReferenceSubMenuEntriesFromSourceData({
          source: "damageTypes",
          callback: async ({ key, menu }) => {
            insertText({ text: `&Reference[${key}]`, menu });
          },
        }),
    },
    creatureTypes: {
      title: "DND.MENU.CREATURETYPES.TITLE",
      setting: {
        key: "showcreatureTypes",
        name: "DND.MENU.CREATURETYPES.SETTING_NAME",
      },
      items: () =>
        createReferenceSubMenuEntriesFromSourceData({
          source: "creatureTypes",
          callback: async ({ key, menu }) => {
            insertText({ text: `&Reference[${key}]`, menu });
          },
        }),
    },
    detectPattern: {
      title: "DND.MENU.DETECTPATTERNS.TITLE",
      setting: {
        key: "showdetectPatterns",
        name: "DND.MENU.DETECTPATTERNS.SETTING_NAME",
      },
      items: () => getDetectionSubMenuItems().sort(localeSort),
    },
    styles: {
      title: "DND.MENU.STYLE.TITLE",
      setting: {
        key: "showstyle",
        name: "DND.MENU.STYLE.SETTING_NAME",
      },
      items: getStyleMenuSubItems().sort(localeSort),
    },
  };
}

/**
 * Sorts a menu config or submenu item by title.
 * @param {MenuConfigItem|SubMenuItem} a
 * @param {MenuConfigItem|SubMenuItem} b
 * @returns
 */
function localeSort(a, b) {
  return game.i18n.localize(a.title).localeCompare(game.i18n.localize(b.title));
}
