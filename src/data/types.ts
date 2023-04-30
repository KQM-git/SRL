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
    desc: string[]
}

export interface Eidolon {
    name: string
    desc: string
}

export interface CharacterTrace {
    name: string
    desc: string
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
    refinements: LightconeRefinements
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

export interface LightconeRefinements {
    name: string
    desc: string
}

// Relics

export interface Relic {
    name: string
    bonuses: RelicBonus[]
}
export interface RelicBonus {
    count: number
    desc: string
}