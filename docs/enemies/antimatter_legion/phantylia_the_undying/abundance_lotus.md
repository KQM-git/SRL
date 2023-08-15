---
sidebar_position: 8012200
description: A phantom flower that blooms without roots and forms out of thin air. Phantylia used the Ambrosial Arbor as her host to forge a physical body and to touch upon Abundance's authority.
---

import enemy from '@site/src/data/enemies/Abundance_Lotus.json'

# Abundance Lotus
<blockquote>{frontMatter.description}</blockquote>

import EnemyMisc from '@site/src/components/enemy/EnemyMisc'
import EnemySkills from '@site/src/components/enemy/EnemySkills'

## Variants

<Tabs queryString="variant">
<TabItem value='1' label='Abundance Flower (Phase 1)'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={0} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={0} />
</TabItem>
<TabItem value='2' label='Abundance Flower (Phase 3)'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={1} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={1} />
</TabItem>
</Tabs>
