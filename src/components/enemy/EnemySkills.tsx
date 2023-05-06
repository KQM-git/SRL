import React from 'react'

import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

import { Enemy, EnemySkill } from '@site/src/data/types'

export default function EnemySkills({ enemy, variant }: { enemy: Enemy, variant: number }) {
  const en = enemy.variants[variant]
  if (en.skills.some(x => x.phases)) {
    const phases = en.skills.flatMap(x => x.phases).filter((v, i, a) => a.indexOf(v) == i).sort()
    return <Tabs>
      {phases.map(p => <TabItem key={p} value={`Phase #${p}`}>
        <EnemySkillTable skills={en.skills.filter(s => s.phases.includes(p))} />
      </TabItem>)}
    </Tabs>
  }

  return <EnemySkillTable skills={en.skills} />
}

function EnemySkillTable({ skills }: { skills: EnemySkill[] }) {
  return <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Desc</th>
      </tr>
    </thead>
    <tbody>
      {skills.map((skill, index) => <tr key={index}>
        <td>{skill.threat ? <b>{skill.type}</b> : <>{skill.type}</>}</td>
        <td>{skill.threat ? <b>{skill.name}</b> : <>{skill.name}</>}</td>
        <td>{skill.desc}</td>
      </tr>)}
    </tbody>
  </table>
}