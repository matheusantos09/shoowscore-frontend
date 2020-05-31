import React from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import InputSearchData from "../partials/InputSearchData";
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(( theme ) => ( {
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0),
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
    <div>
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
          <Grid container spacing={ 4 }>
            <Grid item xs={ 12 }>

              <InputSearchData />

            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  )
}

export default Index
