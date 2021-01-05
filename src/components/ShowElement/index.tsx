import React from 'react';
import { TYPES as TypesTMDB } from '../../configs/tmdb';

import TvShow from './TvShow';
import Movie from './Movie';

interface Props {
  type: string;
}

const ShowElement: React.FC<Props> = ({ type }) => {
  switch (type) {
    case TypesTMDB.tv_show:
      return <TvShow />;

    case TypesTMDB.movie:
      return <Movie />;

    default:
      return <div>Não encontrou</div>;
  }
};

export default ShowElement;
