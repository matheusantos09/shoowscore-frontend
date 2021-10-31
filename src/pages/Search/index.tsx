import React from 'react';
import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';

import SearchBlock from '../../components/SearchBlock';
import Typography from '../../components/Generals/Typography';
import SearchWrapper from './SearchWrapper';

interface UrlParams {
  elementName: string;
}

const Search: React.FC = () => {
  let { elementName } = useParams<UrlParams>();
  elementName = decodeURIComponent(elementName);

  const { t } = useTranslation();

  return (
    <>
      <Typography className="h5">
        {t('pages.search.manyAlternatives.default')}
      </Typography>

      <SearchBlock title={false} inputValue={elementName} />

      <SearchWrapper />
    </>
  );
};

export default Search;
