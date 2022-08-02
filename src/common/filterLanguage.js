import { langList } from '../data/languageList';

export const filterLanguage = (key, langType) => {
  return langList[key].filter((el) => el.langType === langType)[0].language;
};
