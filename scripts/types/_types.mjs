// @ts-check

/**
 * @typedef MenuConfigItem    A menu item in the D&D Easy Reference menu at the top level.
 * @property {string} title   The text to show for the menu item.
 * @property {MenuItemClickCallback} [onMenuItemClick]    What to do when the menu item is clicked.
 * @property {SubMenuItem[] | (() => SubMenuItem[])} [items]    Submenu items, or a function for retrieving submenu items.
 * @property {MenuConfigItemConfigSetting} [setting]    For internal use only. Sets up visibility toggle settings for built-in easy references.
 */

/**
 * @typedef MenuConfigItemConfigSetting    The data needed to established a visibility toggle for a given MenuConfigItem.
 * @property {string} key    The setting key, which is used to save and load the setting.
 * @property {string} name   The localization key for the setting name.
 */

/**
 * @typedef {(menu: any) => Promise<void>} MenuItemClickCallback    What to do when the menu item is clicked.
 *                                                                  `menu` is a `ProseMirrorMenu` instance, which is used
 *                                                                  to access commands for toggling blocks, inserting text, etc.
 */

/**
 * @typedef SubMenuItem    A submenu item.
 * @property {string} title    The text to show for the submenu item.
 * @property {string} key    A unique identifier for this submenu item amongst its direct peers menu items.
 * @property {MenuItemClickCallback?} onMenuItemClick    What to do when this submenu item is clicked.
 */

/**
 * @typedef {Object} PatternDefinitions
 * @property {Record<string, string>} abilityKeyMap
 * @property {Record<string, string>} skillKeyMap
 * @property {Record<string, string>} toolKeyMap
 * @property {Record<string, string>} damageTypeKeyMap
 * @property {Record<string, string>} conditionKeyMap
 * @property {Record<string, string>} ruleKeyMap
 * @property {Record<string, string>} weaponMasteryKeyMap
 * @property {Record<string, string>} areaTargetTypeKeyMap
 * @property {Record<string, string>} spellPropertyKeyMap
 * @property {Record<string, string>} creatureTypeKeyMap
 * @property {HealPatternConfig} heal
 * @property {SavePatternConfig} save
 * @property {CheckPatternConfig} check
 * @property {DamagePatternConfig} damage
 * @property {AttackPatternConfig} attack
 * @property {PatternWithNameGroup} condition
 * @property {PatternWithNameGroup} rule
 * @property {PatternWithNameGroup} weaponMastery
 * @property {PatternWithNameGroup} areaTargetType
 * @property {PatternWithNameGroup} spellProperty
 * @property {PatternWithNameGroup} ability
 * @property {PatternWithNameGroup} skill
 * @property {PatternWithNameGroup} damageType
 * @property {PatternWithNameGroup} creatureType
 */

/**
 * @typedef HealPatternConfig
 * @property {RegExp} pattern
 * @property {number} averageGroup
 * @property {number} formulaInParensGroup
 * @property {number} directFormulaQuoteGroup
 * @property {number} directFormulaGroup
 * @property {number} tempGroup
 */

/**
 * @typedef SavePatternConfig
 * @property {RegExp} pattern
 * @property {number} dcGroup1
 * @property {number} abilityGroup1
 * @property {number} concentrationGroup1
 * @property {number} abilityGroup2
 * @property {number} concentrationGroup2
 * @property {number} dcGroup2_paren
 * @property {number} dcGroup2_noparen
 */

/**
 * @typedef CheckPatternConfig
 * @property {RegExp} pattern
 * @property {number} dcMarker1
 * @property {number} dcValue1
 * @property {number} abilityContext
 * @property {number} skillOrToolInParen
 * @property {number} skillStandalone
 * @property {number} toolStandalone
 * @property {number} [checkMarker]
 * @property {number} dcValue2_paren
 * @property {number} [dcValue2_noparen]
 * @property {number} [passiveAltPerception]
 * @property {number} passiveMarker
 * @property {number} passiveSkill
 * @property {number} passiveDcValue
 */

/**
 * @typedef AttackPatternConfig
 * @property {RegExp} pattern
 * @property {number} signGroup
 * @property {number} numberGroup
 */

/**
 * @typedef DamagePatternConfig
 * @property {RegExp} pattern
 * @property {number} averageGroup
 * @property {number} formulaInParensGroup
 * @property {number} directFormulaQuoteGroup
 * @property {number} directFormulaGroup
 * @property {number} damageTypesGroup
 * @property {number} damageKeywordGroup
 */

/**
 * @typedef PatternWithNameGroup
 * @property {RegExp} pattern
 * @property {number} nameGroup
 */