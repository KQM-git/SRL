---
sidebar_position: 14
description: |-
  The form that the Disciples of Sanctus Medicus crave. A true appearance that cast off the burdens of humanity and has been reforged using the way of immortality.
  In ancient times, those who sought immortality received wisdom from the Ambrosial Arbor and called themselves Celestials. They lived without restraints and molded the flesh of themselves and others at will. They have long forgotten their original appearances after countless metamorphoses.
---

import enemy from '@site/src/data/enemies/The_Ascended.json'

# The Ascended
<blockquote>{frontMatter.description}</blockquote>

import EnemyMisc from '@site/src/components/enemy/EnemyMisc'
import EnemySkills from '@site/src/components/enemy/EnemySkills'

## Variants

<Tabs queryString="variant">
<TabItem value='1' label='The Ascended'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={0} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={0} />
</TabItem>
<TabItem value='2' label='The Ascended (Bug)'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={1} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={1} />
</TabItem>
<TabItem value='3' label='Master of the Disciples of Sanctus Medicus'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={2} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={2} />
</TabItem>
</Tabs>
