---
description: |-
  The head of Herta Space Station's Security Department.
  This quiet boy hopes to protect the researchers who value their pursuit of knowledge, and to help them to complete their work.
---

import char from '@site/src/data/characters/Arlan.json'

# Arlan

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Arlan.png')} alt="Arlan's gacha art" />
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