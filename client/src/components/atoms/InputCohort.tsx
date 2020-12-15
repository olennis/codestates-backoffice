import React from 'react';
import TextField from '@material-ui/core/TextField';

type setNth = {
    setNth: React.Dispatch<React.SetStateAction<string>>
};
export const InputCohort = (Props: setNth) => {
    const changeNth = async (e: any) => {
        await Props.setNth(e.target.value)
    }
    return (
        <TextField style={{ width: "60%" }}
            type='number'
            label="기수입력"
            variant="outlined"
            id="outlined-basic"
            onChange={(e: any) => changeNth(e)}
            placeholder='기수 입력'>
        </TextField>
    );
};