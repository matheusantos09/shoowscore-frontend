import React from 'react';
import { useTranslation } from 'react-i18next';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { site } from '../../configs/site-env';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(4),
  },
}));

const Index: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
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
