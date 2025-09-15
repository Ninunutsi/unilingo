export const formatLanguages = (langs?: string[]) => {
  if (!langs || langs.length === 0) return "";
  if (langs.length === 1) return langs[0];
  return `${langs.slice(0, -1).join(", ")} and ${
    langs[langs.length - 1]
  }`.split(" ");
};
