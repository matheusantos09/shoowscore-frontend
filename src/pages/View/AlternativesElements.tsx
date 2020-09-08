import React from "react"
import { useTranslation } from "react-i18next";

import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

type AlternativesElementsItemInterface = {
  elements: {
    query: string;
    results: {
      tv: {
        page: number;
        results: {
          adult: boolean;
          backdrop_path: null;
          genre_ids: [];
          id: number;
          original_language: string;
          original_title: string;
          overview: string;
          popularity: number
          poster_path: string;
          release_date: string;
          title: string;
          video: boolean;
          vote_average: number;
          vote_count: number;
        }[];
        total_pages: number;
        total_results: number;
      };
      movie: {
        page: number;
        results: {
          adult: boolean;
          backdrop_path: null;
          genre_ids: [];
          id: number;
          original_language: string;
          original_title: string;
          overview: string;
          popularity: number
          poster_path: string;
          release_date: string;
          title: string;
          video: boolean;
          vote_average: number;
          vote_count: number;
        }[];
        total_pages: number;
        total_results: number;
      }
    };
    expiresAt: string;
  }
}

const AlternativesElements = ( { elements }: AlternativesElementsItemInterface ) => {
  console.log('AlternativesElements', elements)

  const { t } = useTranslation();

  return (
    <>
      <Typography
        component="h2"
        variant="h6"
        align="center"
        color="textPrimary"
      >
        { t('pages.view.manyAlternatives.default') }
      </Typography>
      <List>
        {/*{*/ }
        {/*  Object.values(elements.results).map(element => element.results.map(item => <h1>{ item.original_title }</h1>))*/ }
        {/*}*/ }
      </List>
    </>
  )
}

export default AlternativesElements

// <Link to={ `/view/${ element.Title }` } key={ element.Title }>
//   <ListItem alignItems="flex-start">
//
//   <ListItemAvatar>
//   <Avatar alt={ element.Title } src={ element.Poster.replace('http://', 'https://') } />
// </ListItemAvatar>
// <ListItemText
// primary={ element.Title }
// secondary={
// <>
// <Typography
// component="span"
// variant="body2"
// color="textPrimary"
// >
// { element.Title }
// </Typography>
// { ' ' } - { truncateString(element.Plot, 100) }
// </>
// }
// />
// </ListItem>
// </Link>
