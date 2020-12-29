import React, {useState} from "react"
import {useTranslation} from "react-i18next";
import {Redirect} from "react-router";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import CircularProgress from "@material-ui/core/CircularProgress";

import {OptionInterface} from "../../Interfaces/ComboBox";
import {toastError} from "../../helpers/toastCustom";

import {Form} from './styles'

const suggestion = [
  {title: 'How i met your mother'},
  {title: 'Breaking Bad'},
  {title: 'Avatar'},
  {title: 'Matrix'},
];

const SearchContent: React.FC = () => {
  const {t} = useTranslation();
  const [options] = useState<OptionInterface[]>(suggestion);
  const [element, setElement] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [redirect, setRedirect] = useState<boolean>(false);

  const handleChangeAutoComplete = (event: any, newInputValue: string): any => {
    setElement(newInputValue);
  }

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();
    setLoading(true);

    if (element === '') {
      setLoading(false);

      toastError(t('pages.index.validation.fill-search'));

      return;
    }

    setRedirect(true);
  }

  if (redirect) {
    return <Redirect to={`/view/${element}`} />
  }

  return (
    <>
      <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom>
        {t('phrase.search-content')}
      </Typography>
      <Form onSubmit={handleSubmit}>

        <Autocomplete
          // getOptionSelected={ ( option, value ) => option.title === value.title }
          options={options.map((option) => option.title)}
          onInputChange={handleChangeAutoComplete}
          fullWidth
          freeSolo
          renderInput={(params) => (
            <TextField
              {...params}
              style={{margin: 0}}
              label={t('inputs.search_data')}
              margin="normal"
              variant="outlined"
              InputProps={{...params.InputProps, type: 'search'}}
            />
          )}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
        >
          {loading ? <CircularProgress color="inherit" size={30} /> : t('button.search')}
        </Button>
      </Form>
    </>
  )
}

export default SearchContent
