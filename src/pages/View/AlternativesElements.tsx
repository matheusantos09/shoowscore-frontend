import React, {useCallback} from "react"
import {useTranslation} from "react-i18next";
import Typography from '@material-ui/core/Typography';
import {isAfter, parseISO} from 'date-fns';
import LazyLoad from 'react-lazyload';
import {Link} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll';

import {Container, ElementView, List, Sidebar} from "./styles";
import {full_path_images} from "../../configs/tmdb_images";
import PlaceholderImage from "../../components/PlaceholderImage";

export interface AlternativesElementsItemInterface {
  payload: {
    results: {
      type: string;
      results: {
        title?: string;
        name?: string;
        adult: boolean;
        backdrop_path?: null;
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number
        poster_path: string;
        release_date: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
      }[]
    }[];
  }
}

const AlternativesElements: React.FC<AlternativesElementsItemInterface> = ({payload}): any => {
  const defaultImg = useCallback((elementImage): void => {
    // eslint-disable-next-line no-param-reassign
    elementImage.target.src = 'https://picsum.photos/250/375'
  }, []);
  const {t} = useTranslation();

  return (
    <>
      <Container>
        <Sidebar>
          <Typography
            component="h5"
            className="title"
          >
            {t('types_collection.title_filter')}
          </Typography>

          <ul>
            {payload.results.map(typeElement => {
              const numberElements = Object.values(typeElement.results).length;

              return numberElements ?
                (
                  <li key={typeElement.type}>
                    <LinkScroll to={typeElement.type} spy smooth offset={-100} duration={600}>
                      {t(`types_collection.${typeElement.type}`)} <span>{numberElements}</span>
                    </LinkScroll>
                  </li>
                )
                : ''
            })}
          </ul>
        </Sidebar>
        <List>
          {
            payload.results.map(typeElement => (
              <>
                {
                  Object.values(typeElement.results).length ? (
                    <li className="type" key={typeElement.type} id={typeElement.type}>
                      <div className="title">
                        <span>{t(`types_collection.${typeElement.type}`)}</span>
                      </div>
                      <ul>
                        {Object.values(typeElement.results).map(item => {

                          const imagePath = full_path_images('w300', item.poster_path);
                          const elementName = item.name ? item.name : item.title;

                          let tagComingSoon = false;

                          if (isAfter(parseISO(item.release_date), new Date())) {
                            tagComingSoon = true;
                          }

                          return (
                            <li key={String(item.id)}>
                              <Link to={`/view/${typeElement.type}/${item.id}`}>
                                <ElementView>

                                  {tagComingSoon && <span className="coming">{t('tags.coming_soon')}</span>}

                                  <div className="box-image">
                                    <LazyLoad placeholder={<PlaceholderImage />}>
                                      <img
                                        onError={defaultImg}
                                        src={imagePath}
                                        alt={elementName}
                                      />
                                    </LazyLoad>
                                  </div>
                                  <div className="box-infos">
                                    <strong>{elementName}</strong>
                                    <p>{item.overview}</p>
                                  </div>
                                </ElementView>
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </li>
                  ) : ''
                }
              </>
            ))
          }
        </List>
      </Container>
    </>
  )
}

export default AlternativesElements
