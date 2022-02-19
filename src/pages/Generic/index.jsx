import React from 'react';
import{ Container } from './styled'
import { useLocation } from 'react-router-dom';
export const Generic = () => {
    const location = useLocation()
  return <Container>
      {location?.pathname} nfklernflknsfklsnkfnskfnsfklnsfklnskflsnkflsnfksnfksnfksnfsk
  </Container>;
};
export default Generic