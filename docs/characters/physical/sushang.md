---
description: |-
  Born on the Xianzhou Yaoqing, sent to the Cloud Knights of the Luofu for military training.
  She wields her family sword, a gift from her mother, and longs for the future she will go on to write.
---

import char from '@site/src/data/characters/Sushang.json'

# Sushang

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Sushang.png')} alt="Sushang's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* TODO

## Base Stats

import CharStatsTable from '@site/src/components/char/CharStatsTable'

<CharStatsTable char={char} />

## Abilities

import Skill from '@site/src/components/char/Skill'

<Tabs>
<TabItem value='batk' label='Basic ATK'>
<Skill char={char} skill='batk' />

</TabItem>
<TabItem value='e' label='Skill'>
<Skill char={char} skill='e' />

</TabItem>
<TabItem value='q' label='Ultimate'>
<Skill char={char} skill='q'/>

</TabItem>
<TabItem value='t' label='Talent'>
<Skill char={char} skill='t'/>

</TabItem>
<TabItem value='p' label='Technique'>
<Skill char={char} skill='p'/>

</TabItem>
</Tabs>

## Traces

:::danger
TODO
:::

## Eidolon

:::danger
TODO
:::