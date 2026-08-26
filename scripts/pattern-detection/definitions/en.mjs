// @ts-check

/** @import { PatternDefinitions } from '../../types/_types.mjs' */

import { buildAlternationGroup } from "../utils.mjs";

//Abilities
const enAbilityMap = {
  strength: "str",
  dexterity: "dex",
  constitution: "con",
  intelligence: "int",
  wisdom: "wis",
  charisma: "cha",
};

//Skills
const enSkillMap = {
  acrobatics: "acr",
  "animal handling": "ani",
  arcana: "arc",
  athletics: "ath",
  deception: "dec",
  history: "his",
  insight: "ins",
  intimidation: "itm",
  investigation: "inv",
  medicine: "med",
  nature: "nat",
  perception: "prc",
  performance: "prf",
  persuasion: "per",
  religion: "rel",
  "sleight of hand": "slt",
  stealth: "ste",
  survival: "sur",
};

//Tools
const enToolMap = {
  "alchemist's supplies": "alchemist",
  "brewer's supplies": "brewer",
  "calligrapher's supplies": "calligrapher",
  "carpenter's tools": "carpenter",
  "cartographer's tools": "cartographer",
  "cobbler's tools": "cobbler",
  "cook's utensils": "cook",
  "glassblower's tools": "glassblower",
  "jeweler's tools": "jeweler",
  "leatherworker's tools": "leatherworker",
  "mason's tools": "mason",
  "painter's supplies": "painter",
  "potter's tools": "potter",
  "smith's tools": "smith",
  "tinker's tools": "tinker",
  "weaver's tools": "weaver",
  "woodcarver's tools": "woodcarver",
  "disguise kit": "disg",
  "forgery kit": "forg",
  "dice set": "dice",
  dice: "dice",
  "dragonchess set": "chess",
  dragonchess: "chess",
  "playing card set": "card",
  "playing cards": "card",
  "herbalism kit": "herb",
  bagpipes: "bagpipes",
  drum: "drum",
  dulcimer: "dulcimer",
  flute: "flute",
  horn: "horn",
  lute: "lute",
  lyre: "lyre",
  "pan flute": "panflute",
  shawm: "shawm",
  viol: "viol",
  "navigator's tools": "navg",
  "poisoner's kit": "pois",
  "thieves' tools": "thief",
  "vehicle (air)": "air",
  "air vehicle": "air",
  "vehicle (land)": "land",
  "land vehicle": "land",
  "vehicle (space)": "space",
  "space vehicle": "space",
  "vehicle (water)": "water",
  "water vehicle": "water",
};

//Damage Types
const enDamageTypeMap = {
  acid: "acid",
  bludgeoning: "bludgeoning",
  cold: "cold",
  fire: "fire",
  force: "force",
  lightning: "lightning",
  necrotic: "necrotic",
  piercing: "piercing",
  poison: "poison",
  psychic: "psychic",
  radiant: "radiant",
  slashing: "slashing",
  thunder: "thunder",
};

//Conditions
const enConditionMap = {
  blinded: "blinded",
  charmed: "charmed",
  deafened: "deafened",
  exhaustion: "exhaustion",
  frightened: "frightened",
  grappled: "grappled",
  incapacitated: "incapacitated",
  invisible: "invisible",
  paralyzed: "paralyzed",
  poisoned: "poisoned",
  prone: "prone",
  restrained: "restrained",
  stunned: "stunned",
  unconscious: "unconscious",
  blind: "blinded",
  deaf: "deafened",
  exhausted: "exhaustion",
  petrified: "petrified",
};

