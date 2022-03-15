import React, { useState } from 'react';
import {Block, Buttoon, Set, Text } from './style'
import Taggle from '../Toggle';
import { useConnectionsContext } from '../../Context';

export const Setting = () => {


    const [offOn, setOffOn] = useState(true)

    const change = () => {
        setOffOn(!offOn)
    }
    const [{openState}, dispatch]=useConnectionsContext()
    const onClose=()=>{
      dispatch({
        type: 'ChangePage', payload: !openState
      })
    }

    return (
        <Block onClick={() => change()} >
            <Block.Img />
            <Set value={offOn}>
                <Set.Header>
                    <Set.HeaderLeft>Funksiyalar</Set.HeaderLeft>
                    <Set.HeaderRight>
                        <Set.HeaderRightImg />

                    </Set.HeaderRight>
                </Set.Header>
                <Set.Header>
                    <Set.HeaderLeft>
                        {
                            openState===false ? <Text kerak>Qiziqarli sayohat</Text> : <Text>Qiziqarli sayohat</Text>
                        }
                    </Set.HeaderLeft>
                    <Set.HeaderRight><Buttoon onClick={onClose}><Taggle/></Buttoon></Set.HeaderRight>
                </Set.Header>
                <Set.Header>
                    <Set.HeaderLeft>
                        <Text>Tungi rejim</Text>
                    </Set.HeaderLeft>
                    <Set.HeaderRight>
                        <Buttoon>
                            <Taggle/>
                        </Buttoon>
                    </Set.HeaderRight>
                </Set.Header>

            </Set>
        </Block>
    )
}

export default Setting;