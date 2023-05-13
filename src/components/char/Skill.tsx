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
  const [showTable, setShowTable] = useState(talents.map(() => false))
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
        <a href='#' onClick={e => {
          const nst = [...showTable]
          nst[i] = !nst[i]
          setShowTable(nst)
          e.preventDefault()
        }} style={{ float: "right" }}>{showTable[i] ? "Hide" : "Show"} full table</a>
      </div>
      <ParamFormat desc={t.desc} params={t.params[levels[i] - 1]} />
      {showTable[i] && <table style={{ marginTop: "10px" }}>
        <thead>
          <tr>
            <th align='center'>Level</th>
            {t.params.map((_v, i) => <th align='center'>{i + 1}</th>)}
          </tr>
        </thead>
        <tbody>
          {t.params[0].map((_v, j) => {
            const values = t.params.map(v => v[j])
            if (values.every(v => v == values[0]))
              return <tr>
                <td>Attribute #{j + 1}</td>
                <td colSpan={values.length} align='center'>{values[0]}</td>
              </tr>
            return <tr>
              <td>Attribute #{j + 1}</td>
              {values.map(v => <td align='center'>{v}</td>)}
            </tr>
          })}
        </tbody>
      </table>}
    </div>
  )
}