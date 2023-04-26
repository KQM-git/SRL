import React from 'react'
import ReactMarkdown from 'react-markdown'

import Admonition from '@theme/Admonition'

import { Lightcone } from '@site/src/data/types'
import { stat } from '@site/src/utils/stats/stat'
import { getLightconeStatsAt } from '@site/src/utils/stats/lightconestats'
import filename from '@site/src/utils/filename'

export default function LightconeStats({ lightcone, lightcones }: { lightcone: string, lightcones: Record<string, Lightcone> }) {
  const lc = lightcones[lightcone]

  if (!lc)
    return <Admonition type="danger">
      Missing lightcone data for {lightcone}
    </Admonition>

  const maxAscension = lc.stats[lc.stats.length - 1]
  const min = getLightconeStatsAt(lc, 1, 0)
  const max = getLightconeStatsAt(lc, maxAscension.maxLevel, maxAscension.level)

  return <div>
    <img className="icon-display-box" src={`/img/lightcones/icon/${filename(lightcone)}.png`} width={256} height={256} />
    <table>
      <thead>
        <tr>
          <th style={({ minWidth: "120px" })}>Attribute</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {lc.refinements && <tr>
          <td style={({ minWidth: "120px" })}>{lc.refinements.name}</td>
          <td><ReactMarkdown className="react-md">{lc.refinements.desc}</ReactMarkdown></td>
        </tr>}
        {Object.entries(max).map(([name, { explain, value }]) => <tr key={name}>
          <td style={({ minWidth: "120px" })}>{name}</td>
          <td><span title={min[name]?.explain ?? "?"}>{stat(name, min[name]?.value ?? 0)}</span> ~ <span title={explain}>{stat(name, value)}</span></td>
        </tr>)}
      </tbody>
    </table>
    <div className="clear" />
  </div>
}