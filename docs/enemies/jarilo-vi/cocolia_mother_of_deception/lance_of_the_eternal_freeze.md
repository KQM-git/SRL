---
sidebar_position: 1002013
description: A giant lance of ice summon by Cocolia. It's surrounded by an icy cold current that can tear through flesh like a blade.
---

import enemy from '@site/src/data/enemies/Lance_of_the_Eternal_Freeze.json'

# Lance of the Eternal Freeze
<blockquote>{frontMatter.description}</blockquote>

import EnemyMisc from '@site/src/components/enemy/EnemyMisc'
import EnemySkills from '@site/src/components/enemy/EnemySkills'

## Variants

<Tabs queryString="variant">
<TabItem value='1' label='Lance (1)'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={0} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={0} />
</TabItem>
<TabItem value='2' label='Lance (2)'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={1} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={1} />
</TabItem>
</Tabs>
