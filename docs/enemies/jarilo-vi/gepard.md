---
sidebar_position: 13
description: |-
  Captain of the Silvermane Guards.
  Gepard can command his soldiers to focus their attacks, and provide each of them with a barrier that blocks one attack.
---

import enemy from '@site/src/data/enemies/Gepard.json'

# Gepard (Enemy)
<blockquote>{frontMatter.description}</blockquote>

import EnemyMisc from '@site/src/components/enemy/EnemyMisc'
import EnemySkills from '@site/src/components/enemy/EnemySkills'

## Variants

<Tabs>
<TabItem value='0' label='Gepard'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={0} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={0} />
</TabItem>
<TabItem value='1' label='Gepard (Complete)'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={1} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={1} />
</TabItem>
</Tabs>
