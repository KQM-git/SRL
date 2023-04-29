export function cleanup(text: string) {
  return text.replace(/\n/g, "  \n").replace(/·/g, "- ")
}