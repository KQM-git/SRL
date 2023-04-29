import { Character } from "../data/types";

export function getTalents(char: Character, skill: string) {
  let skillType = skill
  switch (skill) {
    case "batk": skillType = "Basic ATK"; break;
    case "e": skillType = "Skill"; break;
    case "q": skillType = "Ultimate"; break;
    case "t": skillType = "Talent"; break;
    case "p": skillType = "Technique"; break;
    default: break;
  }

  return char.skills.filter(x => x.type == skillType)
}
