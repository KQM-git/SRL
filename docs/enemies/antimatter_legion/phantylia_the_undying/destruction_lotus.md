---
sidebar_position: 8012210
description: A phantom flower that blooms without root and forms out of thin air. Phantylia used the Ambrosial Arbor as her host to forge a physical body, yet never let go of Destruction's authority.
---

import enemy from '@site/src/data/enemies/Destruction_Lotus.json'

# Destruction Lotus
<blockquote>{frontMatter.description}</blockquote>

import EnemyMisc from '@site/src/components/enemy/EnemyMisc'
import EnemySkills from '@site/src/components/enemy/EnemySkills'

## Variants

<Tabs queryString="variant">
<TabItem value='1' label='Destruction Flower (Phase 2)'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={0} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={0} />
</TabItem>
<TabItem value='2' label='Destruction Flower (Phase 3)'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={1} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={1} />
</TabItem>
</Tabs>
