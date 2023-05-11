---
sidebar_position: 1002011
description: A giant lance of ice created by the guardian. It can unleash a piercing frost wind that sweeps across the field.
---

import enemy from '@site/src/data/enemies/Ice_Edge.json'

# Ice Edge
<blockquote>{frontMatter.description}</blockquote>

import EnemyMisc from '@site/src/components/enemy/EnemyMisc'
import EnemySkills from '@site/src/components/enemy/EnemySkills'

## Variants

<Tabs>
<TabItem value='0' label='Cocolia (Story) Summon #1'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={0} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={0} />
</TabItem>
<TabItem value='1' label='Cocolia (Story) Summon #2'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={1} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={1} />
</TabItem>
<TabItem value='2' label='Cocolia (Complete) Summon #1'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={2} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={2} />
</TabItem>
<TabItem value='3' label='Cocolia (Complete) Summon #2'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={3} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={3} />
</TabItem>
</Tabs>
