---
sidebar_position: 3
description: |-
  A cultivator who longs to revive the ancient mysteries of Abundance, and to guide the Xianzhou natives back on the liberating path of immortality.
  Now, their wish has been fulfilled. Gifted by the power of the ancient miracle and using it as both weapon and armor, they managed to touch on the secret of immortality.
---

import enemy from '@site/src/data/enemies/Disciples_of_Sanctus_Medicus_Shape_Shifter.json'

# Disciples of Sanctus Medicus: Shape Shifter
<blockquote>{frontMatter.description}</blockquote>

import EnemyMisc from '@site/src/components/enemy/EnemyMisc'
import EnemySkills from '@site/src/components/enemy/EnemySkills'

## Variants

<Tabs queryString="variant">
<TabItem value='1' label='Disciples of Sanctus Medicus: Shape Shifter'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={0} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={0} />
</TabItem>
<TabItem value='2' label='Disciples of Sanctus Medicus: Shape Shifter (Error)'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={1} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={1} />
</TabItem>
</Tabs>
