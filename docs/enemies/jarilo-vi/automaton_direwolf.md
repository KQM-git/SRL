---
sidebar_position: 10
description: |-
  An automaton pieced together with Old World technology. This rare type of humanoid automaton is equipped with a chainsaw on its right arm, presumably used for mining or construction operations.
  In combat, Automaton Direwolfs will use their chainsaw to Bleed enemies, dealing DoT.
---

import enemy from '@site/src/data/enemies/Automaton_Direwolf.json'

# Automaton Direwolf
<blockquote>{frontMatter.description}</blockquote>

import EnemyMisc from '@site/src/components/enemy/EnemyMisc'
import EnemySkills from '@site/src/components/enemy/EnemySkills'

## Variants

<Tabs queryString="variant">
<TabItem value='1' label='Automaton Direwolf'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={0} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={0} />
</TabItem>
<TabItem value='2' label='Automaton Direwolf (Bug)'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={1} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={1} />
</TabItem>
<TabItem value='3' label='Automaton Direwolf (Complete)'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={2} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={2} />
</TabItem>
</Tabs>
