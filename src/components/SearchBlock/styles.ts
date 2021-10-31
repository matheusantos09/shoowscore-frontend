import styled from 'styled-components';

export const Container = styled.div`
  form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;

    input {
      display: flex;
      width: calc(100% - 100px);
      padding: 12px 24px;
      color: black;
      border-radius: 2px;
      border: 1px solid #666;
    }

    button {
      width: 80px;
      display: block;
      max-width: 200px;
      height: 56px;
    }

    input,
    button {
      height: 40px;
    }
  }
`;
