---
sidebar_position: 7
description: |-
  An automaton pieced together with Old World technology, tasked with replacing humans in performing the most basic forms of physical labor.
  In combat, Automaton Spiders are highly unstable, capable of exploding when damaged.
---

import enemy from '@site/src/data/enemies/Automaton_Spider.json'

# Automaton Spider
<blockquote>{frontMatter.description}</blockquote>

import EnemyMisc from '@site/src/components/enemy/EnemyMisc'
import EnemySkills from '@site/src/components/enemy/EnemySkills'

## Variants

<Tabs queryString="variant">
<TabItem value='1' label='Automaton Spider'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={0} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={0} />
</TabItem>
<TabItem value='2' label='Automaton Grizzly (Complete) Summon'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={1} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={1} />
</TabItem>
</Tabs>
