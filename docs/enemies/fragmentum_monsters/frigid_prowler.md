---
sidebar_position: 15
description: |-
  A machine unit prowling in the Fragmentum. Undoubtedly, this monstrosity is not a human creation, but one that was born out of the perversion of the Fragmentum.
  Frigid Prowlers will attract Everwinter Shadewalkers and reduce its enemy's SPD and Ice RES.
---

import enemy from '@site/src/data/enemies/Frigid_Prowler.json'

# Frigid Prowler
<blockquote>{frontMatter.description}</blockquote>

import EnemyMisc from '@site/src/components/enemy/EnemyMisc'
import EnemySkills from '@site/src/components/enemy/EnemySkills'

## Variants

<Tabs queryString="variant">
<TabItem value='1' label='Frigid Prowler'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={0} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={0} />
</TabItem>
<TabItem value='2' label='Frigid Prowler (Bug)'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={1} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={1} />
</TabItem>
</Tabs>
