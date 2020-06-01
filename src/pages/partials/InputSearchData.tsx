import fetch from 'cross-fetch';
import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { OptionInterface } from "../../Interfaces/ComboBox";
import { useTranslation } from "react-i18next";

function sleep( delay = 0 ) {
  return new Promise(( resolve ) => {
    setTimeout(resolve, delay);
  });
}

export default function InputSearchData() {
  const [ open, setOpen ] = useState(false);
  const [ options, setOptions ] = useState<OptionInterface[]>([]);
  const loading = open && options.length === 0;
  const { t } = useTranslation()

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    ( async () => {
      const response = await fetch('https://country.register.gov.uk/records.json?page-size=5000');
      await sleep(1e3); // For demo purposes.
      const countries = await response.json();

      if (active) {
        setOptions(Object.keys(countries).map(( key ) => countries[key].item[0]) as OptionInterface[]);
      }
    } )();

    return () => {
      active = false;
    };
  }, [ loading ]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [ open ]);

  return (
    <Autocomplete
      open={ open }
      onOpen={ () => {
        setOpen(true);
      } }
      onClose={ () => {
        setOpen(false);
      } }
      getOptionSelected={ ( option, value ) => option.name === value.name }
      getOptionLabel={ ( option ) => option.name }
      options={ options }
      loading={ loading }
      renderInput={ ( params ) => (
        <TextField
          { ...params }
          label={ t('inputs.search_data') }
          variant="outlined"
          InputProps={ {
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                { loading ? <CircularProgress color="inherit" size={ 20 } /> : null }
                { params.InputProps.endAdornment }
              </React.Fragment>
            ),
          } }
        />
      ) }
    />
  );
}
