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

export const Wrapper = styled.div`
  padding: 30px;
  border-radius: 6px;
  background-color: rgba(48, 48, 48, 0.95);

  &:not(:first-child) {
    margin-top: 80px;
  }
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
    width: 250px;
    height: 375px;
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

        &:not(last-child) {
          margin-right: 8px;
        }
      }
    }
  }

  .infos {
    max-width: calc(100% - 280px);

    h1 {
      line-height: 1;
      margin: 0 0 10px 0;
    }

    i {
      font-size: 13px;
      margin: 0 0 20px 0;
    }

    strong {
      margin-right: 8px;
    }
  }
`;

export const TitleWrapper = styled.p`
  font-size: 30px;
  text-align: center;
  margin: 0 0 30px 0;
  font-weight: 500;
`

export const WrapperContent = styled.div`
  display: block;
`

export const WrapperScore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 40px;
    max-width: 120px;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-size: 16px;

      &.value {
        font-size: 28px;
        font-weight: 500;
      }
    }
  }
`
