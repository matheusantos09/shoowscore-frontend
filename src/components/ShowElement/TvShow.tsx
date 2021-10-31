import React, { useCallback, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import { addSeconds, format } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { useDispatch } from 'react-redux';
import _ from 'lodash';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';

import 'react-circular-progressbar/dist/styles.css';

import PlaceholderImage from '../PlaceholderImage';
import { fullPathImages } from '../../utils/fullPathImage';
import { convertArrayObjectsInString } from '../../utils/convertArrayObjectsInString';
import { useElementTvShowSelector } from '../../store/reducersRoot/element';

import ActorContainer from '../ActorContainer';
import RatingChart from './RatingChart';

import {
  BoxImage,
  Container,
  FirstInformation,
  TitleWrapper,
  Wrapper,
  WrapperContent,
  WrapperScore,
} from './styles';
import { formatNumber } from '../../utils/formatNumber';
import { Creators as CreatorsElement } from '../../pages/View/ducks/element';

const TvShow: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const element = useElementTvShowSelector((state) => state.element.payload);
  const voteAverage = element.vote_average;
  const casts = element.credits.cast.slice(0, 10);
  let voteAveragePercent = Math.round(voteAverage * 10);

  if (voteAveragePercent > 100) {
    voteAveragePercent = 100;
  }

  const backgroundPath = fullPathImages(element.backdrop_path, 'original');
  const posterPath = fullPathImages(element.poster_path, 'w300');
  const defaultImg = useCallback(
    (elementImage, sizeDefault = '250/375'): void | undefined => {
      // eslint-disable-next-line no-param-reassign
      elementImage.target.src = `https://picsum.photos/${sizeDefault}`;
    },
    [],
  );

  useEffect(() => {
    const lastNumberSeason = _.last(element.seasons);
    let numberSeasonMax;

    if (!lastNumberSeason) {
      numberSeasonMax = 12;
    } else {
      numberSeasonMax = lastNumberSeason.season_number;
    }

    dispatch(
      CreatorsElement.fetchEpisodesSeasonElementSaga(
        element.id,
        numberSeasonMax,
      ),
    );
  }, [dispatch, element]);

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

      <Wrapper>
        <FirstInformation>
          <LazyLoad placeholder={<PlaceholderImage />}>
            <img onError={defaultImg} src={posterPath} alt={element.name} />
          </LazyLoad>

          <div className="infos">
            <h1>{element.name}</h1>
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
        <TitleWrapper>{t('pages.view.infos.rating.title')}</TitleWrapper>

        <WrapperContent>
          <RatingChart />
        </WrapperContent>
      </Wrapper>

      <Wrapper>
        <TitleWrapper>{t('pages.view.infos.score.title')}</TitleWrapper>

        <WrapperContent>
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
              <span>{t('pages.view.infos.score.quantity')}</span>
              <span className="value">{formatNumber(element.vote_count)}</span>
            </div>
          </WrapperScore>
        </WrapperContent>
      </Wrapper>

      <Wrapper>
        <TitleWrapper>{t('pages.view.infos.actors.title')}</TitleWrapper>
        <WrapperContent>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {casts.map((item) => (
              <SwiperSlide>
                <ActorContainer
                  key={item.id}
                  profile_path={item.profile_path}
                  name={item.name}
                  character={item.character}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </WrapperContent>
      </Wrapper>

      {/*
      <Wrapper>
        <TitleWrapper>{t('pages.view.infos.videos.title')}</TitleWrapper>
        <WrapperContent>1</WrapperContent>
      </Wrapper>

      <Wrapper>
        <TitleWrapper>{t('pages.view.infos.images.title')}</TitleWrapper>
        <WrapperContent>1</WrapperContent>
      </Wrapper>

      <Wrapper>
        <pre>{JSON.stringify(element, null, 2)}</pre>
      </Wrapper>
       */}
    </Container>
  );
};

export default TvShow;
