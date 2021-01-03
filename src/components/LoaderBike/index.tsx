import React from 'react';
import { LoaderContainer } from './styles';

const LoaderBike: React.FC = () => {
  return (
    <LoaderContainer>
      <div id="loop" className="center" />
      <div id="bike-wrapper" className="center">
        <div id="bike" className="centerBike" />
      </div>
    </LoaderContainer>
  );
};

export default LoaderBike;
