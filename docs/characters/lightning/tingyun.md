---
description: |-
  Amicassador of the Sky-Faring Commission of the Xianzhou Luofu.
  She travels with business delegates, forging trade relationships and alliances with many worlds.
---

import char from '@site/src/data/characters/Tingyun.json'

# Tingyun

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Tingyun.png')} alt="Tingyun's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* TODO
test
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

import Trace from '@site/src/components/char/Trace'

<Tabs>
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

<Tabs>
<TabItem value='E1' label='E1'>
<Eidolon char={char} eidolon={1} />

</TabItem>
<TabItem value='E2' label='E2'>
<Eidolon char={char} eidolon={2} />

</TabItem>
<TabItem value='E3' label='E3'>
<Eidolon char={char} eidolon={3} />

</TabItem>
<TabItem value='E4' label='E4'>
<Eidolon char={char} eidolon={4} />

</TabItem>
<TabItem value='E5' label='E5'>
<Eidolon char={char} eidolon={5} />

</TabItem>
<TabItem value='E6' label='E6'>
<Eidolon char={char} eidolon={6} />

</TabItem>
</Tabs>
