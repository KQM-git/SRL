---
sidebar_position: 12
description: |-
  An ape as tall as mountainous boulders with terrifying might.
  When the Ambrosial Arbor still stood, the Xianzhou people bred many fantastic creatures with their esoteric techniques. Malefic Apes were one of the war beasts that walked alongside the army.
---

import enemy from '@site/src/data/enemies/Abundance_Sprite_Malefic_Ape.json'

# Abundance Sprite: Malefic Ape
<blockquote>{frontMatter.description}</blockquote>

import EnemyMisc from '@site/src/components/enemy/EnemyMisc'
import EnemySkills from '@site/src/components/enemy/EnemySkills'

## Variants

<Tabs queryString="variant">
<TabItem value='1' label='Abundance Sprite: Malefic Ape'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={0} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={0} />
</TabItem>
<TabItem value='2' label='Abundance Sprite: Malefic Ape (Bug)'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={1} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={1} />
</TabItem>
</Tabs>
