---
sidebar_position: 2
description: |-
  A gunner of Belobog's Silvermane Guards, tasked with sniping at enemies.
  Silvermane Gunners' shots will inflict Bleed on their enemies during combat.
---

import enemy from '@site/src/data/enemies/Silvermane_Gunner.json'

# Silvermane Gunner
<blockquote>{frontMatter.description}</blockquote>

import EnemyMisc from '@site/src/components/enemy/EnemyMisc'
import EnemySkills from '@site/src/components/enemy/EnemySkills'

## Stats

<EnemyMisc enemy={enemy} variant={0} />

## Skills

<EnemySkills enemy={enemy} variant={0} />
