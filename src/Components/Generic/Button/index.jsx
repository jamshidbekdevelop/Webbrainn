import React from 'react';
import { Container } from './styled';
export const Button = ({ width, height, children, border}) => {
  return (
    <Container width={width} height={height} border={border} >
      {children}
    </Container>
  )
};
export default Button;