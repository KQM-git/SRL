---
sidebar_position: 11
description: |-
  A strange being that does not belong to this world. Nurtured in the Fragmentum brought by the Stellaron, it feeds upon this world's root structures to obtain energy. Its armor reflects the gloomy and profound starry sky.
  In combat, the Ice Out of Space will freeze targets it touches.
---

import enemy from '@site/src/data/enemies/Ice_Out_of_Space.json'

# Ice Out of Space
<blockquote>{frontMatter.description}</blockquote>

import EnemyMisc from '@site/src/components/enemy/EnemyMisc'
import EnemySkills from '@site/src/components/enemy/EnemySkills'

## Variants

<Tabs queryString="variant">
<TabItem value='1' label='Ice Out of Space'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={0} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={0} />
</TabItem>
<TabItem value='2' label='Ice Out of Space (Bug)'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={1} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={1} />
</TabItem>
</Tabs>
