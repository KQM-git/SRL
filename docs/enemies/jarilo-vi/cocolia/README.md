---
sidebar_position: 14
description: |-
  The Guardian of Belobog, and the indisputable ruler of the Towering Citadel, Belobog.
  Cocolia possesses the divine authority passed down through the generations of Guardians, giving her command over ice and snow to freeze her enemies in battle.
---

import enemy from '@site/src/data/enemies/Cocolia.json'

# Cocolia
<blockquote>{frontMatter.description}</blockquote>

import EnemyMisc from '@site/src/components/enemy/EnemyMisc'
import EnemySkills from '@site/src/components/enemy/EnemySkills'

## Variants

<Tabs>
<TabItem value='0' label='Cocolia (Story)'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={0} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={0} />
</TabItem>
<TabItem value='1' label='Cocolia (Complete)'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={1} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={1} />
</TabItem>
</Tabs>

## Children

import DocCardList from '@theme/DocCardList';

<DocCardList />
