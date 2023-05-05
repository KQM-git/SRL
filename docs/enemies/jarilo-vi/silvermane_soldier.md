---
sidebar_position: 1
description: |-
  A member of Belobog's Silvermane Guards, tasked with leading the charge into enemy lines.
  Silvermane Soldiers' attacks will reduce their enemies' defense during combat.
---

import enemy from '@site/src/data/enemies/Silvermane_Soldier.json'

# Silvermane Soldier
<blockquote>{frontMatter.description}</blockquote>

## Stats

import EnemyMisc from '@site/src/components/enemy/EnemyMisc'

<EnemyMisc enemy={enemy} variant={0} />

## Skills

import EnemySkills from '@site/src/components/enemy/EnemySkills'

<EnemySkills enemy={enemy} variant={0} />
