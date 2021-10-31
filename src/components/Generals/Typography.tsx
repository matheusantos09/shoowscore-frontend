import React from 'react';
import styled from 'styled-components';

const e = React.createElement;

const Typography = styled(({ tag = 'h1', children, ...props }) =>
  e(tag, props, children),
)`
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.0075em;
  color: #fff;
  margin: 0;
  display: flex;
  align-items: center;

  a {
    color: #fff;
    text-decoration: none;
  }

  &.h1 {
    font-size: 2rem;
  }

  &.big {
    font-size: 3rem;
  }

  &.black {
    color: #000;
  }
`;

export default Typography;
