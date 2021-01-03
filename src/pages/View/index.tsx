import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import { Creators as CreatorsElement } from './ducks/element';

import LoaderCam from '../../components/LoaderCam';
import ErrorMessage from '../../components/Alert/ErrorMessage';

import { useElementSelector } from '../../store/reducersRoot/element';

import ShowElement from './partials/ShowElement';
import NotFoundElement from './partials/NotFoundElement';

interface UrlParams {
  id: string;
  type: string;
}

const View: React.FC = () => {
  const { id, type } = useParams<UrlParams>();
  const elementView = useElementSelector((state) => state.element);
  const [loading, setLoading] = useState<boolean>(elementView.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CreatorsElement.fetchIdElementSaga(type.concat('||').concat(id)));
  }, [dispatch, type, id]);

  useEffect(() => {
    setLoading(elementView.loading);
  }, [elementView.loading]);

  console.log(elementView);

  return (
    <>
      <div>
        {/* Loading */}
        {loading && <LoaderCam />}

        {/* Not found */}
        {!loading &&
        !elementView.error &&
        typeof elementView.element !== 'undefined' &&
        !elementView.element.length ? (
          <NotFoundElement />
        ) : null}

        {/* Content finded */}
        {!loading &&
        !elementView.error &&
        typeof elementView.element !== 'undefined' &&
        elementView.element.length ? (
          <ShowElement />
        ) : null}

        {/* Msg error */}
        {!loading && elementView.error ? (
          <ErrorMessage message={elementView.msgError} />
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default View;
