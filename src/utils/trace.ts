import { Character } from "../data/types";

export function getTraces(char: Character, trace: string) {
  switch (trace) {
    case "a2": return char.skillTree.filter(x => x.minAsc == 2)
    case "a3": return char.skillTree.filter(x => x.minAsc == 3)
    case "a4": return char.skillTree.filter(x => x.minAsc == 4)
    case "a5": return char.skillTree.filter(x => x.minAsc == 5)
    case "a6": return char.skillTree.filter(x => x.minAsc == 6)
    case "misc": return char.skillTree.filter(x => x.minAsc == undefined)
    default: break;
  }

  return []
}

