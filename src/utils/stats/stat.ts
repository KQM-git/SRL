export function stat(name: string, value: number, full = false): string {
    function fixed(val: number, dec: number): string {
      if (full) return val.toString()

      // In game numbers are rounded down
      const floored = Math.floor(val * (10 ** dec)) / (10 ** dec)
      return floored.toFixed(dec)
    }
  
    switch (name) {
      case "CRIT Rate":
      case "CRIT DMG":
        return fixed(value * 100, 1) + "%"
  
      case "Base HP":
      case "Base ATK":
      case "Base DEF":
      case "Base SPD":
        return fixed(value, 0)
  
      default:
        console.error(`Unknown stat '${name}', defaulting to formatting by value`)
        return value < 2 ? (fixed(value * 100, 1) + "%") : fixed(value, 0)
    }
  }