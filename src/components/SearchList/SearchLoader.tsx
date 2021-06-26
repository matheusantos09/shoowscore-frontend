import React from 'react';
import ContentLoader from 'react-content-loader';

import { Container, Sidebar } from './styles';

const SearchLoader: React.FC = () => {
  return (
    <Container>
      <Sidebar>
        <ul>
          <li>
            <ContentLoader
              speed={2}
              width={400}
              height={160}
              viewBox="0 0 400 160"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
            >
              <rect x="0" y="22" rx="0" ry="0" width="173" height="15" />
              <rect x="0" y="44" rx="0" ry="0" width="173" height="15" />
            </ContentLoader>
          </li>
        </ul>
      </Sidebar>
    </Container>
  );
};

export default SearchLoader;
