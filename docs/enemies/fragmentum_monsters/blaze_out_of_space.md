---
sidebar_position: 12
description: |-
  A strange being that does not belong to this world. Nurtured in the Fragmentum created by the Stellaron, it parasitize upon this world's root structures to obtain energy. Its armor burns with the blazing flames in the core of stars.
  In combat, the Blaze Out of Space will incinerate anything it touches.
---

import enemy from '@site/src/data/enemies/Blaze_Out_of_Space.json'

# Blaze Out of Space
<blockquote>{frontMatter.description}</blockquote>

import EnemyMisc from '@site/src/components/enemy/EnemyMisc'
import EnemySkills from '@site/src/components/enemy/EnemySkills'

## Variants

<Tabs queryString="variant">
<TabItem value='1' label='Blaze Out of Space'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={0} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={0} />
</TabItem>
<TabItem value='2' label='Blaze Out of Space (Bug)'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={1} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={1} />
</TabItem>
</Tabs>