//Rules
const enRuleMap = {
  inspiration: "inspiration",
  "carrying capacity": "carryingcapacity",
  push: "push",
  drag: "drag",
  lift: "lift",
  encumbrance: "encumbrance",
  hiding: "hiding",
  "passive perception": "passiveperception",
  time: "time",
  speed: "speed",
  "travel pace": "travelpace",
  "forced march": "forcedmarch",
  "difficult terrain pace": "difficultterrainpace",
  climbing: "climbing",
  swimming: "swimming",
  "long jump": "longjump",
  "high jump": "highjump",
  jumping: "jumping",
  falling: "falling",
  suffocating: "suffocating",
  vision: "vision",
  light: "light",
  "lightly obscured": "lightlyobscured",
  "heavily obscured": "heavilyobscured",
  "bright light": "brightlight",
  "dim light": "dimlight",
  darkness: "darkness",
  blindsight: "blindsight",
  darkvision: "darkvision",
  tremorsense: "tremorsense",
  truesight: "truesight",
  food: "food",
  water: "water",
  resting: "resting",
  "short rest": "shortrest",
  "long rest": "longrest",
  surprise: "surprise",
  initiative: "initiative",
  "bonus action": "bonusaction",
  reaction: "reaction",
  "difficult terrain": "difficultterrain",
  "being prone": "beingprone",
  "dropping prone": "droppingprone",
  "standing up": "standingup",
  crawling: "crawling",
  "moving around other creatures": "movingaroundothercreatures",
  flying: "flying",
  size: "size",
  space: "space",
  squeezing: "squeezing",
  attack: "attack",
  "cast a spell": "castaspell",
  dash: "dash",
  disengage: "disengage",
  dodge: "dodge",
  help: "help",
  hide: "hide",
  ready: "ready",
  search: "search",
  "use an object": "useanobject",
  "attack rolls": "attackrolls",
  "unseen attackers": "unseenattackers",
  "unseen targets": "unseentargets",
  "ranged attacks": "rangedattacks",
  range: "range",
  "ranged attacks in close combat": "rangedattacksinclosecombat",
  "melee attacks": "meleeattacks",
  reach: "reach",
  "unarmed strike": "unarmedstrike",
  "opportunity attacks": "opportunityattacks",
  "two weapon fighting": "twoweaponfighting",
  grappling: "grappling",
  "escaping a grapple": "escapingagrapple",
  "moving a grappled creature": "movingagrappledcreature",
  shoving: "shoving",
  cover: "cover",
  "half cover": "halfcover",
  "three quarters cover": "threequarterscover",
  "total cover": "totalcover",
  "hit points": "hitpoints",
  "damage rolls": "damagerolls",
  "critical hits": "criticalhits",
  "damage types": "damagetypes",
  "damage resistance": "damageresistance",
  resistance: "resistance",
  "damage vulnerability": "damagevulnerability",
  vulnerability: "damagevulnerability",
  healing: "healing",
  "instant death": "instantdeath",
  "death saving throws": "deathsavingthrows",
  "death saves": "deathsaves",
  stabilizing: "stabilizing",
  "knocking a creature out": "knockingacreatureout",
  "temporary hit points": "temporaryhitpoints",
  "temp hp": "temphp",
  mounting: "mounting",
  dismounting: "dismounting",
  "controlling a mount": "controllingamount",
  "underwater combat": "underwatercombat",
  "spell level": "spelllevel",
  "known spells": "knownspells",
  "prepared spells": "preparedspells",
  "spell slots": "spellslots",
  "casting at a higher level": "castingatahigherlevel",
  upcasting: "upcasting",
  "casting in armor": "castinginarmor",
  cantrips: "cantrips",
  rituals: "rituals",
  "casting time": "castingtime",
  "bonus action casting": "bonusactioncasting",
  "reaction casting": "reactioncasting",
  "longer casting times": "longercastingtimes",
  "spell range": "spellrange",
  components: "components",
  verbal: "verbal",
  somatic: "somatic",
  material: "material",
  "spell duration": "spellduration",
  instantaneous: "instantaneous",
  concentrating: "concentrating",
  concentration: "concentrating",
  "spell targets": "spelltargets",
  "area of effect": "areaofeffect",
  aoe: "areaofeffect",
  "point of origin": "pointoforigin",
  "spell saving throws": "spellsavingthrows",
  "spell attack rolls": "spellattackrolls",
  "combining magical effects": "combiningmagicaleffects",
  "schools of magic": "schoolsofmagic",
  "detecting traps": "detectingtraps",
  "disabling traps": "disablingtraps",
  "curing madness": "curingmadness",
  "damage threshold": "damagethreshold",
  "poison types": "poisontypes",
  "contact poison": "contactpoison",
  "ingested poison": "ingestedpoison",
  "inhaled poison": "inhaledpoison",
  "injury poison": "injurypoison",
  attunement: "attunement",
  "wearing items": "wearingitems",
  "wielding items": "wieldingitems",
  "multiple items of the same kind": "multipleitemsofthesamekind",
  "paired items": "paireditems",
  "command word": "commandword",
  consumables: "consumables",
  "item spells": "itemspells",
  charges: "charges",
  "spell scroll": "spellscroll",
  "creature tags": "creaturetags",
  telepathy: "telepathy",
  "legendary actions": "legendaryactions",
  "lair actions": "lairactions",
  "regional effects": "regionaleffects",
  disease: "disease",
  "d20 test": "d20test",
  advantage: "advantage",
  disadvantage: "disadvantage",
  "difficulty class": "difficultyclass",
  dc: "difficultyclass",
  "armor class": "armorclass",
  ac: "armorclass",
  "ability check": "abilitycheck",
  "saving throw": "savingthrow",
  "challenge rating": "challengerating",
  cr: "challengerating",
  expertise: "expertise",
  influence: "influence",
  magic: "magic",
  study: "study",
  utilize: "utilize",
  friendly: "friendly",
  indifferent: "indifferent",
  hostile: "hostile",
  "breaking objects": "breakingobjects",
  hazards: "hazards",
  bloodied: "bloodied",
};

