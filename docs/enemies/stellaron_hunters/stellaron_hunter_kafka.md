---
sidebar_position: 1
description: One of the Stellaron Hunters. A beautiful assassin wearing an enigmatic smile, she excels in manipulation and various weaponry. It was by her design that the Astral Express was led here, all of which was simply part of a certain plan...
---

import enemy from '@site/src/data/enemies/Stellaron_Hunter_Kafka.json'

# Stellaron Hunter: Kafka
<blockquote>{frontMatter.description}</blockquote>

import EnemyMisc from '@site/src/components/enemy/EnemyMisc'
import EnemySkills from '@site/src/components/enemy/EnemySkills'

## Variants

<Tabs queryString="variant">
<TabItem value='1' label='Stellaron Hunter: Kafka'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={0} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={0} />
</TabItem>
<TabItem value='2' label='Stellaron Hunter: Kafka (Complete)'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={1} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={1} />
</TabItem>
</Tabs>
