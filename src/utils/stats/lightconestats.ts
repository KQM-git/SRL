import { Lightcone } from "../../data/types"
import { handleResult, handleStat, Stat } from "./common"

export function getLightconeStatsAt(lightcone: Lightcone, level: number, ascension: number): Record<string, Stat> {
  const asc = lightcone.stats.find(a => a.level == ascension)

  const stats: Record<string, Stat> = {
    "Base HP": handleStat(asc.hpBase, asc.hpAdd, level),
    "Base ATK": handleStat(asc.attackBase, asc.attackAdd, level),
    "Base DEF": handleStat(asc.defenseBase, asc.defenseAdd, level),
  }

  handleResult(stats)

  return stats
}