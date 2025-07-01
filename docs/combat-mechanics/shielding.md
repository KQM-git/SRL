---
description: An explanation on shields, and how shield values are calculated.
---

# Shields

:::info
This document is mostly complete, but is missing a few notable exceptions. The concepts and mechanics outlined in this document are generally accurate.
:::

## Introduction

Shields mitigate damage received from enemies in place of HP.

The sections below detail the behaviour of how shields work in HSR.



## Shield Absorption
How do shields actually absorb damage?

Simply this: Each shield has a Shield Effect Value. This Shield Effect Value (SEV) is equal to the number that appears when you cast a shield buff on a character. This SEV acts in place of HP when taking damage. Any damage taken is calculated before applied to a shield as per normal damage received calculation.

![](/img/shields/shields1.jpg)

In this instance, using March 7th’s Skill, Dan Heng receives a shield buff with 1271 SEV. This is reflected in character details as such.

![](/img/shields/shields2.jpg)

When damaged, the shield will absorb whatever damage is dealt to Dan Heng and apply it to the shield’s SEV instead.

![](/img/shields/shields3.jpg)

In this instance, the shield buff’s SEV takes 222 points of damage, reducing it to 1049, while Dan Heng takes no damage to HP. Notice that the Burn effect is still applied. This burn damage will be taken at the start of Dan Heng’s turn and applied against SEV rather than HP.

![](/img/shields/shields4.jpg)

Any overflow from an attack will be taken to HP as per normal.



## SEV Calculation

The formula to determine SEV applied by any particular shield buff is as follows

$$
SEV=(\% Scale\cdot Attribute+Extra\; SEV)\cdot\% Bonus
$$

Where $\% Scale$ is the % number that is used in calculation;

$Attribute$ is the relevant stat that $\% Scale$ works based off;

$Extra\; SEV$ is any extra SEV on skill cast; and

$\% Bonus$ is the **additive** sum of all relic bonuses or miscellaneous shield bonuses.



### Example Calculation
In our example calculation, we use March 7th's Skill at Level 3 to apply the buff. March's skill at Level 3 is as follows:

![](/img/shields/shieldscalc1.jpg)

There is a quirk in Talent and Skill scaling. The numbers shown here are decimal values, but are rounded to integers. For more information on this behaviour, see Talents and Traces in the SRL.

For March’s Skill at Level 3, we set %Scale at 0.4275, and Attribute is counted based on her DEF since March’s skill scales off DEF.

$$
SEV=(0.4275\cdot DEF+Extra\; SEV)\cdot\% Bonus
$$

$Extra\; SEV$ is set at $389.5$ according to the attribute scale.

Our example March uses Knight of Purity Palace as her relic set.

![](/img/shields/shieldscalc2.jpg)

This means, we set $\% Bonus$ to $1 + 0.2 = 1.2.$

Finally, we can input March’s value of DEF, which is automatically calculated for us by the game, and is at 1568 for this instance.

![](/img/shields/shieldscalc3.jpg)

Our final equation looks like this.

$$
SEV=(0.4275\cdot 1568+389.5\; SEV)\cdot 1.2=1271.784
$$

The resultant value of SEV is 1271.784. Looking in-game, we see that this is accurate to the in-game value of March’s shielding skill by experimental testing, barring a small rounding error.

![](/img/shields/shieldscalc4.jpg)



## Shield Stacking
Q: "Do shields stack?"

There is a short answer and a long answer to this question.

### The short answer is no.

Shields in HSR do not stack. The shield on a character is the highest value of SEV applied by any single shield buff.

### The long answer.

Shields come in single, separate buffs. Each shield buff has a Shield Effect Value (SEV) as stated above. This SEV is the ‘current HP’ of each shield buff. The shield with the highest SEV is the ‘active’ shield. The SEV of the active shield is directly represented in game by the numeric value on the character details.

![](/img/shields/shieldsstacking1.jpg)

In this case, this character’s active shield SEV = 1017. However, all shields, regardless of whether they are active or not, take damage when the character takes damage. This damage received follows the normal damage received calculation, and is applied to each shield’s SEV.

When an active shield expires by virtue of the buff running out and expiring, the shield buff with the next highest SEV becomes the new active shield.

### What does this mean in the actual game?

Some shield buffs come with additional effects. One example of this is March 7th’s Target Probability Increase.

![](/img/shields/shieldsstacking2.jpg)

Assume that we have the following setup happens:

We apply March 7th’s Skill to a character. This shield’s SEV is 1271 and is the only shield buff, so it is the active shield. This buff also applies March's Target Probability Increase on the character.

![](/img/shields/shieldsstacking3.jpg)

Let’s say, this shield takes damage such that now the March’s Shield’s SEV is now at 50.

We now apply Preservation Trailblazer’s Shield at 115 SEV.

![](/img/shields/shieldsstacking4.jpg)

Since Preservation Trailblazer’s Shield is now the higher SEV shield, this shield buff becomes the active shield buff (the value you see in character details reflects this as such). Note that at this stage, March’s Target Probability Increase still applies.

![](/img/shields/shieldsstacking5.jpg)

However, now, if we take 101 points of damage, the following happens.

Firstly, March’s Shield SEV reduces past 0, and thus this shield buff expires. This is reflected in-game by the buff disappearing off the character’s active buffs list. Similarly, in character details, this buff is removed.

![](/img/shields/shieldsstacking6.jpg) ![](/img/shields/shieldsstacking7.jpg)

Secondly, Trailblazer’s Shield is now at 14 SEV. This maintains the shield.

As a result of these two effects, March’s Target Probability Increase is no longer applied to the character, even though the shield is maintained, and looks like the ‘same’ shield as applied by March.

## Credits

### Writers:
- Sylfr#0001

### Theorycrafters:
- 