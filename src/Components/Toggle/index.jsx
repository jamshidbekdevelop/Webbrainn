import React from 'react';
import { useConnectionsContext } from '../../Context';
import {Tagle, Checkbox } from './styled';
// import { NavbarContext } from '../../Context/styled';
// import {navbar} from '../../utils/navbar'
// useConnectionsContext
export const Taggle = ({open, onClose, hide}) => {
  // const [close, setClose]=useState();
  const [{openState}]= useConnectionsContext()
  // console.log(openState, 'openState');
  // const bullen={
    
  // }
  // const [state , setState ] = useContext(NavbarContext)
  // onClick=(hidden)=>{
  //   console.log(hidden, 'josj');
  // }
  return (
    <Tagle hide={hide}>
      {/* {openState=== true && <button>lll</button>} */}
      <Checkbox openState={openState}/>
    </Tagle>
  )
};

export default Taggle 