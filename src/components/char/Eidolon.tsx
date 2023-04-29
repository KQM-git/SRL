import React from 'react'
import ReactMarkdown from 'react-markdown'

import MDXContent from '@theme/MDXContent'

import { Character } from '@site/src/data/types'
import { cleanup } from '@site/src/utils/cleanup'

export default function Eidolon({ char, eidolon }: {
  char: Character
  eidolon: number
}) {
  const entry = char.eidolons[eidolon - 1]
  console.log(char, char.eidolons, entry)
  
  // <img src={`/img/characters/icons/${t.img}.png`} className='char-skill-icon' width={48} height={48} alt={`${t.name} Icon`} loading="lazy" />
  return <MDXContent>
    <div className='char-skill-name'>
      <div className='char-skill-text'>{entry.name}</div>
    </div>
    <ReactMarkdown>{cleanup(entry.desc)}</ReactMarkdown>
  </MDXContent>

}
