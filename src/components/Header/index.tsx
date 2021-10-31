import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import { Link } from 'react-router-dom';

import {
  FloatBar,
  SelectorLanguage,
  SelectorLanguageFloat,
  SelectorLanguageItem,
  SelectorLanguageItemSelect,
  Toolbar,
} from './styles';

import ptImageFlag from '../../assets/images/flags/ptBR.svg';
import enImageFlag from '../../assets/images/flags/enEN.svg';
import { urlWithLang } from '../../utils/urlWithLang';
import Typography from '../Generals/Typography';

const Index: React.FC = () => {
  const { t } = useTranslation();
  const [flagTextSelected, setFlagTextSelected] = useState<string>('en');
  const [flagSelected, setFlagSelected] = useState<string>(enImageFlag);

  const changeLanguage = (language: string): any => {
    if (flagTextSelected !== language) {
      setFlagTextSelected(language);

      switch (language) {
        case 'pt':
          setFlagSelected(ptImageFlag);
          break;

        default:
          setFlagSelected(enImageFlag);
      }

      i18next.changeLanguage(language);
    }
  };

  return (
    <>
      <FloatBar>
        <Toolbar>
          <Typography>
            <Link to={urlWithLang('')}>{t('site.name')}</Link>
          </Typography>

          <SelectorLanguage>
            <SelectorLanguageItemSelect>
              <img src={flagSelected} alt="" />
            </SelectorLanguageItemSelect>
            <SelectorLanguageFloat>
              <SelectorLanguageItem
                className={flagTextSelected === 'en' ? 'selected' : ''}
                onClick={() => changeLanguage('en')}
              >
                <img
                  src={enImageFlag}
                  alt={t('inputs.change_language.flags.enEN')}
                />
              </SelectorLanguageItem>
              <SelectorLanguageItem
                className={flagTextSelected === 'pt' ? 'selected' : ''}
                onClick={() => changeLanguage('pt')}
              >
                <img
                  src={ptImageFlag}
                  alt={t('inputs.change_language.flags.ptBR')}
                />
              </SelectorLanguageItem>
            </SelectorLanguageFloat>
          </SelectorLanguage>
        </Toolbar>
      </FloatBar>
    </>
  );
};

export default Index;
