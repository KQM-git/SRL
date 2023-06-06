---
description: An explanation on how turn order is determined during combat.
---

# Turn Order Mechanics

## Action Gauge

Starts at 10000 by default for all units and depletes over turns, once it reaches 0 for any given unit it is their turn to act. After the given unit has acted, their Action Gauge fills back up to 10000.

## Gauge Action Modifier

Various effects result in changes to a unit’s Action Gauge. 

### Advance Forward & Action Delay

Advance Forward reduces a unit’s Action Gauge value by a percentage of 10000 while Action Delay increases a unit’s Action Gauge value by a percentage of 10000.

$$
\text{New Action Gauge} = \text{Old Action Gauge} - (\text{Advance Forward \%} - \text{Action Delay} \%)*10000
$$

If as a result of Advancing Forward, a character's Action Gauge falls to 0, that character will move before the character slated to move next by natural Action Gauge depletion. 

### Toughness Break

An in-combat Action Gauge modifier. Triggered when an enemy’s Toughness Meter is broken. It increases the enemy's Action Gauge with an Action Delay % of 25%.

$$
\text{New Action Gauge} = \text{Old Action Gauge} - (0 - 25 \%)*10000
$$

### Imprisonment - Imaginary

An in-combat Action Gauge modifier. Triggered when an Imaginary Character applies a Weakness Break. It increases an enemy's Action Gauge with an Action Delay % determined by the formula below. In addition, it applies a 10% Speed Debuff. 

$$
\text{Final Action Delay \%} = 30 \%(1 + \text{Break Effect} \%)
$$

### Entangle - Quantum

An in-combat Action Gauge modifier. Triggered when a Quantum Character applies a Weakness Break. It increases an enemy’s Action Gauge with an Action Delay % determined by the formula below.

$$
\text{Final Action Delay \%} = 20 \%(1 + \text{Break Effect} \%)
$$

### Frozen - Ice

An in-combat Action Gauge modifier. Triggers when an Ice Character applies a Weakness Break. It freezes an enemy such that once it is their turn to act, they do not act and instead unfreeze. Their next action will receive a 50% Advance Forward %.

## AV - Action Value

All units have an AV, which determines where they are relative to one another in the turn order. 

### Current AV

A unit's current AV is dependent on their current Action Gauge and current Speed. 

$$
\text{Current AV} = \frac
    {\text{Current Gauge}}
    {\text{Current Speed}}
$$

When a unit's Action Gauge has reached 0 so to does their AV. Thus when AV is 0 a unit may act. 

Once the current acting unit has moved they will return to the back of the queue and the unit closest to 0 AV will consume their current AV in order to act. Following units in the turn order will consume the same amount of AV.

$$
\text{New AV} = \text{Current AV} - \text{Consumed AV}
$$

### AV Consumption in Relation to Action Gauge

Rewriting the above formula in terms of Action Gauge: 

$$
\text{New AV} \times \text{Current Speed} = \text{Current AV} \times \text{Current Speed} - \text{Consumed AV} \times \text{Current Speed}
$$

$$
\text{New Action Gauge} = \text{Current Action Gauge} - \text{Consumed Action Gauge}
$$

## Speed

A factor that determines the rate at which a unit moves relative to other units in combat.

### Speed Status Effects

New AV after Speed status effects.

$$
\text{New AV} = \text{Current AV} \times \frac
{\text{Current Speed}}
{\text{New Speed}}
$$

### Flat Speed Increase

$$
\text{New Speed} = \text{Current Speed} + \text{Speed Buff}
$$

### Percent Speed Increase

Percent modifier is based on unit's base speed, without relics or external buffs applied.

$$
\text{New Speed} = \text{Current Speed} + (\text{Speed Buff \% } \times \text{Base Speed})
$$

## Unit Sorting Logic

Sorting prioritizes Characters over Enemies. Within their respective groups, units are sorted by their slot, where the lower slot acts before the higher slot in the event of ties. 

### Turn Order Populating 

Upon starting a battle, the Turn Order is populated by both Characters and Enemies. The order of their addition to the Turn Order is defined by the Unit Sorting Logic.

Once all units are added, a stable sort is performed on the Turn Order by AV. Sorting of units in the event of AV ties is done through the same Unit Sorting Logic.   