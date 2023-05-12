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

## Variants

<Tabs queryString="variant">
<TabItem value='1' label='Svarog (Story)'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={0} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={0} />
</TabItem>
<TabItem value='2' label='Svarog (Complete)'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={1} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={1} />
</TabItem>
</Tabs>

## Children

import DocCardList from '@theme/DocCardList';

<DocCardList />
