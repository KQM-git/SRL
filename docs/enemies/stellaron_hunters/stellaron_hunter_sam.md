---
sidebar_position: 2
description: |-
  One of the Stellaron Hunters, a mysterious warrior donning formidable armor.
  The mecha suit possesses the power to unleash fiery attacks, engulfing the battlefield in flames.
---

import enemy from '@site/src/data/enemies/Stellaron_Hunter_Sam.json'

# Stellaron Hunter: Sam
<blockquote>{frontMatter.description}</blockquote>

import EnemyMisc from '@site/src/components/enemy/EnemyMisc'
import EnemySkills from '@site/src/components/enemy/EnemySkills'

## Stats

<EnemyMisc enemy={enemy} variant={0} />

## Skills

<EnemySkills enemy={enemy} variant={0} />
