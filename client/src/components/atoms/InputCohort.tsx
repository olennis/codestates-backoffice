import React from 'react';


type setNth = {
    setNth: React.Dispatch<React.SetStateAction<string>>
};

export const InputCohort = (Props: setNth) => {
    const changeNth = async (e: any) => {
        await Props.setNth(e.target.value)

    }
    return (
        <span>
            <input
                type='number'
                min='1'
                onChange={(e: any) => changeNth(e)}
                placeholder='기수를 입력해주세요'></input>
        </span>
    );
};
