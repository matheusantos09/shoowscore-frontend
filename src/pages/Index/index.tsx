import React from 'react';
import SearchBlock from '../../components/SearchBlock';

import { Container } from './styles';
import { ContainerContent } from '../../components/Container/styles';

const Index: React.FC = () => {
  return (
    <Container>
      <div className="section-search">
        <ContainerContent>
          <SearchBlock title inputValue="" />
        </ContainerContent>
      </div>
    </Container>
  );
};

export default Index;
