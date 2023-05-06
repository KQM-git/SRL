---
sidebar_position: 7
description: An interdimensional creature lost in the stars. Docile in nature. Sweet in taste. Inedible. Spends most of its life feeding and fleeing. Travelers who encounter these creatures see them as good omens.
---

import enemy from '@site/src/data/enemies/Sequence_Trotter.json'

# Sequence Trotter
<blockquote>{frontMatter.description}</blockquote>

import EnemyMisc from '@site/src/components/enemy/EnemyMisc'
import EnemySkills from '@site/src/components/enemy/EnemySkills'

## Variants

<Tabs>
<TabItem value='0' label='Trot Prime'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={0} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={0} />
</TabItem>
<TabItem value='1' label='Trot Deuce'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={1} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={1} />
</TabItem>
<TabItem value='2' label='Trot Tri'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={2} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={2} />
</TabItem>
</Tabs>