//Weapon Masteries
const enWeaponMasteryMap = {
  cleave: "cleave",
  graze: "graze",
  nick: "nick",
  push: "push",
  sap: "sap",
  slow: "slow",
  topple: "topple",
  vex: "vex",
};

//Area Targets
const enAreaTargetTypeMap = {
  cone: "cone",
  cube: "cube",
  cylinder: "cylinder",
  line: "line",
  radius: "radius",
};

//Spell Properties
const enSpellPropertyMap = {
  concentration: "concentration",
  material: "material",
  ritual: "ritual",
  somatic: "somatic",
  verbal: "verbal",
};

//Creature Types
const enCreatureTypeMap = {
  aberration: "aberration",
  beast: "beast",
  celestial: "celestial",
  construct: "construct",
  dragon: "dragon",
  elemental: "elemental",
  fey: "fey",
  fiend: "fiend",
  giant: "giant",
  humanoid: "humanoid",
  monstrosity: "monstrosity",
  ooze: "ooze",
  plant: "plant",
  undead: "undead",
};

const enAbilityList = buildAlternationGroup(enAbilityMap);
const enSkillList = buildAlternationGroup(enSkillMap);
const enToolList = buildAlternationGroup(enToolMap);
const enDamageTypeList = buildAlternationGroup(enDamageTypeMap);
const enConditionList = buildAlternationGroup(enConditionMap);
const enRuleList = buildAlternationGroup(enRuleMap);
const enWeaponMasteryList = buildAlternationGroup(enWeaponMasteryMap);
const enAreaTargetTypeList = buildAlternationGroup(enAreaTargetTypeMap);
const enSpellPropertyList = buildAlternationGroup(enSpellPropertyMap);
const enCreatureTypeList = buildAlternationGroup(enCreatureTypeMap);

/**
 * @type {PatternDefinitions}
 */
