import React, { useEffect, useState } from "react";
import _ from 'lodash'

import { useDispatch } from "react-redux";
import Container from "@material-ui/core/Container";
import { useParams } from "react-router";

import { Creators as CreatorsElement } from './ducks/element'

import LoaderCam from "../../components/LoaderCam";
import { useElementSelector } from "../../store/reducersRoot/element";
import AlternativesElements from "./AlternativesElements";
import NotFoundElement from "./partials/NotFoundElement";
import ShowElement from "./partials/ShowElement";
import ErrorMessage from "../../components/Alert/ErrorMessage";

const View = () => {

  let { elementName } = useParams();
  elementName = decodeURIComponent(elementName);

  const element = useElementSelector(state => state.element)
  const [ loading, setLoading ] = useState<boolean>(element.loading)
  const dispatch = useDispatch();

  console.log('elementelementelementelement',element);


  useEffect(() => {
    dispatch(CreatorsElement.fetchElementSaga(elementName))
  }, [ dispatch, elementName ])

  useEffect(() => {
    setLoading(element.loading)
  }, [ element.loading ])

  return (
    <>
      <div>
        <main>
          <Container maxWidth="sm">

            {/*Loading*/ }
            { loading && <LoaderCam /> }

            {/*Alternative Content*/ }
            { ( !loading && !_.isEmpty(element.alternativesElements) ) ? <AlternativesElements elements={ element.alternativesElements } /> : null }

            {/*Not found*/ }
            { ( !loading && _.isEmpty(element.alternativesElements) && !element.element.length ) ? <NotFoundElement /> : null }

            {/*Content finded*/ }
            { ( !loading && _.isEmpty(element.alternativesElements) && element.element.length ) ? <ShowElement /> : null }

            {/*Msg error*/ }
            { element.msgError ? <ErrorMessage message={ element.msgError } /> : '' }

          </Container>
        </main>
      </div>
    </>
  )
}

export default View
