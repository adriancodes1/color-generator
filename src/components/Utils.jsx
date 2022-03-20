function HexConverter(color) {
  let hex = color.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return HexConverter(r) + HexConverter(g) + HexConverter(b);
}

export default rgbToHex;
