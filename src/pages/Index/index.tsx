import React, { useState } from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from 'react-i18next';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import InputSearchData from "../partials/InputSearchData";
import { site } from "../../configs/site-env";

const useStyles = makeStyles(( theme ) => ( {
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0),
  },
  grid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  formControl: {
    width: '100%',
  },
} ));

const Index = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [ type, setType ] = useState('');

  const handleChange = ( event: React.ChangeEvent<{ value: unknown }> ) => {
    setType(event.target.value as string);
  };

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
            <Grid item xs={ 4 }>
              <FormControl variant="outlined" className={ classes.formControl }>
                <InputLabel id="select-outlined-label">{ t('types_collection.default') }</InputLabel>
                <Select
                  labelId="select-outlined-label"
                  id="select-outlined"
                  value={ type }
                  onChange={ handleChange }
                  label={ t('types_collection.default') }
                >
                  {
                    site.types_collection.map(item => (
                      <MenuItem value={ item.value }>{ t(`types_collection.${ item.key }`) }</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={ 8 }>

              <InputSearchData />

            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  )
}

export default Index
