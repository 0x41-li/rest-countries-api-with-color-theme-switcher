// conversion
export const toBool = (string) => (string === "true" ? true : false);

// convert a long number to a string, and make it easier to read by adding commas between each 3 number
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
