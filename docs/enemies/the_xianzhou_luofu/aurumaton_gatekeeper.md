---
sidebar_position: 8
description: |-
  Garrison aurumaton created with ancient ingenium technology.
  Countless years ago, the aurumatons set sail with the Xianzhou to seek divine recipes of immortality, and were tasked to oversee humanity and to aid humankind during warfare. However, after countless rebellions, they were finally overpowered by the Xianzhou natives.
  Now, all aurumatons are strictly controlled with talismans, and are employed to guard important places.
---

import enemy from '@site/src/data/enemies/Aurumaton_Gatekeeper.json'

# Aurumaton Gatekeeper
<blockquote>{frontMatter.description}</blockquote>

import EnemyMisc from '@site/src/components/enemy/EnemyMisc'
import EnemySkills from '@site/src/components/enemy/EnemySkills'

## Variants

<Tabs queryString="variant">
<TabItem value='1' label='Aurumaton Gatekeeper'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={0} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={0} />
</TabItem>
<TabItem value='2' label='Aurumaton Gatekeeper (Bug)'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={1} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={1} />
</TabItem>
</Tabs>
