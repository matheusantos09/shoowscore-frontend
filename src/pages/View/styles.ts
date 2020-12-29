import styled from "styled-components";

export const List = styled.ul`
  padding: 0 !important;
  max-width: calc(100% - 240px);
  width: 100%;

  ul {
    padding: 0 !important;
    margin: -20px;

    li {
      list-style: none;
    }
  }

  .type {
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
      margin-bottom: 80px;
    }

    .title {
      margin: 10px 0 20px 0;
      padding: 4px 0;
      text-align: center;
      font-size: 32px;
      font-weight: bold;
      position: relative;

      &:before {
        content: '';
        background-color: #ccc;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        height: 1px;
        width: 100%;
        left: 0;
        right: 0;
        z-index: 0;
      }

      span {
        position: relative;
        z-index: 1;
        background-color: #303030;
        padding: 0 24px;
      }
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
    }
  }
`

export const ElementView = styled.div`
  margin: 20px;
  position: relative;
  overflow: hidden;
  height: calc(100% - 40px);
  border-radius: 8px;

  &:hover {
    .box-infos {
      bottom: 0;
    }

    .box-image {
      img {
        transform: scale(0.7) translateY(-80px);
      }
    }
  }

  .coming {
    position: absolute;
    z-index: 1;
    top: 10px;
    right: 10px;
    padding: 4px 12px;
    border-radius: 12px 2px;
    background: rgb(9, 9, 121);
    background: linear-gradient(90deg, rgba(0, 0, 73, 1) 0%, rgba(9, 9, 121, 1) 68%);
    color: #FFF;
    transition: .3s ease-in-out;
    font-size: 12px;

    &:hover {
      border-radius: 8px;
    }
  }

  .box-image {
    position: relative;
    width: 250px;
    overflow: hidden;

    img {
      display: block;
      width: 100%;
      transition: .3s ease-in-out;
      border-radius: 8px;
    }
  }

  .box-infos {
    transition: .5s ease;
    position: absolute;
    bottom: -100%;
    //bottom: 0;
    padding: 15px;
    background-color: #FCFCFC;
    text-align: center;
    left: 0;
    right: 0;
    width: 100%;
    color: #000;
    border-radius: 8px;
    box-shadow: 0 5px 10px 7px #252525;

    strong {
      font-size: 18px;
    }

    p {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;

      &:empty {
        display: none;
      }
    }
  }
`

export const Sidebar = styled.ul`
  padding: 0;
  width: 200px;
  margin-right: 40px;

  li {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`
