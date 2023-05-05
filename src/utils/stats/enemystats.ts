import { EnemyVariant } from "../../data/types"
import { Stat, handleEnemyStat, handleResult } from "./common"

import curves from "../../data/enemy_curves.json"

export function getEnemyStatsAt(enemy: EnemyVariant, level: number, _ascension: number): Record<string, Stat> {

  const stats: Record<string, Stat> = {
    "HP": handleEnemyStat(enemy.hp, curves.hp[level - 1]),
    "ATK": handleEnemyStat(enemy.attack, curves.attack[level - 1]),
    "DEF": handleEnemyStat(enemy.def, curves.defense[level - 1]),
    "SPD": handleEnemyStat(enemy.speed, curves.speed[level - 1])
  }

  handleResult(stats)

  return stats
}