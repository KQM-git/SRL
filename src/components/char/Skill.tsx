import React, { useState } from 'react'

import Admonition from '@theme/Admonition'

import { Character } from '@site/src/data/types'
import { getTalents } from '@site/src/utils/skill'
import ParamFormat from '../common/ParamFormat'
import { NumberInput } from '../common/input/NumberInput'

export default function Skill({ char, skill, index }: {
  char: Character
  skill: string
  index?: number
}) {
  let talents = getTalents(char, skill)

  if (index != undefined)
    talents = [talents[index]]
  talents = talents.filter(x => x)


  const [levels, setLevels] = useState(talents.map(t => t.params.length))
  if (talents.length == 0)
    return <Admonition type="danger">
      Missing talent data for these filters
    </Admonition>

  // <img src={`/img/characters/icons/${t.img}.png`} className='char-skill-icon' width={48} height={48} alt={`${t.name} Icon`} loading="lazy" />
  return talents.map((t, i) =>
    <div key={i}>
      <div className='char-skill-name'>

        <div className='char-skill-text'>{t.name}</div>
      </div>
      <div>
        Lv. <NumberInput
              set={l => {
                const newLevels = [...levels]
                newLevels[i] = l
                setLevels(newLevels)
              }}
              value={levels[i]}
              min={1}
              max={t.params.length}
              style={({ maxWidth: 64 })}
            /> {t.tag && <span className='char-skill-tag'>[{t.tag}]</span>}
      </div>
      <ParamFormat desc={t.desc} params={t.params[levels[i] - 1]} />
    </div>
  )
}