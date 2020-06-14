import React, { useState } from "react"
import { useTranslation } from "react-i18next";

import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import { site } from "../../configs/site-env";
import { OptionInterface } from "../../Interfaces/ComboBox";
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
  contentGrid: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 2),
    margin: theme.spacing(2, 0),
    borderRadius: 4
  },
  grid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  formControl: {
    width: '100%',
  },
} ));

function QuizSuggestion() {
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

    // history.push(`/view/${ type }/${ element }`)
  }

  return <form action="" onSubmit={ handleSubmit }>
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
                <MenuItem key={String(item.value)} value={ item.value }>{ t(`types_collection.${ item.key }`) }</MenuItem>
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
}

export default QuizSuggestion
