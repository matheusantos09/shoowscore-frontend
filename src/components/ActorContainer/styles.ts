import styled from "styled-components";

export const Container = styled.div`
  max-width: 200px;
  margin: 0 auto;

  img {
    max-width: 100%;
    width: auto;
    border-radius: 8px 8px 0 0;
  }

  .infos {
    //margin-top: 10px;
    text-align: center;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #272727;
    border-radius: 0 0 8px 8px;
    padding: 4px 0;

    span {
    }

    small {
      margin-top: 2px;
    }
  }
`
