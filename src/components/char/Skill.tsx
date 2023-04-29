import React from 'react'
import ReactMarkdown from 'react-markdown'

import MDXContent from '@theme/MDXContent'
import Admonition from '@theme/Admonition'

import { Character } from '@site/src/data/types'
import { getTalents } from '@site/src/utils/skill'
import { cleanup } from '@site/src/utils/cleanup'

export default function Skill({ char, skill, index }: {
  char: Character
  skill: string
  index?: number
}) {
  let talents = getTalents(char, skill)

  if (index != undefined)
    talents = [talents[index]]
  talents = talents.filter(x => x)


  if (talents.length == 0)
    return <Admonition type="danger">
      Missing talent data for these filters
    </Admonition>

  // <img src={`/img/characters/icons/${t.img}.png`} className='char-skill-icon' width={48} height={48} alt={`${t.name} Icon`} loading="lazy" />
  return talents.map(t =>
    <div>
      <div className='char-skill-name'>

        <div className='char-skill-text'>{t.name}</div>
      </div>
      <MDXContent>
        <ReactMarkdown>{cleanup(t.desc)}</ReactMarkdown>
      </MDXContent>
    </div>
  )
}