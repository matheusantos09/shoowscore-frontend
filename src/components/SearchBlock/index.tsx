import React, { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BounceLoader } from 'react-spinners';
import { useHistory } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';

import Typography from '../Generals/Typography';

import { toastError } from '../../utils/toastCustom';
import { urlWithLang } from '../../utils/urlWithLang';
import { Container } from './styles';

interface Props {
  title: boolean;
  inputValue: string;
}

const SearchBlock: React.FC<Props> = ({ title = true, inputValue = '' }) => {
  const { t } = useTranslation();
  const [element, setElement] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
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

      history.push(urlWithLang(`/search/${element}`));
    },
    [history, element, t],
  );

  return (
    <Container>
      {title ? (
        <Typography className="big title">
          {t('phrase.search-content')}
        </Typography>
      ) : null}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChangeAutoComplete}
          placeholder={t('inputs.search_data')}
          defaultValue={inputValue}
        />

        <button type="submit">
          {loading ? <BounceLoader size={30} /> : <BiSearch />}
        </button>
      </form>
    </Container>
  );
};

export default SearchBlock;
