import React from 'react'
import ReactMarkdown from 'react-markdown'

import MDXContent from '@theme/MDXContent'
import Admonition from '@theme/Admonition'

import { Character, CharacterTrace } from '@site/src/data/types'
import { getTraces } from '@site/src/utils/trace'
import { cleanup } from '@site/src/utils/cleanup'

export default function Trace({ char, trace }: {
  char: Character
  trace: string
}) {
  let traces = getTraces(char, trace)


  if (traces.length == 0)
    return <Admonition type="danger">
      Missing trace data for these filters
    </Admonition>

  return <TraceChild traces={traces} />
}

export function TraceChild({ traces }: { traces: CharacterTrace[] }) {
  // <img src={`/img/characters/icons/${t.img}.png`} className='char-skill-icon' width={48} height={48} alt={`${t.name} Icon`} loading="lazy" />
  return <>
    {traces.map(t =>
      <div className='char-trace' key={t.name}>
        <div className='char-skill-name'>

          <div className='char-skill-text'>{t.name}</div>
        </div>
        <MDXContent>
          <ReactMarkdown>{cleanup(t.desc)}</ReactMarkdown>
          {(t.minAsc || t.minLevel) && <i>Unlocks at {t.minAsc ? "A" + t.minAsc : ""}{t.minLevel ? "Lv. " + t.minLevel : ""}</i>}
        </MDXContent>
        {t.children && <TraceChild traces={t.children} />}
      </div>
    )}
  </>
}