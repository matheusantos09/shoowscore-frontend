import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import SearchContent from './SearchContent';

const useStyles = makeStyles((theme) => ({
  search: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

const Index: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.search}>
        <SearchContent title inputValue="" />
      </div>
    </>
  );
};

export default Index;
