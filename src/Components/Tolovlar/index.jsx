import React from 'react';
import Button from '../Generic/Button';
import Footer from '../Generic/Footer';
import Navbar from '../Navbar';
import { Border, Card, Contt, Crav, DiD, Div, End, Humo, In, Input, Text, TiT, TiTTle, Tolov, TT, Uzcar, Uzcard, Visa } from './styled';

export const Tolovlar = () => {
  return (
    <Contt>
      <Navbar/>
      <Div>
        <React.Fragment>

        <Text>To`lovlar</Text>
        <label style={{fontFamily:'Fira Code', fontSize: '22px', paddingBottom: '8px'}} for="mamlakat">Mamlakatingiz</label>
        <select style={{width:'350px', height: '50px', fontSize: '20px', padding: '0px 20px 0px 20px', borderRadius: '10px'}} id="mamlakat" name="mamlakat">
          <option value="uzbekistan" selected>Uzbekiston</option>
          <option value="qizgistan">Qizgistan</option>
          <option value="tojikistan">Tojikistan</option>
          <option value="qozogiston">Qozogiston</option>
        </select>
        </React.Fragment>
          <TiT>To’lov tizimlari</TiT>
        <Tolov>
          <Border>
            <Input type={'radio'}/>
            <TT>Mahalliy to’lov tizimlari</TT>
            <Humo/>
            <Uzcar/>
          </Border>
          <Border>
            <Input type={'radio'}/>
            <TT>Mahalliy to’lov tizimlari</TT>
            <Visa/>
            <Crav/>
          </Border>
        </Tolov>
        <TiT>Karta ma`lumotlar</TiT>
        <Card>
          <In placeholder='Kartadagi isminggiz' width={'350'}/>
          <In placeholder='Pochta indeks' width={'350'}/>
          <In type={'number'} placeholder='Karta raqami' width={'350'}/>
          <In placeholder='MM/YY' />
          <In type={'number'} placeholder='Xavfsizlik kodi' />
        </Card>  
        <End>
          <React.Fragment>
            <DiD>
            <Input type={'checkbox'}/> 
            <TiTTle>Karta ma’lumotlarini eslab qolish</TiTTle>
            </DiD>
          </React.Fragment>
          <a style={{'textDecoration': 'none'}} href="./asosiy"><Button border width={'350'}>Tasdiqlash</Button></a>
        </End>
      </Div>
      <Footer/>
    </Contt>
  )
};
export default Tolovlar