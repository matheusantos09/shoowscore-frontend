import React from "react"
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import { truncateString } from "../../helpers/truncateString";

interface AlternativesElementsItemInterface {
  Poster: string;
  Title: string;
  Plot: string;
}

interface AlternativesElementsInterface {
  elements: AlternativesElementsItemInterface[];
}

const AlternativesElements = ( { elements }: AlternativesElementsInterface ) => {
  console.log(elements)

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
        {
          elements?.map(element => (
            <Link to={ `/view/${ element.Title }` } key={ element.Title }>
              <ListItem alignItems="flex-start">

                <ListItemAvatar>
                  <Avatar alt={ element.Title } src={ element.Poster.replace('http://', 'https://') } />
                </ListItemAvatar>
                <ListItemText
                  primary={ element.Title }
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                      >
                        { element.Title }
                      </Typography>
                      { ' ' } - { truncateString(element.Plot, 100) }
                    </>
                  }
                />
              </ListItem>
            </Link>
          ))
        }
      </List>
    </>
  )
}

export default AlternativesElements
