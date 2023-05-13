import { EnemyVariant } from "../../data/types"
import { Stat, handleScalar, handleResult, handleConst, handleAddition } from "./common"

import curves from "../../data/enemy_curves.json"

export function getEnemyStatsAt(enemy: EnemyVariant, level: number, _ascension: number): Record<string, Stat> {

  const stats: Record<string, Stat> = {
    "HP": handleScalar(enemy.hp, curves.hp[level - 1]),
    "ATK": handleScalar(enemy.attack, curves.attack[level - 1]),
    "DEF": handleScalar(enemy.def, curves.defense[level - 1]),
    "SPD": handleScalar(enemy.speed, curves.speed[level - 1]),
    "Effect Hit Rate": handleConst(curves.effHitRate[level - 1]),
    "Effect RES": handleAddition(enemy.effectResBase, curves.effRes[level - 1]),
  }

  handleResult(stats)

  return stats
}