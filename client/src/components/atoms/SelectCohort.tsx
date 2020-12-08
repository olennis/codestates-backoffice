// @flow 
import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";


type setCohort = {
    cohort: string
    setCohort: React.Dispatch<React.SetStateAction<string>>
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            // margin: theme.spacing(1),
            minWidth: 193.8
        }
    })
);

export const SelectCohort = (Props: setCohort) => {
  
    const classes = useStyles();

    const changeCohort = (e: any) => {
        Props.setCohort(e.target.value)

    }
    console.log('cohort:', Props.cohort)


    return (
        <span>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Cohort</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={Props.cohort}
                    onChange={(e: any) => changeCohort(e)}
                    label="Cohort"
                >
                    <MenuItem value='??'>코스를 선택하세요</MenuItem>
                    <MenuItem value='Full Immersive'>Full Immersive</MenuItem>
                    <MenuItem value='Full Pre'>Full Pre</MenuItem>
                    <MenuItem value='Part Immersive'>Part Immersive</MenuItem>
                    <MenuItem value='Part Pre'>Part Pre</MenuItem>
                </Select>
            </FormControl>
        </span>
    );
};
