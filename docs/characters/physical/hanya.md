---
description: |-
  One of the judges of the Xianzhou Luofu's Ten-Lords Commission.
  Ordained by the Ten-Lords and wielding the authority of the Oracle Brush, she reads the multitudes of human sins and transgressions, then issues punishments and karmic retribution.
---

import char from '@site/src/data/characters/Hanya.json'

# Hanya

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Hanya.png')} alt="Hanya's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* TODO

## Base Stats

import CharStatsTable from '@site/src/components/char/CharStatsTable'

<CharStatsTable char={char} />

## Abilities

import Skill from '@site/src/components/char/Skill'

<Tabs queryString="ability">
<TabItem value='basic' label='Basic ATK'>
<Skill char={char} skill='basic' />

</TabItem>
<TabItem value='skill' label='Skill'>
<Skill char={char} skill='skill' />

</TabItem>
<TabItem value='ult' label='Ultimate'>
<Skill char={char} skill='ult'/>

</TabItem>
<TabItem value='talent' label='Talent'>
<Skill char={char} skill='talent'/>

</TabItem>
<TabItem value='technique' label='Technique'>
<Skill char={char} skill='technique'/>

</TabItem>
</Tabs>

## Traces

import Trace from '@site/src/components/char/Trace'

<Tabs queryString="trace">
<TabItem value='a2' label='A2'>
<Trace char={char} trace='a2' />

</TabItem>
<TabItem value='a4' label='A4'>
<Trace char={char} trace='a4' />

</TabItem>
<TabItem value='a6' label='A6'>
<Trace char={char} trace='a6' />

</TabItem>
<TabItem value='misc' label='Misc'>
<Trace char={char} trace='misc' />
</TabItem>
</Tabs>

## Eidolon

import Eidolon from '@site/src/components/char/Eidolon'

<Tabs queryString="eidolon">
<TabItem value='e1' label='E1'>
<Eidolon char={char} eidolon={1} />

</TabItem>
<TabItem value='e2' label='E2'>
<Eidolon char={char} eidolon={2} />

</TabItem>
<TabItem value='e3' label='E3'>
<Eidolon char={char} eidolon={3} />

</TabItem>
<TabItem value='e4' label='E4'>
<Eidolon char={char} eidolon={4} />

</TabItem>
<TabItem value='e5' label='E5'>
<Eidolon char={char} eidolon={5} />

</TabItem>
<TabItem value='e6' label='E6'>
<Eidolon char={char} eidolon={6} />

</TabItem>
</Tabs>

## Evidence Vault

<Card item={require('../../evidence/characters/physical/hanya.md')} />
