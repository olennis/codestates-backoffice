import React from 'react';
import styled from 'styled-components'
type setName = {
    setName:React.Dispatch<React.SetStateAction<string>>
};


export const InputName = (Props: setName) => {
    
    const changeName = async (e:any) => {
        await Props.setName(e.target.value)
        
    }
    
    return (
        <span>
            <Name onChange={(e:any)=>changeName(e)} placeholder='이름을 입력해주세요'></Name>
        </span>
    );
};

const Name = styled.input`
    width:25%;
    background: skyblue;
`