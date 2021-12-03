export const getName = (value: string): string => {
  if (value !== undefined) {
    var parts = value.split("/");
    var result = parts[parts.length - 1]; // Or parts.pop();
    var second = result.replace("-", " ");
    return second.replace('.png', '').toLocaleUpperCase();
  }
  return "";
};

export const getRarityName = (value: string): string => {
  if (value === undefined) return "";
  var parts = value.split("/");
  var result = parts[parts.length - 2]; // Or parts.pop();

  return result.replace('.png', '').toLowerCase();
};

export const getRarityPercent = (value: string, category: string): string => {
  let parts = value.split("/");
  let result = parts[parts.length - 1].replace('.png', '');
  // @ts-ignore
  return rarityTable[category.toLowerCase()][result]
}

const rarityTable = {
  "mouth": {
    "ape-force-1s": "1.02%",
    "corndog": "4.84%",
    "soda": "5.58%",
    "grilled-cheese": "6.25%",
    "banana": "6.64%",
    "bubblegum": "3.35%",
    "hotdog": "4.74%",
    "crayons": "0.31%",
    "no-traits": "20.37%",
    "dirty-fiat": "3.82%",
    "pv-ape-glue": "1.07%",
    "pizza": "6.33%",
    "pipe": "3.32%",
    "sushi": "2.24%",
    "drool": "5.27%",
    "sandwich": "7.59%",
    "burger": "4.75%",
    "ape-le-juice": "3.63%",
    "eggplant": "3.3%",
    "donut": "2.28%",
    "smooth-brain": "1.11%",
    "cigar": "1.11%",
    "6pc-tendies": "0.76%",
    "golden-tendie": "0.14%",
    "rainbow-vomit": "0.17%"
  },
  "teeth": {
    "wooden-tooth": "8.01%",
    "no-traits": "87.54%",
    "gold-tooth": "2.93%",
    "wooden-teeth": "1.22%",
    "gold-teeth": "0.16%",
    "diamond-teeth": "0.13%"
  },
  "fur/skin": {
    "brown-yellow": "7.56%",
    "red-peach": "7.85%",
    "blue-blue": "7.66%",
    "red-blue": "7.28%",
    "green-peach": "7.88%",
    "brown-peach": "7.49%",
    "leopard": "2.44%",
    "purple-peach": "7.51%",
    "black-peach": "5.68%",
    "blue-peach": "7.33%",
    "albino-blue": "4.14%",
    "green-green": "7.44%",
    "purple-purple": "7.27%",
    "black-gray": "6.26%",
    "ice": "1.51%",
    "albino-peach": "4.11%",
    "acid-trip": "0.13%",
    "zombie": "0.28%",
    "gold": "0.17%"
  },
  "background": {
    "yellow": "16.58%",
    "blue": "21.59%",
    "black": "12.8%",
    "red": "14.94%",
    "green": "14.98%",
    "purple": "14.39%",
    "teal": "4.71%"
  },
  "head": {
    "fishing-hat": "3.35%",
    "captain's-hat": "1.77%",
    "no-traits": "20.31%",
    "explorer's-hat": "2.02%",
    "sailor's-hat": "3.74%",
    "the-croc-hunter": "1.07%",
    "conical-hat": "3.21%",
    "the-artist": "0.24%",
    "football-helmet": "2.71%",
    "fireman's-helmet": "1.95%",
    "bucket-hat": "3.93%",
    "baseball-cap": "4.37%",
    "beanie": "3.62%",
    "umbrella-hat": "1.17%",
    "beer-hat": "0.75%",
    "sun-hat": "3.4%",
    "laurel-wreath": "1.46%",
    "floral-crown": "3.38%",
    "mobster-hat": "4.3%",
    "graduation-cap": "2.62%",
    "snapback-cap": "4.17%",
    "viking's-helmet": "2.65%",
    "degen-service-hat": "0.9%",
    "musketeer's-hat": "3.04%",
    "crown": "0.27%",
    "sergeant's-hat": "1.52%",
    "top-hat": "0.96%",
    "pilot's-hat": "1.68%",
    "straw-hat": "3.12%",
    "racoon-skin-hat": "2.77%",
    "policeman's-cap": "1.77%",
    "sultan's-turban": "1.09%",
    "knight's-helmet": "0.5%",
    "headband": "1.96%",
    "wizard's-hat": "1.44%",
    "pharaoh's-neme": "0.3%",
    "judge's-wig": "1.18%",
    "pope's-mitre": "0.6%",
    "space-helmet": "0.1%",
    "tiara": "0.31%",
    "harambe's-halo": "0.11%",
    "roman-helmet": "0.18%"
  },
  "clothing": {
    "japanese-uniform": "2.22%",
    "leather-jacket": "4.65%",
    "no-traits": "19.76%",
    "denim-vest": "3.73%",
    "black-t-shirt": "5.15%",
    "turtleneck-suit": "1.53%",
    "police-uniform": "1.88%",
    "suit": "1.62%",
    "striped-t-shirt": "5.24%",
    "overalls": "3.59%",
    "nb-ape-yellow": "0.96%",
    "tie-dye-t-shirt": "5.35%",
    "hoodie": "5.2%",
    "academy-uniform": "2.26%",
    "wetsuit": "3.73%",
    "hawaiin-shirt": "2.25%",
    "dress": "4.39%",
    "degen-service-polo": "0.9%",
    "turtleneck": "4.12%",
    "cheerleader": "4.46%",
    "ski-jacket": "1.35%",
    "maid's-uniform": "3.51%",
    "jungle-explorer": "1.95%",
    "bowling-shirt": "4.4%",
    "silk-robe": "0.72%",
    "pilot's-jacket": "1.96%",
    "fur-coat": "0.4%",
    "nb-ape-red": "1.14%",
    "nb-ape-green": "0.97%",
    "biggie-sweater": "0.26%",
    "space-suit": "0.22%",
    "prince-charming": "0.12%"
  },
  "eyewear": {
    "no-traits": "61.86%",
    "aviator-glasses": "7.29%",
    "ape-vipers": "5.17%",
    "heart-glasses": "0.85%",
    "shutter-shades": "5.97%",
    "wayfarer-glasses": "8.5%",
    "3d-glasses": "3.14%",
    "round-glasses": "7.02%",
    "vr-headset": "0.19%"
  }
}
