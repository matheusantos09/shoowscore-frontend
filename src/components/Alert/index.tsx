import React from 'react';
import { Container } from './styles';

type Props = {
  message: string;
  level: string;
};

const Alert: React.FC<Props> = ({ message, level }) => {
  return <Container className={level}>{message}</Container>;
};

export default Alert;
