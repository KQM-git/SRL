import { fixed as fixedOriginal } from "./common"
export function stat(name: string, value: number, full = false): string {
  function fixed(val: number, dec: number): string {
    if (full) return val.toString()

    // In game numbers are rounded down
    return fixedOriginal(val, dec)
  }
  function fixedNormal(val: number, dec: number): string {
    if (full) return val.toString()

    return val.toFixed(dec)
  }

  switch (name) {
    case "%0":
      return fixedNormal(value * 100, 0) + "%"
    case "0":
      return fixedNormal(value, 0)
    case "CRIT Rate":
    case "CRIT DMG":
    case "Effect Hit Rate":
    case "Effect RES":
      return fixed(value * 100, 1) + "%"

    case "Base HP":
    case "Base ATK":
    case "Base DEF":
    case "Base SPD":
      return fixed(value, 0)
    case "HP":
    case "ATK":
    case "DEF":
    case "SPD":
      return fixedNormal(value, 0)

    default:
      console.error(`Unknown stat '${name}', defaulting to formatting by value`)
      return value < 2 ? (fixed(value * 100, 1) + "%") : fixed(value, 0)
  }
}