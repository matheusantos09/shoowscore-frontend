import React from 'react';
import { useTranslation } from 'react-i18next';

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import SearchContent from "./SearchContent";
import QuizSuggestion from "./QuizSuggestion";

const useStyles = makeStyles(( theme ) => ( {
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0),
  },
  contentGrid: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    margin: theme.spacing(2, 0),
    borderRadius: 4
  },
  grid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
} ));

const Index = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <main>
        <div className={ classes.content }>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              { t('site.name') }
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              { t('site.description') }
            </Typography>
          </Container>
        </div>
        <Container className={ classes.grid } maxWidth="md">
          <Grid container>

            <Grid xs={ 12 } className={ classes.contentGrid }>
              <SearchContent />
            </Grid>

            <Grid xs={ 12 } className={ classes.contentGrid }>
              <QuizSuggestion />
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  )
}

export default Index
