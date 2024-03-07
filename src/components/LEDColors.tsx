import React from "react";

// Convert a number to hex
const intToHex = (d) => {
  return ("0" + Number(d).toString(16)).slice(-2).toLowerCase();
};

// Takes an array of 8-bit RGB values and returns the hex value
const rgbArrayToHex = (values) => {
  let [r, g, b] = values;

  if (!(r >= 0 && r <= 255)) r = 0;
  if (!(g >= 0 && g <= 255)) g = 0;
  if (!(b >= 0 && b <= 255)) r = 0;

  return `#${intToHex(r)}${intToHex(g)}${intToHex(b)}`;
};

const Black = rgbArrayToHex([0, 0, 0]);
const White = rgbArrayToHex([255, 255, 255]);
const Red = rgbArrayToHex([255, 0, 0]);
const Orange = rgbArrayToHex([255, 128, 0]);
const Yellow = rgbArrayToHex([255, 255, 0]);
const LimeGreen = rgbArrayToHex([128, 255, 0]);
const Green = rgbArrayToHex([0, 255, 0]);
const Seafoam = rgbArrayToHex([0, 255, 128]);
const Aqua = rgbArrayToHex([0, 255, 255]);
const SkyBlue = rgbArrayToHex([0, 128, 255]);
const Blue = rgbArrayToHex([0, 0, 255]);
const Purple = rgbArrayToHex([128, 0, 255]);
const Pink = rgbArrayToHex([255, 0, 255]);
const Magenta = rgbArrayToHex([255, 0, 128]);

const LEDColors = [
  { name: "Black", value: Black },
  { name: "White", value: White },
  { name: "Red", value: Red },
  { name: "Orange", value: Orange },
  { name: "Yellow", value: Yellow },
  { name: "LimeGreen", value: LimeGreen },
  { name: "Green", value: Green },
  { name: "Seafoam", value: Seafoam },
  { name: "Aqua", value: Aqua },
  { name: "SkyBlue", value: SkyBlue },
  { name: "Blue", value: Blue },
  { name: "Purple", value: Purple },
  { name: "Pink", value: Pink },
  { name: "Magenta", value: Magenta },
];

export function ColorBlock({ color }) {
  let cleanColor = color.trim().split(" ").join("");
  try {
    let colorValue = LEDColors.find(
      (ledColor) => ledColor.name.toLowerCase() === cleanColor.toLowerCase()
    ).value;

    return (
      <a
        style={{
          color: colorValue,
        }}
      >
        ■
      </a>
    );
  } catch (error) {
    return (
      <a
        style={{
          color: cleanColor,
        }}
      >
        ■
      </a>
    );
  }
}
