import styled from 'styled-components';

export const Container = styled.div`
  .title {
    text-align: center;
    margin: 12px 0;
    display: block;
    font-size: 40px;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
    position: relative;

    input {
      display: flex;
      width: 100%;
      padding: 12px 85px 12px 24px;
      color: black;
      border-radius: 2px;
      border: 1px solid #666;
    }

    button {
      background: transparent;
      border: 0;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 80px;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      svg {
        font-size: 24px;
        color: #000;
      }
    }

    input,
    button {
      height: 40px;
    }
  }
`;
