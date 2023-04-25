import React from 'react'

import Admonition from '@theme/Admonition'

import { Lightcone } from '@site/src/data/types'
import { getLightconeStatsAt } from '@site/src/utils/stats/lightconestats'

import StatsTable from '../common/StatsTable'

export default function LightconeStatsTable({ lightcone, lightcones }: { lightcone: string, lightcones: Record<string, Lightcone> }) {
  const lc = lightcones[lightcone]

  if (!lc)
    return <Admonition type="danger">
      Missing lightcone data for {lightcone}
    </Admonition>

  const baseLevels: { a: number, lv: number }[] = []

  let prev = 1
  for (const asc of lc.stats) {
    baseLevels.push({ a: asc.level, lv: prev })
    baseLevels.push({ a: asc.level, lv: asc.maxLevel })
    prev = asc.maxLevel
  }

  return <StatsTable
    stats={lc.stats}
    getStatsAt={(lv, asc) => getLightconeStatsAt(lc, lv, asc)}
    baseLevels={baseLevels}
  />
}
