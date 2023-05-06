---
sidebar_position: 11
description: |-
  This ancient relic from the Old World was an automated control unit left behind during the times of the Geomarrow Development Group. Unlike other mindless machines that could only receive instructions, Svarog is capable of complex thoughts.
  In battle, Svarog summons mechanical arms to grab and control his enemies, delivering devastating attacks.
---

import enemy from '@site/src/data/enemies/Svarog.json'

# Svarog
<blockquote>{frontMatter.description}</blockquote>

import EnemyMisc from '@site/src/components/enemy/EnemyMisc'
import EnemySkills from '@site/src/components/enemy/EnemySkills'

## Stats

<EnemyMisc enemy={enemy} variant={0} />

## Skills

<EnemySkills enemy={enemy} variant={0} />

## Children

import DocCardList from '@theme/DocCardList';

<DocCardList />
