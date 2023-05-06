---
sidebar_position: 1012041
description: |-
  A mechanical device controlled by Svarog.
  When active on battlefield for certain turns, it will ruthlessly attack its enemies.
---

import enemy from '@site/src/data/enemies/Auxiliary_Robot_Arm_Unit.json'

# Auxiliary Robot Arm Unit
<blockquote>{frontMatter.description}</blockquote>

import EnemyMisc from '@site/src/components/enemy/EnemyMisc'
import EnemySkills from '@site/src/components/enemy/EnemySkills'

## Variants

<Tabs>
<TabItem value='0' label='Story Svarog'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={0} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={0} />
</TabItem>
<TabItem value='1' label='Simulated Universe W4 Svarog'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={1} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={1} />
</TabItem>
</Tabs>
