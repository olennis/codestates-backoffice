import React from 'react';

import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";


type setNth = {
    setNth: React.Dispatch<React.SetStateAction<string>>
};


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        TextField: {
            // margin: theme.spacing(1),
            minWidth: 103
        }
    })
);

export const InputCohort = (Props: setNth) => {
    const classes = useStyles();


    const changeNth = async (e: any) => {
        await Props.setNth(e.target.value)

    }
    return (
        <span>
            <TextField
                className={classes.TextField}
                type='number'
                // min='1'
                onChange={(e: any) => changeNth(e)}
                placeholder='기수를 입력해주세요'
                id="outlined-basic"
                variant="outlined"
                size="small"
            >

            </TextField>
        </span>
    );
};
