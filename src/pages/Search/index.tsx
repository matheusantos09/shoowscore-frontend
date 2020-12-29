import React, {useEffect} from 'react'
import _ from "lodash";
import {useDispatch} from "react-redux";
import {useHistory, useParams} from "react-router";

import AlternativesElements from "../View/AlternativesElements";
import {useElementSelector} from "../../store/reducersRoot/element";
import NotFoundElement from "../View/partials/NotFoundElement";
import {Creators as CreatorsElement} from "../View/ducks/element";

interface UrlParams {
  elementName: string;
}

const Search: React.FC = () => {
  let {elementName} = useParams<UrlParams>();
  elementName = decodeURIComponent(elementName);

  const elementView = useElementSelector(state => state.element);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CreatorsElement.fetchElementSaga(elementName))
  }, [dispatch, elementName]);

  return (
    <>
      {/* @ts-ignore */}
      {!_.isEmpty(elementView.alternativesElements.results[0]) ?
        // @ts-ignore
        <AlternativesElements payload={elementView.alternativesElements} /> : null}

      {/* Not found */}
      {/* @ts-ignore */}
      {_.isEmpty(elementView.alternativesElements[0]) ?
        <NotFoundElement /> : null}
    </>
  )
}

export default Search
