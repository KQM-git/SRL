import React from 'react'

import MDXContent from '@theme/MDXContent'

import { Character } from '@site/src/data/types'
import ParamFormat from '../common/ParamFormat'

export default function Eidolon({ char, eidolon }: {
  char: Character
  eidolon: number
}) {
  const entry = char.eidolons[eidolon - 1]
  
  // <img src={`/img/characters/icons/${t.img}.png`} className='char-skill-icon' width={48} height={48} alt={`${t.name} Icon`} loading="lazy" />
  return <MDXContent>
    <div className='char-skill-name'>
      <div className='char-skill-text'>{entry.name}</div>
    </div>
    <ParamFormat desc={entry.desc} params={entry.params} />
  </MDXContent>

}
