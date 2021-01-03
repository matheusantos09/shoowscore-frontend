import React from 'react';
import { useTranslation } from 'react-i18next';

import { LoaderContainer } from './styles';

const LoaderCam: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <LoaderContainer>
        LOADING
        <span>{t('phrase.loading')} &hellip;</span>
      </LoaderContainer>
    </>
  );
};

export default LoaderCam;
