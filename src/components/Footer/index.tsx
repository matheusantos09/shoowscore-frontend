import React from 'react';
import { useTranslation } from 'react-i18next';

import { site } from '../../configs/site-env';
import Typography from '../Generals/Typography';

const Index: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        {t('site.shortDescription')}
      </Typography>

      <Typography variant="body2" color="textSecondary" align="center">
        <span>
          Copyright © <b>{t('site.name')}</b>
        </span>
        <br />
        {site.version} | {new Date().getFullYear()}
      </Typography>
    </footer>
  );
};

export default Index;
