import React from 'react';
type setName = {
    setName: React.Dispatch<React.SetStateAction<string>>
};
export const InputName = (Props: setName) => {
    const changeName = async (e: any) => {
        await Props.setName(e.target.value)
    }
    return (
        <span>
            <input onChange={(e: any) => changeName(e)} placeholder='이름을 입력해주세요'></input>
        </span>
    );
};