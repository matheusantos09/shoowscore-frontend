import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import history from "../../services/history";

import { OptionInterface } from "../../Interfaces/ComboBox";
import { site } from "../../configs/site-env";
import { toastError } from "../../helpers/toastCustom";

const suggestion = [
  { title: 'The Shawshank Redemption' },
  { title: 'The Godfather' },
  { title: 'The Godfather: Part II' },
  { title: 'The Dark Knight' },
  { title: '12 Angry Men' },
];

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
  const [ options, setOptions ] = useState<OptionInterface[]>(suggestion);
  const [ type, setType ] = useState<string>('');
  const [ element, setElement ] = useState<string>('');

  const handleChangeAutoComplete = ( event: any, newInputValue: string ) => {
    setElement(newInputValue);
  }

  const handleChange = ( event: React.ChangeEvent<{ value: unknown }> ) => {
    setType(event.target.value as string);
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void | boolean> => {
    event.preventDefault();

    if (type === '' || element === '') {
      toastError(t('validations.home.fields_empty'))

      return true;
    }

    history.push(`/view/${ type }/${ element }`)
  }

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
          <form action="" onSubmit={ handleSubmit }>
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

                <Autocomplete
                  freeSolo
                  disableClearable
                  // getOptionSelected={ ( option, value ) => option.title === value.title }
                  options={ options.map(( option ) => option.title) }

                  //@ts-ignore
                  onInputChange={ handleChangeAutoComplete }

                  renderInput={ ( params ) => (
                    <TextField
                      { ...params }
                      style={ { margin: 0 } }
                      label={ t('inputs.search_data') }
                      margin="normal"
                      variant="outlined"
                      InputProps={ { ...params.InputProps, type: 'search' } }
                    />
                  ) }
                />

              </Grid>
            </Grid>
          </form>
        </Container>
      </main>
    </div>
  )
}

export default Index
