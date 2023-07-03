import { Character } from "../data/types";

export function getTalents(char: Character, skill: string) {
  let skillType = skill
  switch (skill) {
    case "basic": skillType = "Basic ATK"; break;
    case "skill": skillType = "Skill"; break;
    case "ult": skillType = "Ultimate"; break;
    case "talent": skillType = "Talent"; break;
    case "technique": skillType = "Technique"; break;
    default: break;
  }

  return char.skills.filter(x => x.type == skillType)
}
