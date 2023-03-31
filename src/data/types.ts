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