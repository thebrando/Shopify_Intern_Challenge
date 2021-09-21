var faker = require("faker");
const axios = require("axios");
const fs = require("graceful-fs");
const TOTAL = 10001;
const folderCIDForImages = "QmWJrJvXrGXG6AwmfmMHpRFMQ56aprFBU7jeGXS545pzcn";
const gatewayCustomDomain = "https://looterra.mypinata.cloud";
const gif = ".gif";
const planetNames = [];

function namegen(count) {
  var vowels = {
      1: [
        "b",
        "c",
        "d",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "p",
        "q",
        "r",
        "s",
        "t",
        "v",
        "w",
        "x",
        "y",
        "z",
      ],
      2: ["a", "e", "o", "u", "y"],
      3: [
        "br",
        "cr",
        "dr",
        "fr",
        "gr",
        "hr",
        "jr",
        "kr",
        "lr",
        "mr",
        "pr",
        "str",
        "tr",
        "bl",
        "cl",
        "fl",
        "gl",
        "pl",
        "sl",
        "sc",
        "sk",
        "sm",
        "sn",
        "sp",
        "st",
        "sw",
        "ch",
        "sh",
        "th",
        "wh",
      ],
      4: [
        "ae",
        "aa",
        "ai",
        "ao",
        "au",
        "a",
        "ay",
        "ea",
        "ee",
        "ei",
        "eo",
        "eu",
        "e",
        "ey",
        "ua",
        "uu",
        "ue",
        "ui",
        "uo",
        "u",
        "uy",
        "ia",
        "ii",
        "ie",
        "iu",
        "io",
        "iy",
        "oa",
        "oe",
        "ou",
        "oi",
        "o",
        "oo",
        "oy",
      ],
      5: [
        "turn",
        "ter",
        "nus",
        "rus",
        "tania",
        "hiri",
        "hines",
        "gawa",
        "nides",
        "nodes",
        "carro",
        "rilia",
        "stea",
        "stoe",
        "lia",
        "lian",
        "lie",
        "russ",
        "bon",
        "piv",
        "lea",
        "ria",
        "nov",
        "phus",
        "mia",
        "nerth",
        "wei",
        "ruta",
        "tov",
        "zuno",
        "vis",
        "lara",
        "nia",
        "liv",
        "tera",
        "gantu",
        "ginsu",
        "yama",
        "yoko",
        "tune",
        "ter",
        "nus",
        "cury",
        "bos",
        "pra",
        "thea",
        "nope",
        "dope",
        "tis",
        "clite",
        "cry",
      ],
      6: [
        "una",
        "und",
        "eei",
        "oco",
        "ocho",
        "uni",
        "unx",
        "illy",
        "isn",
        "ijs",
        "iln",
        "ion",
        "iea",
        "iri",
        "illes",
        "ides",
        "agua",
        "olla",
        "inda",
        "eshan",
        "oria",
        "oda",
        "opi",
        "oky",
        "ogs",
        "owa",
        "ilia",
        "erth",
        "arth",
        "orth",
        "oth",
        "illon",
        "ichi",
        "ov",
        "arvis",
        "ara",
        "ars",
        "yrs",
        "ype",
        "yii",
        "yiz",
        "yik",
        "yis",
        "yke",
        "yria",
        "onoe",
        "ippe",
        "osie",
        "one",
        "ore",
        "ade",
        "adus",
        "urn",
        "ypso",
        "ora",
        "iuq",
        "orix",
        "apus",
        "ion",
        "eon",
        "eron",
        "ao",
        "omia",
      ],
    },
    mtx = [
      [1, 1, 2, 2, 4, 4, 5, 5],
      [2, 2, 4, 4, 3, 3, 6, 6],
      [3, 3, 4, 4, 2, 2, 5, 5],
      [4, 4, 3, 3, 1, 1, 6, 6],
      [3, 3, 4, 4, 2, 2, 5, 5],
      [2, 2, 1, 1, 3, 3, 6, 6],
      [3, 3, 4, 4, 2, 2, 5, 5],
      [4, 4, 3, 3, 1, 1, 6, 6],
      [3, 3, 4, 4, 1, 1, 4, 4, 5, 5],
      [4, 4, 1, 1, 4, 4, 3, 3, 6, 6],
    ],
    fn = function (i) {
      return Math.floor(Math.random() * vowels[i].length);
    },
    ret = [],
    name,
    comp,
    i,
    il,
    c = 0;

  for (; c < count; c++) {
    name = "";
    comp = mtx[c % mtx.length];
    for (i = 0, il = comp.length / 2; i < il; i++) {
      name += vowels[comp[i * 2]][fn(comp[i * 2 + 1])];
    }
    ret.push(name);
    planetNames.push(name);
    array1 = ret.filter(function (val) {
      planetNames.indexOf(val) == -1;
    });
  }
  planetName = ret.toString();

  return capitalizeFirstLetter(planetName);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const generateRandomDiameter = () => {
  var randomDiameter = (Math.random() * 20000 + 2500).toFixed(2);
  var diameter = randomDiameter + " km";
  return diameter;
};

const generateRandomGravity = () => {
  var randomGravity = Math.floor(Math.random() * (1500 - 0.01) + 100) / 100;
  var gravity = randomGravity + " m/s²";
  return gravity;
};

const generateRandomOrbitPeriod = () => {
  var randomOrbitPeriod = (Math.random() * 450 + 350).toFixed(2);
  var Orbit = randomOrbitPeriod + " days";
  return Orbit;
};
const generateRandomMetadata = (id) => {
  return {
    attributes: [
      { trait_type: "Diameter", value: generateRandomDiameter() },
      { trait_type: "Gravity", value: generateRandomGravity() },
      { trait_type: "Orbit Period", value: generateRandomOrbitPeriod() },
    ],
    description: "A unique planet with on-chain resource nodes",
    image: `${gatewayCustomDomain}/ipfs/${folderCIDForImages}/${id}` + gif,
    name: namegen(1),
  };
};
(async () => {
  for (let i = 1; i < TOTAL + 1; i++) {
    const metadata = generateRandomMetadata(i);
    fs.writeFileSync(`./metadata/${i}`, JSON.stringify(metadata));
  }
})();
