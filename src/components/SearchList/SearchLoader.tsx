import React from 'react';
import ContentLoader from 'react-content-loader';

import { Container, List, Sidebar } from './styles';

const SearchLoader: React.FC = () => {
  return (
    <Container>
      <Sidebar>
        <ul>
          <li>
            <ContentLoader
              speed={2}
              width={100}
              height={15}
              viewBox="0 0 400 460"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
              style={{ width: '100%' }}
            >
              <rect x="0" y="22" rx="0" ry="0" width="173" height="15" />
              <rect x="0" y="44" rx="0" ry="0" width="173" height="15" />
            </ContentLoader>
          </li>
        </ul>
      </Sidebar>

      <List>
        <li className="type">1</li>
      </List>
    </Container>
  );
};

export default SearchLoader;
