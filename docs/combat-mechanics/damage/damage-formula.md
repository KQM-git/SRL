---
description: An explanation as to how outgoing damage is calculated.
---

# Damage Formula

:::danger
This page is still heavily under construction
:::

## General Formula for Damage

$$
\text{Damage} = \text{ATK} \times \text{DamageMultiplier} \times (1 + \text{DMGIncrease}) \\
\times \text{CRIT} \times (1 + \text{DMGTaken}) \times \text{DEFDamageReduction} \\ 
\times \text{RESDamageReduction} \times \text{ToughnessDamageReduction}
$$

See the sections below for the breakdown of each individual part of the formula.

## Evidence Vault

<Card item={require('../../evidence/combat-mechanics/damage/damage-formula.md')} />
