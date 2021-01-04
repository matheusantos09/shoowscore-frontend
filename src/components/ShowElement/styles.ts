import styled from "styled-components";

export const Container = styled.section``;

export const BoxImage = styled.div`
  position: absolute;
  z-index: -1;
  left: 50%;
  top: 0;
  right: 0;
  transform: translateX(-50%);
  width: 100vw;
  max-width: calc(1920px - 16px);

  img {
    max-width: 100%;
    width: auto;
    display: block;
  }
`;

export const BlackSpaceHover = styled.div`
  height: 200px;
  transition: 0.3s ease-in-out;

  &:hover {
    height: 400px;
  }
`;

export const Wrapper = styled.div`
  padding: 30px 20px;
  border-radius: 4px;
  background-color: #303030;
`;

export const FirstInformation = styled.div`
  display: flex;
  width: 100%;

  .line {
    display: flex;
    justify-content: space-between;
  }

  .lazyload-wrapper {
    margin-right: 30px;
    max-width: 250px;
    min-height: 375px;
    position: relative;

    img {
      width: 100%;
      display: block;
    }

    .networks-image {
      position: absolute;
      bottom: 5px;
      left: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: auto;

        &:not(last-child){
          margin-right: 8px;
        }
      }
    }
  }

  .infos {

    h1 {
      line-height: 1;
      margin: 0 0 20px 0;
    }

    strong {
      margin-right: 8px;
    }
  }
`;
