export interface Stat {
  value: number
  explain: string
}

export function handleResult(stats: Record<string, Stat>): Record<string, Stat> {
  Object.values(stats).forEach(stat => stat.explain = `${stat.explain} = ${value(stat.value)}`)
  return stats
}

export function handleLevelScalar(base: number, add: number, level: number): Stat {
  return {
    value: base + add * (level - 1),
    explain: `${base}${level != 1 ? ` + ${add} * (${level} - 1)` : ""}`
  }
}
export function handleScalar(base: number, scale: number): Stat {
  return {
    value: base * scale,
    explain: `${base}${scale != 1 ? ` * ${scale}` : ""}`
  }
}
export function handleAddition(base: number, addition: number): Stat {
  return {
    value: base + addition,
    explain: `${base}${addition != 0 ? ` + ${addition}` : ""}`
  }
}
export function handleConst(base: number): Stat {
  return {
    value: base,
    explain: base.toString()
  }
}


export function value(float: number | undefined): number {
  if (float == undefined) {
    console.warn(`Undefined value!`)
    return 0
  }
  if (!isFinite(float)) return float
  if (float < 0) return -value(-float)
  if (float === 0) return 0

  let [lower, upper] = roundingRange(float)
  const int = Math.floor(upper)
  const digits = [int.toString()]
  upper -= int
  lower -= int
  if (Math.floor(upper) === Math.floor(lower)) {
    digits.push(".")
    do {
      upper *= 10
      lower *= 10

      const uDigit = Math.floor(upper)
      const lDigit = Math.floor(lower)
      digits.push(uDigit.toString())

      upper -= uDigit
      lower -= lDigit

      if (uDigit !== lDigit) {
        if (upper === 0)
          console.warn(`Extrapolation error: extrapolated ${float} results in a midpoint}`)
        if (uDigit - lDigit !== 1) {
          if (false)
            console.warn(`Extrapolation error: ambiguous value of ${float} (use ${digits.join("")}), the least significant digit could be ${lDigit + 1}`)
          // In case of ambiguity, we simply return the original value.
          // It still needs to be a float to reach this point, but it's
          // most likely not one that is hand-tuned, which is assumed
          // to have only a few significant digits. So the extrapolated
          // number would provides no benefits here.
          return float
        }
        break
      }
    } while (true)
  }

  const string = digits.join("")
  return parseFloat(string)
}

// Return the range of numbers that are rounded to `float` under IEEE754
function roundingRange(float: number) {
  const exponent = Math.floor(Math.log2(float)), multiplier = Math.pow(2, exponent)
  const normalized = float / multiplier
  if (normalized < 1 || normalized >= 2)
    throw new Error(`Unable to normalize ${float}`)
  const ulpOfOne = 1.1920928955078125e-07 // 2^-23, written as double
  const normalizedNext = normalized + ulpOfOne
  const normalizedPrev = normalized - (normalized === 1 ? ulpOfOne / 2 : ulpOfOne)
  const midNext = (normalized + normalizedNext) / 2
  const midPrev = (normalized + normalizedPrev) / 2
  return [midPrev * multiplier, midNext * multiplier]
}

export function fixed(val: number, dec: number): string {
  // In game numbers are rounded down
  const floored = Math.floor(val * (10 ** dec)) / (10 ** dec)
  return floored.toFixed(dec)
}
