// Characters
export interface Character {
    name: string
    star: number
    stats: CharacterStats[]
    skills: Skill[]
    eidolons: Eidolon[]
    skillTree: CharacterTrace[]
}

export interface CharacterStats {
    level: number
    maxLevel: number
    attackBase: number
    attackAdd: number
    hpBase: number
    hpAdd: number
    defenseBase: number
    defenseAdd: number
    crate: number
    cdmg: number
    aggro: number
    speedBase: number
    speedAdd: number
}

export interface Skill {
    name: string
    tag: string
    type: string
    desc: string
    params: number[][]
}

export interface Eidolon {
    name: string
    desc: string
    params: number[]
}

export interface CharacterTrace {
    name: string
    desc: string
    params: number[]
    minAsc?: number
    minLevel?: number
    children?: CharacterTrace[]
}

// Lightcones

export interface Lightcone {
    name: string
    baseType: string
    stars: number
    stats: LightconeStats[]
    superimposition: LightconeSuperimposition
}

export interface LightconeStats {
    level: number
    maxLevel: number
    hpBase: number
    hpAdd: number
    attackBase: number
    attackAdd: number
    defenseBase: number
    defenseAdd: number
}

export interface LightconeSuperimposition {
    name: string
    desc: string
    params: number[][]
}

// Relics

export interface Relic {
    name: string
    bonuses: RelicBonus[]
}
export interface RelicBonus {
    count: number
    desc: string
    params: number[]
}

// Enemies
export interface Enemy {
    name: string
    faction: string,
    variants: EnemyVariant[]
}
export interface EnemyVariant {
    attack: number
    def: number
    hp: number
    speed: number
    toughness: number
    effectResBase: number
    weaknesses: string[]
    id?: number
    dmgRES: Record<string, number>
    debuffRES: Record<string, number>
    skills: EnemySkill[]
}
export interface EnemySkill {
    name: string
    type: string
    desc: string
    phases?: number[]
    threat?: true
}