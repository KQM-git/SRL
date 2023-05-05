import React from 'react'

import { Enemy } from '@site/src/data/types'

export default function EnemyMisc({ enemy, variant }: { enemy: Enemy, variant: number }) {
  const en = enemy.variants[variant]

  return <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Desc</th>
      </tr>
    </thead>
    <tbody>
      {en.skills.map((skill, index) => <tr key={index}>
        <td>{skill.type}</td>
        <td>{skill.name}</td>
        <td>{skill.desc}</td>
      </tr>)}
    </tbody>
  </table>
}
