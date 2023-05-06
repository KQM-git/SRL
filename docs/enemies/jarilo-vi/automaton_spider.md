---
sidebar_position: 7
description: |-
  An automaton pieced together with Old World technology. Humans have tasked it with the most basic manual labors.
  In combat, Automaton Spiders are highly unstable, capable of exploding when damaged.
---

import enemy from '@site/src/data/enemies/Automaton_Spider.json'

# Automaton Spider
<blockquote>{frontMatter.description}</blockquote>

import EnemyMisc from '@site/src/components/enemy/EnemyMisc'
import EnemySkills from '@site/src/components/enemy/EnemySkills'

## Stats

<EnemyMisc enemy={enemy} variant={0} />

## Skills

<EnemySkills enemy={enemy} variant={0} />
