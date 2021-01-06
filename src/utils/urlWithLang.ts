import i18n from '../i18n';
import { defaultLanguageKey, languages } from '../configs/languages-api';

export function urlWithLang(string = ''): string {
  let lang = defaultLanguageKey;
  // @ts-ignore
  const verifyLang = languages[i18n.language];

  if (verifyLang) {
    lang = i18n.language;
  }

  return '/'.concat(lang).concat('/').concat(string).replace('//', '/');
}
