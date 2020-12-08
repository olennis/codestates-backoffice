import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

type setName = {
    setName: React.Dispatch<React.SetStateAction<string>>
};


export const InputName = (Props: setName) => {

    const changeName = async (e: any) => {
        await Props.setName(e.target.value)

    }

    return (
        <span>
            <TextField onChange={(e: any) => changeName(e)}
                id="outlined-basic"
                label="name"
                variant="outlined"
                size="small"
            />
        </span>
    );
};


