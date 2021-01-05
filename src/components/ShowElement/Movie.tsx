import React, { useCallback } from 'react';
import LazyLoad from 'react-lazyload';
import { addSeconds, format } from 'date-fns';
import { useTranslation } from 'react-i18next';

import PlaceholderImage from '../PlaceholderImage';
import { fullPathImages } from '../../utils/fullPathImage';
import { convertArrayObjectsInString } from '../../utils/convertArrayObjectsInString';
import { useElementMovieSelector } from '../../store/reducersRoot/element';

import {
  BlackSpaceHover,
  BoxImage,
  Container,
  FirstInformation,
  Wrapper,
} from './styles';

const Movie: React.FC = () => {
  const { t } = useTranslation();
  const element = useElementMovieSelector((state) => state.element.payload);

  console.log('element');
  console.log(element);

  const backgroundPath = fullPathImages('original', element.backdrop_path);
  const posterPath = fullPathImages('w300', element.poster_path);
  const defaultImg = useCallback((elementImage, sizeDefault = '250/375'):
    | void
    | undefined => {
    // eslint-disable-next-line no-param-reassign
    elementImage.target.src = `https://picsum.photos/${sizeDefault}`;
  }, []);

  return (
    <Container>
      <BoxImage>
        <LazyLoad placeholder={<PlaceholderImage />}>
          <img
            onError={(e) => defaultImg(e, '1920/1080')}
            src={backgroundPath}
            alt={element.original_title}
          />
        </LazyLoad>
      </BoxImage>

      <BlackSpaceHover />

      <Wrapper>
        <FirstInformation>
          <LazyLoad placeholder={<PlaceholderImage />}>
            <img
              onError={defaultImg}
              src={posterPath}
              alt={element.original_title}
            />
          </LazyLoad>

          <div className="infos">
            <h1>{element.original_title}</h1>
            <i>{element.tagline}</i>
            <p>{element.overview}</p>
            <div className="line">
              <span className="genres">
                <strong> {t('pages.view.infos.genres')}</strong>
                {convertArrayObjectsInString(element.genres, 'name')}
              </span>

              {element.runtime && (
                <div className="time">
                  {element.runtime >= 60 &&
                    format(
                      addSeconds(new Date(0), element.runtime),
                      'm',
                    ).concat('h')}{' '}
                  {format(addSeconds(new Date(0), element.runtime), 'ss')}m
                </div>
              )}
            </div>
          </div>
        </FirstInformation>

        <pre>{JSON.stringify(element, null, 2)}</pre>
      </Wrapper>
    </Container>
  );
};

export default Movie;
