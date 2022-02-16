import React from 'react';
import { useConnectionsContext } from '../../Context';
import {Tagle, Checkbox } from './styled';
export const Taggle = ({open, onClose, hide}) => {
  const [{openState}]= useConnectionsContext()
  return (
    <Tagle hide={hide}>
      {/* {openState=== true && <button>lll</button>} */}
      <Checkbox openState={openState}/>
    </Tagle>
  )
};

export default Taggle 