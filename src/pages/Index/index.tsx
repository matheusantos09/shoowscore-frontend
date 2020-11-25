import React from 'react';

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

import SearchContent from "./SearchContent";

const useStyles = makeStyles((theme) => ({
  contentGrid: {
    padding: theme.spacing(0, 4),
    // margin: theme.spacing(2, 0),
    borderRadius: 4
  },
  grid: {
    width: '100%',
    padding: theme.spacing(2, 0)
  },
  main: {
    backgroundColor: theme.palette.background.paper,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    minHeight: 'calc(100vh - 64px)'
  }
}));

const Index: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.main}>
        <Container className={classes.grid}>
          <Grid>

            <Grid item className={classes.contentGrid}>
              <SearchContent />
            </Grid>

          </Grid>
        </Container>
      </div>
    </>
  )
}

export default Index
