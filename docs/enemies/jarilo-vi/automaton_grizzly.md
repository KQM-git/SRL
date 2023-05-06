---
sidebar_position: 9
description: |-
  An automaton pieced together with Old World technology. It has been reinforced with durable armor, so it can charge forward and protect the Silvermane Guards.
  In combat, Automaton Grizzlys will summon Automaton Spiders and unleash a powerful charged attack.
---

import enemy from '@site/src/data/enemies/Automaton_Grizzly.json'

# Automaton Grizzly
<blockquote>{frontMatter.description}</blockquote>

import EnemyMisc from '@site/src/components/enemy/EnemyMisc'
import EnemySkills from '@site/src/components/enemy/EnemySkills'

## Variants

<Tabs>
<TabItem value='0' label='Automaton Grizzly'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={0} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={0} />
</TabItem>
<TabItem value='1' label='Automaton Grizzly (Complete)'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={1} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={1} />
</TabItem>
</Tabs>
