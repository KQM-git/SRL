---
sidebar_position: 6
description: |-
  A product of the Antimatter Legion utilizing the Warforge to recast and fuse remnants of fallen warriors and Leviathans.
  Though relatively rare, they possess both the intelligence of a warrior and the power and mobility of a Leviathan. Its screech can summon a large number of Voidrangers.
---

import enemy from '@site/src/data/enemies/Voidranger_Trampler.json'

# Voidranger: Trampler
<blockquote>{frontMatter.description}</blockquote>

import EnemyMisc from '@site/src/components/enemy/EnemyMisc'
import EnemySkills from '@site/src/components/enemy/EnemySkills'

## Variants

<Tabs queryString="variant">
<TabItem value='1' label='Voidranger: Trampler'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={0} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={0} />
</TabItem>
<TabItem value='2' label='Voidranger: Trampler (Bug)'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={1} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={1} />
</TabItem>
</Tabs>
