import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { isAfter, parseISO } from 'date-fns';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import slugify from 'slugify';

import { Container, ElementView, List, Sidebar } from './styles';
import { fullPathImages } from '../../utils/fullPathImage';
import PlaceholderImage from '../PlaceholderImage';
import { useSearchSelector } from '../../store/reducersRoot/search';
import { urlWithLang } from '../../utils/urlWithLang';
import Typography from '../Generals/Typography';
import { generateRandomImage } from '../../utils/generate-random-image';

const SearchList: React.FC = (): any => {
  const defaultImg = useCallback((elementImage): void => {
    // eslint-disable-next-line no-param-reassign
    elementImage.target.src = generateRandomImage();
  }, []);
  const { t } = useTranslation();
  const search = useSearchSelector((state) => state.search);

  console.log('SearchList');
  console.log(search);

  return (
    <>
      <Container>
        <Sidebar>
          <Typography component="h5" className="title">
            {t('types_collection.title_filter')}
          </Typography>

          <ul>
            {search.payload.payload.results.map((typeElement) => {
              const numberElements = search.payload.payload.total_results;

              return numberElements ? (
                <li key={typeElement.type}>
                  <LinkScroll
                    to={typeElement.type}
                    spy
                    smooth
                    offset={-100}
                    duration={600}
                  >
                    {t(`types_collection.${typeElement.type}`)}{' '}
                    <span>{numberElements}</span>
                  </LinkScroll>
                </li>
              ) : (
                ''
              );
            })}
          </ul>
        </Sidebar>
        <List>
          {search.payload.payload.results.map((typeElement) => (
            <>
              {Object.values(typeElement.results).length ? (
                <li
                  className="type"
                  key={typeElement.type}
                  id={typeElement.type}
                >
                  <div className="title">
                    <span>{t(`types_collection.${typeElement.type}`)}</span>
                  </div>
                  <ul>
                    {typeElement.results.map((item) => {
                      const imagePath = fullPathImages(
                        item.poster_path,
                        'w300',
                      );
                      const elementName = item.name ?? item.title;

                      let tagComingSoon = false;

                      if (isAfter(parseISO(item.release_date), new Date())) {
                        tagComingSoon = true;
                      }

                      return (
                        <li key={String(item.id)}>
                          <Link
                            to={urlWithLang(
                              `/view/${typeElement.type}/${item.id}/${slugify(
                                elementName ?? '',
                                {
                                  lower: true,
                                  remove: /[*+~.()'"!:@]/g,
                                },
                              )}`,
                            )}
                          >
                            <ElementView>
                              {tagComingSoon && (
                                <span className="coming">
                                  {t('tags.coming_soon')}
                                </span>
                              )}

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
                      );
                    })}
                  </ul>
                </li>
              ) : (
                ''
              )}
            </>
          ))}
        </List>
      </Container>
    </>
  );
};

export default SearchList;
