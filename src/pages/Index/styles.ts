import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 20px;

  //.MuiAutocomplete-hasClearIcon {
  .MuiInputBase-formControl {
    max-width: calc(100% - 20px);
  }

  button[type='submit'] {
    max-width: 200px;
    height: 56px;
    width: 100%;
  }
`;
