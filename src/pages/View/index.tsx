import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import Container from "@material-ui/core/Container";
import { useParams } from "react-router";

import { Creators as CreatorsElement } from './ducks/element'

import LoaderCam from "../../components/LoaderCam";
import { useElementSelector } from "../../store/reducersRoot/element";
import AlternativesElements from "./AlternativesElements";

const View = () => {

  let { elementName } = useParams();
  elementName = decodeURIComponent(elementName);

  const element = useElementSelector(state => state.element)

  console.log('element', element)

  const [ loading, setLoading ] = useState<boolean>(element.loading)
  const [ content, setContent ] = useState(element.content);
  const [ alternativesElements, setAlternativesElements ] = useState(element.alternativesElements);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CreatorsElement.fetchElementSaga(elementName))
  }, [ dispatch, elementName ])

  useEffect(() => {
    setLoading(element.loading)
  }, [ element.loading ])

  // console.log('alternativesElements', alternativesElements);
  // console.log('content', content);

  return (
    <>
      <div>
        <main>
          <Container maxWidth="sm">

            { loading ? <LoaderCam /> : (
              element.alternativesElements.length
                ? <AlternativesElements elements={element.alternativesElements} />
                : (
                  <h1>Carregadoooooooooooooooooooooooooooo</h1>
                )
            ) }

          </Container>
        </main>
      </div>
    </>
  )
}

export default View
