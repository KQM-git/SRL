---
sidebar_position: 16
description: |-
  A machine unit prowling in the Fragmentum. Undoubtedly, this monstrosity is not a human creation, but one imitated by the Fragmentum's twisted power.
  Searing Prowler's attacks will deal extra damage against enemies afflicted with Burn.
---

import enemy from '@site/src/data/enemies/Searing_Prowler.json'

# Searing Prowler
<blockquote>{frontMatter.description}</blockquote>

import EnemyMisc from '@site/src/components/enemy/EnemyMisc'
import EnemySkills from '@site/src/components/enemy/EnemySkills'

## Variants

<Tabs queryString="variant">
<TabItem value='1' label='Searing Prowler'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={0} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={0} />
</TabItem>
<TabItem value='2' label='Searing Prowler (Bug)'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={1} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={1} />
</TabItem>
</Tabs>
