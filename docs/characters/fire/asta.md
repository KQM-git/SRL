---
description: |-
  The lead researcher of Herta Space Station and a lady from a renowned family.
  She's an astronomer overflowing with curiosity, and excels at managing the disparate staff of the space station.
---

import char from '@site/src/data/characters/Asta.json'

# Asta

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Asta.png')} alt="Asta's gacha art" />
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