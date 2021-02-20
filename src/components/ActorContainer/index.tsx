import React, { useCallback } from 'react';
import LazyLoad from 'react-lazyload';

import PlaceholderImage from '../PlaceholderImage';
import { fullPathImages } from '../../utils/fullPathImage';

import { Container } from './styles';

interface Props {
  profile_path: string;
  name: string;
  character: string;
}

const ActorContainer: React.FC<Props> = (props) => {
  const { profile_path, name, character } = props;

  const defaultImg = useCallback((elementImage, sizeDefault = '250/375'):
    | void
    | undefined => {
    // eslint-disable-next-line no-param-reassign
    elementImage.target.src = `https://picsum.photos/${sizeDefault}`;
  }, []);

  return (
    <Container>
      <LazyLoad placeholder={<PlaceholderImage />}>
        <img
          onError={(e) => defaultImg(e, '1920/1080')}
          src={fullPathImages(profile_path, 'w300')}
          alt={name}
        />
      </LazyLoad>

      <div className="infos">
        <span>{name}</span>
        <small>{character}</small>
      </div>
    </Container>
  );
};

export default ActorContainer;
