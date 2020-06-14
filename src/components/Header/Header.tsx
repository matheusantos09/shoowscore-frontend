import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from 'i18next';

import { Link } from 'react-router-dom';

import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import ptBRFlag from '../../assets/images/flags/ptBR.svg'
import enENFlag from '../../assets/images/flags/enEN.svg'

const drawerWidth = 240;

const useStyles = makeStyles(( theme ) => ( {
  footer: {
    padding: theme.spacing(4),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectInput: {
    width: 60,
    borderRadius: "50%",
    "&:before": {
      display: "none"
    }
  },
  selectImg: {
    width: 30,
    borderRadius: "50%"
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create([ 'width', 'margin' ], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${ drawerWidth }px)`,
    transition: theme.transitions.create([ 'width', 'margin' ], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  flexLine: {
    display: 'flex',
    alignItems: 'center'
  },
  toolbarTop: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  link: {
    color: "#FFF",
    textDecoration: "none !important",
    outline: "unset !important"
  }
} ));

function Header() {
  const { t } = useTranslation();
  const classes = useStyles();
  const [ flag, setFlag ] = useState<string>('en');

  const changeLanguage = ( event: React.ChangeEvent<{ value: unknown }> ) => {
    const languageSelected = event.target.value as string;

    setFlag(languageSelected);
    i18next.changeLanguage(languageSelected);
  }

  return (
    <>
      <AppBar
        position="fixed"
        className={ classes.appBar }
      >
        <Toolbar className={ classes.toolbarTop }>
          <div className={ classes.flexLine }>
            <Typography variant="h6" noWrap>
              <Link to="/" className={ classes.link }>{ t('site.name') }</Link>
            </Typography>
          </div>
          <div>
            <FormControl className={ classes.formControl }>
              <Select
                className={ classes.selectInput }
                labelId="flag-select-outlined-label"
                id="flag-select-outlined"
                value={ flag }
                onChange={ changeLanguage }
              >
                <MenuItem selected value="en"><img className={ classes.selectImg } src={ enENFlag } alt={ t('inputs.change_language.flags.enEN') } /></MenuItem>
                <MenuItem value="pt"><img className={ classes.selectImg } src={ ptBRFlag } alt={ t('inputs.change_language.flags.ptBR') } /></MenuItem>
              </Select>
            </FormControl>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
