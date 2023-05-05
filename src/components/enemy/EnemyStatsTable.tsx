import React from 'react'

import { Enemy } from '@site/src/data/types'
import { getEnemyStatsAt } from '@site/src/utils/stats/enemystats'

import StatsTable from '../common/StatsTable'

export default function EnemyStatsTable({ enemy, variant }: { enemy: Enemy, variant: number }) {
  const baseLevels: { a: number, lv: number }[] = [{
    lv: 1,
    a: 0
  }]
  for (let lv = 10; lv <= 100; lv += 10)
    baseLevels.push({
      lv,
      a: 0
    })

  return <StatsTable
    stats={[{
      maxLevel: 100,
      level: 0
    }]}
    getStatsAt={(lv, asc) => getEnemyStatsAt(enemy.variants[variant], lv, asc)}
    baseLevels={baseLevels}
  />
}