export const enDefinitions = {
  abilityKeyMap: enAbilityMap,
  skillKeyMap: enSkillMap,
  toolKeyMap: enToolMap,
  damageTypeKeyMap: enDamageTypeMap,
  conditionKeyMap: enConditionMap,
  ruleKeyMap: enRuleMap,
  weaponMasteryKeyMap: enWeaponMasteryMap,
  areaTargetTypeKeyMap: enAreaTargetTypeMap,
  spellPropertyKeyMap: enSpellPropertyMap,
  creatureTypeKeyMap: enCreatureTypeMap,
  // Matches "X (Formula) [temporary] hit points" or "'Formula' [temporary] hit points"
  heal: {
    pattern:
      /(?:(\d+)\s*\(\s*('?)(\d+(?:d\d+)?(?:\s*[+-]\s*\d+)*)\2\s*\)|('?)(\d+(?:d\d+)?(?:\s*[+-]\s*\d+)*)\4)\s+(?:(temporary)\s+)?hit\s+points?\b/gi,
    // Average value
    averageGroup: 1,
    // Formula within parenthesis
    formulaInParensGroup: 3,
    // Optional quote for direct formula
    directFormulaQuoteGroup: 4,
    // Direct formula value
    directFormulaGroup: 5,
    // "temporary" keyword
    tempGroup: 6,
  },
  // Matches "[DC XX] Ability saving throw/save", "[DC XX] Concentration check/saving throw/save", "Ability saving throw/save [DC XX]", "Ability saving throw/save [(DC XX)]", "Concentration check/saving throw/save [DC XX]", or "Concentration check/saving throw/save [(DC XX)]"
  save: {
    pattern: new RegExp(
      String.raw`(?:(?:DC\s+(\d+)\s+(?:(${enAbilityList})\s+(?:saving\s+throw|save)|(Concentration)\s+(?:saving\s+throw|save|check)))|(?:(?:(${enAbilityList})\s+(?:saving\s+throw|save)|(Concentration)\s+(?:saving\s+throw|save|check))(?:\s+(?:\(DC\s+(\d+)\)|DC\s+(\d+)))?))`, // v4 regex is structurally okay
      "gi",
    ),
    //Group 1: DC First
    dcGroup1: 1, //DC value
    abilityGroup1: 2, //Ability name
    concentrationGroup1: 3, //Concentration Keyword
    //Group 2: DC Last
    abilityGroup2: 4, //Ability name
    concentrationGroup2: 5, //Concentration Keyword
    dcGroup2_paren: 6, // DC value inside parenthesis (Ex: (DC 18))
    dcGroup2_noparen: 7, // DC value
  },
  // Matches "[DC XX] Ability [(Skill/Tool)] check/test", "[DC XX] Skill check/test", "[DC XX] Tool check/test", "Ability [(Skill/Tool)] check/test [(DC XX)]", "Skill check/test [(DC XX)]", "Tool check/test [(DC XX)]", or "passive Skill score of XX"
  check: {
    pattern: new RegExp(
      String.raw`(?:(?:(?:(DC)\s+(\d+))\s+)?(?:(${enAbilityList})\s*(?:\(\s*(${enSkillList}|${enToolList})\s*\))?|(${enSkillList})|(${enToolList}))\s+(check|test)(?:\s+\(DC\s+(\d+)\))?)|(?:(passive)\s+(${enSkillList})\s+(?:score\s+of|of)\s+(\d+)(?:\s+or\s+higher)?)\b`,
      "gi",
    ),
    dcMarker1: 1, //DC keyword at the start
    dcValue1: 2, //DC value
    abilityContext: 3, //Ability name
    skillOrToolInParen: 4, //Skill or Tool name within parentheses
    skillStandalone: 5, //Skill name alone
    toolStandalone: 6, //tool name alone
    checkMarker: 7, //check keyword
    dcValue2_paren: 8, //DC value in parentheses at the end
    passiveMarker: 9, //The passive keyword
    passiveSkill: 10, //passive skill name
    passiveDcValue: 11, //DC value
  },
  // Matches "X (Formula) [type(s)] damage" or "'Formula' [type(s)] damage"
  damage: {
    pattern: new RegExp(
      String.raw`(?:(\d+)\s*\(\s*('?)(\d+(?:d\d+)?(?:\s*[+-]\s*\d+)*)\2\s*\)|('?)(\d+(?:d\d+)?(?:\s*[+-]\s*\d+)*)\4)\s+(?:(${enDamageTypeList}(?:\s+(?:or|,)\s+${enDamageTypeList})*)?\s+)?(damage)\b`,
      "gi",
    ),
    // Average value
    averageGroup: 1,
    // Formula within parenthesis
    formulaInParensGroup: 3,
    // Optional quote for formula
    directFormulaQuoteGroup: 4,
    //  Direct formula value
    directFormulaGroup: 5,
    // Damage type(s) string
    damageTypesGroup: 6,
    // "damage" keyword
    damageKeywordGroup: 7,
  },
  // Matches "+X to hit" or "-X to hit"
  attack: {
    pattern: /(?<=\s|^)([+-])\s*(\d+)\s+to\s+hit\b/gi,
    // Sign (+ or -)
    signGroup: 1,
    // Attack bonus number
    numberGroup: 2,
  },
  // All of the below matches the names from the corresponding maps
  condition: {
    pattern: new RegExp(String.raw`\b(${enConditionList})\b`, "gi"),
    nameGroup: 1,
  },
  rule: {
    pattern: new RegExp(String.raw`\b(${enRuleList})\b`, "gi"),
    nameGroup: 1,
  },
  weaponMastery: {
    pattern: new RegExp(String.raw`\b(${enWeaponMasteryList})\b`, "gi"),
    nameGroup: 1,
  },
  areaTargetType: {
    pattern: new RegExp(String.raw`\b(${enAreaTargetTypeList})\b`, "gi"),
    nameGroup: 1,
  },
  spellProperty: {
    pattern: new RegExp(String.raw`\b(${enSpellPropertyList})\b`, "gi"),
    nameGroup: 1,
  },
  ability: {
    pattern: new RegExp(String.raw`\b(${enAbilityList})\b`, "gi"),
    nameGroup: 1,
  },
  skill: {
    pattern: new RegExp(String.raw`\b(${enSkillList})\b`, "gi"),
    nameGroup: 1,
  },
  damageType: {
    pattern: new RegExp(String.raw`\b(${enDamageTypeList})\b`, "gi"),
    nameGroup: 1,
  },
  creatureType: {
    pattern: new RegExp(String.raw`\b(${enCreatureTypeList})\b`, "gi"),
    nameGroup: 1,
  },
};
