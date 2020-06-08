import styled from "styled-components";

export const LoaderContainer = styled.div`
  position: relative;
  min-height: 500px;

  .centerBike {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: 26px;
    margin-left: -12px;
  }
  
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -50px;
  }
  
  #loop {
    height: 100px;
    width: 100px;
    border: #bb5f27 solid 4px;
    border-radius: 200px;
  }
  
  #loop:before {
    background: -moz-linear-gradient(left, rgba(187, 95, 39, 0) 0%, rgba(187, 95, 39, 1) 30%, rgba(187, 95, 39, 1) 70%, rgba(187, 95, 39, 0) 100%);
    background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(187, 95, 39, 0)), color-stop(30%, rgba(187, 95, 39, 1)), color-stop(70%, rgba(187, 95, 39, 1)), color-stop(100%, rgba(187, 95, 39, 0)));
    background: -webkit-linear-gradient(left, rgba(187, 95, 39, 0) 0%, rgba(187, 95, 39, 1) 30%, rgba(187, 95, 39, 1) 70%, rgba(187, 95, 39, 0) 100%);
    background: -o-linear-gradient(left, rgba(187, 95, 39, 0) 0%, rgba(187, 95, 39, 1) 30%, rgba(187, 95, 39, 1) 70%, rgba(187, 95, 39, 0) 100%);
    background: -ms-linear-gradient(left, rgba(187, 95, 39, 0) 0%, rgba(187, 95, 39, 1) 30%, rgba(187, 95, 39, 1) 70%, rgba(187, 95, 39, 0) 100%);
    background: linear-gradient(to right, rgba(187, 95, 39, 0) 0%, rgba(187, 95, 39, 1) 30%, rgba(187, 95, 39, 1) 70%, rgba(187, 95, 39, 0) 100%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#00bb5f27', endColorstr='#00bb5f27', GradientType=1);
    content: "";
    display: block;
    height: 4px;
    left: -100px;
    position: relative;
    top: 100px;
    width: 300px;
  }
  
  #bike-wrapper {
    height: 108px;
    width: 108px;
    animation: drive 3s linear infinite;
  }
  
  #bike {
    height: 24px;
    width: 25px;
    background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/133687/motorbike.png");
  }
  
  @keyframes drive {
    0% {
      margin-left: -364px;
      opacity: 0;
    }
    33.33% {
      transform: rotate(0deg);
      margin-left: -50px;
      opacity: 1;
    }
    66.66% {
      transform: rotate(-360deg);
      margin-left: -50px;
      opacity: 1;
    }
    100% {
      margin-left: 264px;
      transform: rotate(-360deg);
      opacity: 0;
    }
  }
`
