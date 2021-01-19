import React, { useCallback } from 'react';
import LazyLoad from 'react-lazyload';
import { addSeconds, format } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import PlaceholderImage from '../PlaceholderImage';
import { fullPathImages } from '../../utils/fullPathImage';
import { convertArrayObjectsInString } from '../../utils/convertArrayObjectsInString';
import { useElementMovieSelector } from '../../store/reducersRoot/element';

import {
  BoxImage,
  Container,
  FirstInformation,
  TitleWrapper,
  Wrapper,
  WrapperScore,
} from './styles';
import { formatNumber } from '../../utils/formatNumber';

const Movie: React.FC = () => {
  const { t } = useTranslation();
  const element = useElementMovieSelector((state) => state.element.payload);

  console.log('element');
  console.log(element);

  const voteAverage = element.vote_average;

  let voteAveragePercent = Math.round(voteAverage * 10);

  if (voteAveragePercent > 100) {
    voteAveragePercent = 100;
  }

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
            alt={element.title}
          />
        </LazyLoad>
      </BoxImage>

      {/* <BlackSpaceHover /> */}

      <Wrapper>
        <FirstInformation>
          <LazyLoad placeholder={<PlaceholderImage />}>
            <img onError={defaultImg} src={posterPath} alt={element.title} />
          </LazyLoad>

          <div className="infos">
            <h1>{element.title}</h1>
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
      </Wrapper>

      <Wrapper>
        <TitleWrapper>Notas</TitleWrapper>

        <WrapperScore>
          <CircularProgressbar
            value={voteAveragePercent}
            text={`${voteAveragePercent}%`}
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: '#3e98c7',
              textColor: '#fff',
              pathColor: '#fff',
              trailColor: 'transparent',
            })}
          />

          <div className="info">
            <span>Quantidade de votos</span>
            <span className="value">{formatNumber(element.vote_count)}</span>
          </div>
        </WrapperScore>
      </Wrapper>

      <Wrapper>
        <TitleWrapper>Atores</TitleWrapper>
      </Wrapper>

      <Wrapper>
        <TitleWrapper>Vídeos</TitleWrapper>
      </Wrapper>

      <Wrapper>
        <TitleWrapper>Capas</TitleWrapper>
      </Wrapper>

      <Wrapper>
        <pre>{JSON.stringify(element, null, 2)}</pre>
      </Wrapper>
    </Container>
  );
};

export default Movie;
