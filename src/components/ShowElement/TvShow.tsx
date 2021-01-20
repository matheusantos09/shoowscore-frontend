// @ts-nocheck

import React, { useCallback } from 'react';
import LazyLoad from 'react-lazyload';
import { addSeconds, format } from 'date-fns';
import { useTranslation } from 'react-i18next';

import PlaceholderImage from '../PlaceholderImage';
import { fullPathImages } from '../../utils/fullPathImage';
import { convertArrayObjectsInString } from '../../utils/convertArrayObjectsInString';
import { useElementSelector } from '../../store/reducersRoot/element';

import {
  BlackSpaceHover,
  BoxImage,
  Container,
  FirstInformation,
  Wrapper,
} from './styles';

const TvShow: React.FC = () => {
  const { t } = useTranslation();
  const element = useElementSelector((state) => state.element);

  const backgroundPath = fullPathImages(element.backdrop_path, 'original');
  const posterPath = fullPathImages(element.poster_path, 'w300');
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
            alt={element.name}
          />
        </LazyLoad>
      </BoxImage>

      <BlackSpaceHover />

      <Wrapper>
        <FirstInformation>
          <LazyLoad placeholder={<PlaceholderImage />}>
            <img onError={defaultImg} src={posterPath} alt={element.name} />

            {element.networks && (
              <div className="networks-image">
                {element.networks.map((network) => (
                  <img
                    onError={(e) => defaultImg(e, '45/45')}
                    src={fullPathImages(network.logo_path, 'w45')}
                    alt={`${network.name} - ${network.origin_country}`}
                  />
                ))}
              </div>
            )}
          </LazyLoad>

          <div className="infos">
            <h1>
              {element.typeResource === 'movie'
                ? element.original_title
                : element.name}
            </h1>
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
                    ).concat('h')}
                  {format(addSeconds(new Date(0), element.runtime), 'ss')}
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

export default TvShow;
