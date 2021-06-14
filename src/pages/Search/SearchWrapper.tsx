import React, { useEffect } from 'react';
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import { Creators as CreatorsSearch } from './ducks/search';

import SearchList from '../../components/SearchList';
import NotFoundSearch from '../../components/NotFoundSearch';
import { useSearchSelector } from '../../store/reducersRoot/search';
import SearchLoader from '../../components/SearchList/SearchLoader';

interface UrlParams {
  elementName: string;
}

const SearchWrapper: React.FC = () => {
  let { elementName } = useParams<UrlParams>();
  elementName = decodeURIComponent(elementName);

  const searchView = useSearchSelector((state) => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CreatorsSearch.fetchSearchSaga(elementName));
  }, [dispatch, elementName]);

  console.log(searchView);

  searchView.loading = true;

  return (
    <>
      {!searchView.loading ? (
        <>
          {!_.isEmpty(searchView.payload) ? <SearchList /> : null}
          {_.isEmpty(searchView.payload) ? <NotFoundSearch /> : null}
        </>
      ) : (
        <SearchLoader />
      )}
    </>
  );
};

export default SearchWrapper;
