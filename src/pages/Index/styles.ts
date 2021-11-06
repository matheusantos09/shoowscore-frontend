import styled from 'styled-components';

import backgroundSearch from '../../assets/images/background-search.jpg';

export const Container = styled.div`
  .section-search {
    position: relative;
    overflow: hidden;

    &:before {
      content: '';
      background: url(${backgroundSearch});
      display: block;
      position: absolute;
      width: 1920px;
      height: 789px;
      animation: linear 120s slide infinite;
    }
  }

  @keyframes slide {
    0% {
      transform: translateX(-4%);
    }

    50% {
      transform: translateX(-29%);
    }

    100% {
      transform: translateX(-4%);
    }
  }
`
