import React, {useEffect, useState} from "react";
import _ from 'lodash'

import {useDispatch} from "react-redux";
import {useHistory, useParams} from "react-router";

import {Creators as CreatorsElement} from './ducks/element'

import LoaderCam from "../../components/LoaderCam";
import ErrorMessage from "../../components/Alert/ErrorMessage";

import {useElementSelector} from "../../store/reducersRoot/element";

import ShowElement from "./partials/ShowElement";
import NotFoundElement from "./partials/NotFoundElement";

interface UrlParams {
  elementName: string;
}

const View: React.FC = () => {
  let {elementName} = useParams<UrlParams>();
  elementName = decodeURIComponent(elementName);

  const elementView = useElementSelector(state => state.element)
  const [loading, setLoading] = useState<boolean>(elementView.loading)
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(CreatorsElement.fetchElementSaga(elementName))
  }, [dispatch, elementName]);

  useEffect(() => {
    setLoading(elementView.loading)
  }, [elementView.loading]);

  if (!loading && !elementView.error && !_.isEmpty(elementView.alternativesElements.results)) {
    history.push(`/search/${encodeURIComponent(elementName)}`);
  }

  return (
    <>
      <div>
        {/* Loading */}
        {loading && <LoaderCam />}

        {/* Not found */}
        {(!loading && !elementView.error && _.isEmpty(elementView.alternativesElements) && typeof elementView.element !== 'undefined' && !elementView.element.length) ?
          <NotFoundElement /> : null}

        {/* Content finded */}
        {(!loading && !elementView.error && _.isEmpty(elementView.alternativesElements) && typeof elementView.element !== 'undefined' && elementView.element.length) ?
          <ShowElement /> : null}

        {/* Msg error */}
        {(!loading && elementView.error) ? <ErrorMessage message={elementView.msgError} /> : ''}
      </div>
    </>
  )
}

export default View
