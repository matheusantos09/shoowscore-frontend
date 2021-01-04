import React, { useEffect } from 'react';
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import { useElementSelector } from '../../store/reducersRoot/element';
import { Creators as CreatorsElement } from '../View/ducks/element';

import AlternativesElements from '../../components/AlternativeElements';
import NotFoundSearch from '../../components/NotFoundSearch';

interface UrlParams {
  elementName: string;
}

const SearchWrapper: React.FC = () => {
  let { elementName } = useParams<UrlParams>();
  elementName = decodeURIComponent(elementName);

  const elementView = useElementSelector((state) => state.element);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CreatorsElement.fetchElementSaga(elementName));
  }, [dispatch, elementName]);

  return (
    <>
      {!_.isEmpty(elementView.alternativesElements.results) ? (
        // @ts-ignore
        <AlternativesElements payload={elementView.alternativesElements} />
      ) : null}

      {/* Not found */}
      {_.isEmpty(elementView.alternativesElements.results) ? (
        <NotFoundSearch />
      ) : null}
    </>
  );
};

export default SearchWrapper;
