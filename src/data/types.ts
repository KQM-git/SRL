// Characters
export interface Character {
    name: string
    star: number
    stats: CharacterStats[]
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
    values: string[]
}
