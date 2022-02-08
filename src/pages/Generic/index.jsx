import React from 'react';
import styled from './styled'
import { useLocation } from 'react-router-dom';
export const Generic = () => {
    const location = useLocation()
  return <h1>
      {location?.pathname} Coming soon...
  </h1>;
};
export default Generic