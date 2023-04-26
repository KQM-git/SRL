---
description: |-
  A seasoned member of the Express Crew.
  The passion buried in his heart burns anew as he enjoys this fresh adventure.
  Occasionally, he would sketch the experiences in a notebook.
---

import char from '@site/src/data/characters/Welt.json'

# Welt

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Welt.png')} alt="Welt's gacha art" />
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