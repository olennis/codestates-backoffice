import React from 'react';
import TextField from '@material-ui/core/TextField';

type setName = {
    setName: React.Dispatch<React.SetStateAction<string>>
};
export const InputName = (Props: setName) => {
    const changeName = async (e: any) => {
        await Props.setName(e.target.value)
    }
    return (
        <TextField onChange={(e: any) => changeName(e)}
            style={{ width: "60%" }}
            label="이름입력"
            variant="outlined"
            id="outlined-basic"
            placeholder='이름 입력'
        >
        </TextField>
    );
};

