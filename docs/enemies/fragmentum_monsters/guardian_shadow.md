---
sidebar_position: 13
description: |-
  A shadow manifested by the power of a Stellaron, carrying out the Fragmentum's unceasing will to expand.
  A living being of energy born from the projection of the desires of sentient lifeforms into the Fragmentum, akin to a pearl created from a single grain of sand. This energy wanders around aimlessly, acting only when executing the will of its master.
---

import enemy from '@site/src/data/enemies/Guardian_Shadow.json'

# Guardian Shadow
<blockquote>{frontMatter.description}</blockquote>

import EnemyMisc from '@site/src/components/enemy/EnemyMisc'
import EnemySkills from '@site/src/components/enemy/EnemySkills'

## Variants

<Tabs queryString="variant">
<TabItem value='1' label='Guardian Shadow'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={0} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={0} />
</TabItem>
<TabItem value='2' label='Guardian Shadow (Bug)'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={1} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={1} />
</TabItem>
</Tabs>
