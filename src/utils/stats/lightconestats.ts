import { Lightcone } from "../../data/types"
import { handleResult, handleLevelScalar, Stat } from "./common"

export function getLightconeStatsAt(lightcone: Lightcone, level: number, ascension: number): Record<string, Stat> {
  const asc = lightcone.stats.find(a => a.level == ascension)

  const stats: Record<string, Stat> = {
    "Base HP": handleLevelScalar(asc.hpBase, asc.hpAdd, level),
    "Base ATK": handleLevelScalar(asc.attackBase, asc.attackAdd, level),
    "Base DEF": handleLevelScalar(asc.defenseBase, asc.defenseAdd, level),
  }

  handleResult(stats)

  return stats
}