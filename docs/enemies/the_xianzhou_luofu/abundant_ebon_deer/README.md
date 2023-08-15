---
sidebar_position: 4
description: |-
  An auspicious spiritual beast wrought into being by the Ambrosial Arbor and protects its roots. Its arrival brings along exuberant vegetation and promises good fortune.
  Once destroyed during ancient wars, the Ambrosial Arbor is mended by the Stellaron and finally revives. Rare creatures and legendary beasts made by celestials of the past all return to this world, like an old dream coming alive again.
---

import enemy from '@site/src/data/enemies/Abundant_Ebon_Deer.json'

# Abundant Ebon Deer
<blockquote>{frontMatter.description}</blockquote>

import EnemyMisc from '@site/src/components/enemy/EnemyMisc'
import EnemySkills from '@site/src/components/enemy/EnemySkills'

## Variants

<Tabs queryString="variant">
<TabItem value='1' label='Abundant Ebon Deer'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={0} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={0} />
</TabItem>
<TabItem value='2' label='Abundant Ebon Deer (Complete)'>

<h2>Stats</h2>

<EnemyMisc enemy={enemy} variant={1} />

<h2>Skills</h2>

<EnemySkills enemy={enemy} variant={1} />
</TabItem>
</Tabs>

## Children

import DocCardList from '@theme/DocCardList';

<DocCardList />
