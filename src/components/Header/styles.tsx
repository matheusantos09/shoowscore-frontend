import styled from 'styled-components';

export const FloatBar = styled.div`
  min-height: var(--height-header-float);
  z-index: 1;
  transition: 0.3s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
`;

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const SelectorLanguageItemSelect = styled.div`
  box-shadow: 0 0 3px 2px #656565;
  display: flex;
  border-radius: 50%;

  img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

export const SelectorLanguageFloat = styled.div`
  position: absolute;
  top: 100%;
  padding: 8px 12px;
  margin-top: 10px;
  border-radius: 4px;
  left: 50%;
  transform: translate(-50%, -20px);
  background-color: #fff;
  box-shadow: 0 0 2px 0 #656565;
  transition: 0.3s ease-in-out;
  opacity: 0;
  visibility: hidden;
`;

export const SelectorLanguageItem = styled.button`
  display: flex;
  background: transparent;
  border: 0;
  margin: 0;
  padding: 0;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &.selected {
    border: 1px solid blue;
    border-radius: 50%;
  }

  &:hover {
    transform: scale(1.2);
  }

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  img {
    width: 30px;
    border-radius: 50%;
  }
`;

export const SelectorLanguage = styled.div`
  position: relative;
  min-width: 40px;
  height: 40px;
  padding: 0 12px;

  &:hover ${SelectorLanguageFloat} {
    transform: translate(-50%, 0);
    opacity: 1;
    visibility: visible;
  }
`;
