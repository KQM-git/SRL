import React from 'react'

import Heading from '@theme/Heading'

import { Enemy } from '@site/src/data/types'
import { stat } from '@site/src/utils/stats/stat'
import EnemyStatsTable from './EnemyStatsTable'


const elements = ["Physical", "Fire", "Ice", "Lightning", "Wind", "Quantum", "Imaginary"]
const debuffResist = ["Burn", "Frozen", "Shock", "Wind Sheer", "Entanglement", "Imprisonment", "Control Effects"]
export default function EnemyMisc({ enemy, variant }: { enemy: Enemy, variant: number }) {
  const en = enemy.variants[variant]

  return <div>
    <p>
      Toughness: {en.toughness}{en.toughness > 0 &&<><br />
      Weaknesses: {en.weaknesses.join(", ")}</>}
    </p>

    <Heading as='h3'>Damage RES</Heading>
    <table>
      <thead>
        <tr>
          {elements.map(e => <th key={e}>{e}</th>)}
        </tr>
      </thead>
      <tbody>
        <tr>
          {elements.map(e => <td key={e}>{stat("%0", en.dmgRES[e] ?? 0)}</td>)}
        </tr>
      </tbody>
    </table>

    <Heading as='h3'>Debuff RES</Heading>
    <table>
      <thead>
        <tr>
          {debuffResist.map(e => <th key={e}>{e}</th>)}
        </tr>
      </thead>
      <tbody>
        <tr>
          {debuffResist.map(e => <td key={e}>{stat("%0", en.debuffRES[e] ?? 0)}</td>)}
        </tr>
      </tbody>
    </table>

    <Heading as='h3'>Stats Table</Heading>
    <EnemyStatsTable enemy={enemy} variant={variant} />
  </div>
}
