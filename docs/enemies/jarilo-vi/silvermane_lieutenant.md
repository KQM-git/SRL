---
sidebar_position: 4
description: |-
  The leader of a squad of Belobog's Silvermane Guards.
  Silvermane Lieutenants can raise a giant shield during combat and Enhance themselves. Attacking a Silvermane Lieutenant with their shield raised will immediately result in a fierce Counter.
---

import enemy from '@site/src/data/enemies/Silvermane_Lieutenant.json'

# Silvermane Lieutenant
<blockquote>{frontMatter.description}</blockquote>

import EnemyMisc from '@site/src/components/enemy/EnemyMisc'
import EnemySkills from '@site/src/components/enemy/EnemySkills'

## Variants

<Tabs>
<TabItem value='0' label='Silvermane Lieutenant'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={0} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={0} />
</TabItem>
<TabItem value='1' label='Silvermane Lieutenant (Complete)'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={1} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={1} />
</TabItem>
</Tabs>
