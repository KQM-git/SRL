---
description: An explanation as to how outgoing damage is calculated.
---

# Damage Formula

:::danger
This page is still heavily under construction, the current info is based on [arkkus' document](https://docs.google.com/document/d/e/2PACX-1vQ9M7q5jLz9DKkTRlsGiB8RGYyPQyhShbuTbrVPQ7-Ke4_U787MfWzr2NjY-KrQo5Ota4Lj3JrFyge9/pub)
:::

## General Formula for Damage

$$
\text{Damage} = \text{Base DMG} \times \text{CRIT} \times \text{DMG\% Multiplier} \\
\times \text{DEF Multiplier} \times \text{RES Multiplier} \\
\times \text{DMG Taken Multiplier} \times \text{Toughness Multiplier}
$$

See the sections below for the breakdown of each individual part of the formula.

## Base Damage

$$
\text{Base DMG} =
\begin{cases}
  (\text{Skill MV} + \text{Extra MV}) \times \text{ATK} + \text{Extra DMG} & \text{if, attack scales with ATK} \\
  (\text{Skill MV} + \text{Extra MV}) \times \text{DEF} + \text{Extra DMG} & \text{if, attack scales with DEF} \\
  (\text{Skill MV} + \text{Extra MV}) \times \text{Max HP} + \text{Extra DMG} & \text{if, attack scales with Max HP}
\end{cases}
$$

$$
\text{ATK} = (\text{AttackCharacter} + \text{AttackWeapon}) \times (1 + \text{AttackBonus}) + \text{FlatAttack}
$$

$$
\text{DEF} = (\text{DefenseCharacter} + \text{DefenseWeapon}) \times (1 + \text{DefenseBonus}) + \text{FlatDefense}
$$

$$
\text{Max HP} = (\text{HealthCharacter} + \text{HealthWeapon}) \times (1 + \text{HealthBonus}) + \text{FlatHealth}
$$

## Critical Hits

$$
\text{CRIT} = \begin{cases}
  1 + \text{CRITDamage} & \text{if, CRIT} \\
  1 & \text{otherwise}
\end{cases}
$$

$$
\text{AverageCrit} = 1 + \text{clamp}\{0\%, \text{CRITRate}, 100\% \} \times \text{CRITDamage}
$$

## DMG% Bonuses

$$
\text{DMG\% Multiplier} = 1 + \text{Elemental DMG\%} + \text{All Type DMG\%} + \text{DoT DMG\%}
$$

For all relevant DMG%'s.

## Enemy Defense

$$
\text{DEF Multiplier} = 100\% - \frac
    {\text{DEF}_{\text{Enemy}}}
    {\text{DEF}_{\text{Enemy}} + 200 + 10 * \text{Level}_{\text{Character}} }
$$

with

$$
\text{DEF}_{\text{Enemy}} = 200 + 10 * \text{Level}_{\text{Enemy}}
$$

## Enemy Resistance

$$
\text{RES Multiplier} = 100\% - (\text{RES\%} - \text{RES PEN\%})
$$

## Damage Taken Multiplier

$$
\text{DMG Taken Multiplier}  = 1 + \text{Elemental DMG Taken\%} + \text{All Type DMG Taken\%} 
$$

## Toughness Multiplier

$$
\text{Toughness Multiplier} = \begin{cases}
  0.9 & \text{if, Enemy has Toughness} \\
  1.0 & \text{if, Enemy Toughness has been broken} \\
\end{cases}
$$

## Evidence Vault

<Card item={require('../../evidence/combat-mechanics/damage/damage-formula.md')} />
