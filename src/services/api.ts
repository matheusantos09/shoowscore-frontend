import axios from 'axios';
import i18n from '../i18n';

import { defaultLanguage, languages } from '../configs/languages-api';

const apiDataBase = axios.create({
  baseURL: 'http://localhost:3333/api',
});

apiDataBase.interceptors.request.use((config) => {
  let lang = defaultLanguage;
  // @ts-ignore
  const verifyLang = languages[i18n.language];

  if (verifyLang) {
    lang = verifyLang;
  }

  // eslint-disable-next-line no-param-reassign
  config.params = config.params || {};
  // eslint-disable-next-line no-param-reassign
  config.params.language = lang;

  return config;
});

export default apiDataBase;
