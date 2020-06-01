import React from "react";
import Typography from "@material-ui/core/Typography";
import { site } from "../../configs/site-env";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(( theme ) => ( {
  footer: {
    padding: theme.spacing(4),
  },
} ));

function Footer() {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <footer className={ classes.footer }>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        { t('site.shortDescription') }
      </Typography>

      <Typography variant="body2" color="textSecondary" align="center">
        Copyright © { t('site.name') } { site.version }
        { new Date().getFullYear() }
      </Typography>

    </footer>
  )
}

export default Footer
