import React from 'react'

import Admonition from '@theme/Admonition'

import relics from '@site/src/data/relics.json'
import { Relic } from '@site/src/data/types'
import filename from '@site/src/utils/filename'

export default function RelicSetBonus({ relic }: { relic: string }) {
  const rel = relics[relic] as Relic

  if (!rel)
    return <Admonition type="danger">
      Missing relic data for {relic}
    </Admonition>

  return <div>
    <img className="icon-display-box" src={`/img/relics/icon/${filename(relic)}.png`} width={256} height={256} />
    <ul>
      {rel.bonuses.map((b) => <li key={b.count}>
        {b.count}-Piece Set Bonus: {b.desc}
      </li>)}
    </ul>
    <div className="clear" />
  </div>
}