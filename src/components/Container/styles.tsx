import styled from 'styled-components';

export const ContainerMain = styled.div`
  height: 100%;
`;

export const Content = styled.main`
  flex-grow: 1;
  padding: 0 14px;
  margin: 64px auto 0 auto;
  max-width: 1336px;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 64px);
`;
