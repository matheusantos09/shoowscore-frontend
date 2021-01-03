import React from 'react'
import {useParams} from "react-router";
import Typography from "@material-ui/core/Typography";
import {useTranslation} from "react-i18next";

import SearchContent from "../Index/SearchContent";
import SearchWrapper from "./SearchWrapper";

interface UrlParams {
  elementName: string;
}

const Search: React.FC = () => {
  let {elementName} = useParams<UrlParams>();
  elementName = decodeURIComponent(elementName);

  const {t} = useTranslation();

  return (
    <>
      <Typography component="h2" variant="h5" align="center" color="textPrimary">
        {t('pages.view.manyAlternatives.default')}
      </Typography>

      <SearchContent title={false} inputValue={elementName} />

      <SearchWrapper />
    </>
  )
}

export default Search
