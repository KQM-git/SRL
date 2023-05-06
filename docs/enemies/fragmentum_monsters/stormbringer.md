---
sidebar_position: 17
description: |-
  Monsters that have experienced corrosion as the Fragmentum expanded. They now have a more nimble way of fighting after the source of their power mutated.
  Stormbringers utilize the power of the wind to aid them in battle, enabling them to fire arrows more rapidly.
---

import enemy from '@site/src/data/enemies/Stormbringer.json'

# Stormbringer
<blockquote>{frontMatter.description}</blockquote>

import EnemyMisc from '@site/src/components/enemy/EnemyMisc'
import EnemySkills from '@site/src/components/enemy/EnemySkills'

## Variants

<Tabs>
<TabItem value='0' label='Stormbringer'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={0} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={0} />
</TabItem>
<TabItem value='1' label='Stormbringer (Bug)'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={1} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={1} />
</TabItem>
</Tabs>
