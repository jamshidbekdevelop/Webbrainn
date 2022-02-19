import React from 'react';
import { useConnectionsContext } from '../../Context';
import {Tagle, Checkbox } from './styled';
export const Taggle = ({hide}) => {
  const [{openState}]= useConnectionsContext()
  return (
    <Tagle hide={hide}>
      <Checkbox openState={openState}/>
    </Tagle>
  )
};

export default Taggle 