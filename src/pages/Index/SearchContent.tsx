import React, { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import { toastError } from '../../helpers/toastCustom';

import { Form } from './styles';

// const suggestion = [{title: '', id: 0}];

interface Props {
  title?: boolean;
  inputValue?: string;
}

const SearchContent: React.FC<Props> = ({ title = true, inputValue = '' }) => {
  const { t } = useTranslation();
  // const [options, setOptions] = useState<OptionInterface[]>(suggestion);
  const [element, setElement] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  // const [redirect, setRedirect] = useState<boolean>(false);
  const refTextField = useRef(null);
  const history = useHistory();

  const handleChangeAutoComplete = useCallback((event: any): any => {
    setElement(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      setLoading(true);

      if (
        element === '' &&
        // @ts-ignore
        refTextField.current?.querySelector('input').value !== ''
      ) {
        setLoading(false);

        toastError(t('pages.index.validation.fill-search'));

        return;
      }

      setLoading(false);

      history.push(`/search/${element}`);
    },
    [history, element, t],
  );

  // if (redirect) {
  //   return <Redirect to={`/view/${element}`} />
  // }

  return (
    <>
      {title ? (
        <Typography
          component="h2"
          variant="h3"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {t('phrase.search-content')}
        </Typography>
      ) : (
        ''
      )}

      <Form onSubmit={handleSubmit}>
        {/* <Autocomplete */}
        {/*   // getOptionSelected={ ( option, value ) => option.title === value.title } */}
        {/*   // options={options.map((option) => option.title)} */}
        {/*   options={[]} */}
        {/*   onInputChange={handleChangeAutoComplete} */}
        {/*   fullWidth */}
        {/*   // freeSolo */}
        {/*   defaultValue={inputValue} */}
        {/*   renderInput={(params) => ( */}
        {/*     <TextField */}
        {/*       {...params} */}
        {/*       style={{margin: 0}} */}
        {/*       label={t('inputs.search_data')} */}
        {/*       margin="normal" */}
        {/*       variant="outlined" */}
        {/*       InputProps={{...params.InputProps, type: 'search'}} */}
        {/*     /> */}
        {/*   )} */}
        {/*  /> */}

        <TextField
          ref={refTextField}
          onChange={handleChangeAutoComplete}
          style={{ margin: 0 }}
          label={t('inputs.search_data')}
          margin="normal"
          variant="outlined"
          defaultValue={inputValue}
          fullWidth
        />

        <Button variant="contained" color="primary" type="submit">
          {loading ? (
            <CircularProgress color="inherit" size={30} />
          ) : (
            t('button.search')
          )}
        </Button>
      </Form>
    </>
  );
};

export default SearchContent;
