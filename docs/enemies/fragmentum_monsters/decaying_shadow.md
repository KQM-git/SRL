---
sidebar_position: 14
description: |-
  A shadow manifested by the power of a Stellaron, carrying out the Fragmentum's unceasing will to expand.
  A living being of energy born from the projection of the desires of sentient lifeforms into the Fragmentum, akin to a pearl created from a single grain of sand. However, the desire that drove it has long since been twisted and distorted.
---

import enemy from '@site/src/data/enemies/Decaying_Shadow.json'

# Decaying Shadow
<blockquote>{frontMatter.description}</blockquote>

import EnemyMisc from '@site/src/components/enemy/EnemyMisc'
import EnemySkills from '@site/src/components/enemy/EnemySkills'

## Variants

<Tabs>
<TabItem value='0' label='Decaying Shadow'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={0} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={0} />
</TabItem>
<TabItem value='1' label='Decaying Shadow (Bug)'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={1} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={1} />
</TabItem>
</Tabs>
