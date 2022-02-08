import {React, memo } from 'react';
import {Container} from './styled'
import { useNavigate } from 'react-router-dom';
export const BrandName = memo(() => {
  const navigate = useNavigate()
  return (
  <Container onClick={()=>navigate('/asosiy')} >
    <Container blue>web</Container>brain
  </Container>
  )
})
export default BrandName