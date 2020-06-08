import React, { useState } from "react"
import { useTranslation } from "react-i18next";

import Grid from "@material-ui/core/Grid";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import CircularProgress from "@material-ui/core/CircularProgress";

import { OptionInterface } from "../../Interfaces/ComboBox";
import history from "../../services/history";

const suggestion = [
  { title: 'The Shawshank Redemption' },
  { title: 'The Godfather' },
  { title: 'The Godfather: Part II' },
  { title: 'The Dark Knight' },
  { title: '12 Angry Men' },
];

function SearchContent() {

  const { t } = useTranslation();
  const [ options ] = useState<OptionInterface[]>(suggestion);
  const [ element, setElement ] = useState<string>('');
  const [ loading, setLoading ] = useState<boolean>(false);

  const handleChangeAutoComplete = ( event: any, newInputValue: string ) => {
    setElement(newInputValue);
  }

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void | boolean> => {
    event.preventDefault();

    setLoading(true)

    history.push(`/view/${ element }`)
  }

  return (
    <>
      <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom>
        { t('phrase.search-content') }
      </Typography>
      <form action="" onSubmit={ handleSubmit }>
        <Grid container spacing={ 2 }>
          <Grid item xs={ 10 }>


            <Autocomplete
              // getOptionSelected={ ( option, value ) => option.title === value.title }
              options={ options.map(( option ) => option.title) }

              //@ts-ignore
              onInputChange={ handleChangeAutoComplete }

              fullWidth

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
          <Grid item xs={ 2 }>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              style={ { height: "100%" } }
              type="submit"
            >
              { loading ? <CircularProgress color="inherit" size={ 30 } /> : t('button.search') }
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}

export default SearchContent
