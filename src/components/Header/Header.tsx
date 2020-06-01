import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import i18next from 'i18next';

import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

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
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
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
  }
} ));

function Header() {
  const { t } = useTranslation();
  const classes = useStyles();
  const [ open, setOpen ] = useState<boolean>(false);
  const [ flag, setFlag ] = useState<string>('en');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const changeLanguage = ( event: React.ChangeEvent<{ value: unknown }> ) => {
    const languageSelected = event.target.value as string;

    setFlag(languageSelected);
    i18next.changeLanguage(languageSelected);
  }

  return (
    <>
      <AppBar
        position="fixed"
        className={ clsx(classes.appBar, {
          [classes.appBarShift]: open,
        }) }
      >
        <Toolbar className={ classes.toolbarTop }>
          <div className={ classes.flexLine }>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={ handleDrawerOpen }
              edge="start"
              className={ clsx(classes.menuButton, {
                [classes.hide]: open,
              }) }
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              { t('site.name') }
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

      <Drawer
        variant="permanent"
        className={ clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }) }
        classes={ {
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        } }
      >

        <div className={ classes.toolbar }>
          <IconButton onClick={ handleDrawerClose }>
            <ChevronLeftIcon />
          </IconButton>
        </div>

        <Divider />

        <List>
          { [ 'Inbox', 'Starred', 'Send email', 'Drafts' ].map(( text, index ) => (
            <ListItem button key={ text }>
              <ListItemIcon>{ index % 2 === 0 ? <InboxIcon /> : <MailIcon /> }</ListItemIcon>
              <ListItemText primary={ text } />
            </ListItem>
          )) }
        </List>

        <Divider />

        <List>
          { [ 'All mail', 'Trash', 'Spam' ].map(( text, index ) => (
            <ListItem button key={ text }>
              <ListItemIcon>{ index % 2 === 0 ? <InboxIcon /> : <MailIcon /> }</ListItemIcon>
              <ListItemText primary={ text } />
            </ListItem>
          )) }
        </List>

      </Drawer>
    </>
  )
}

export default Header
