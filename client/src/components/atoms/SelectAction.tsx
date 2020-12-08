// @flow 
import React from 'react'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

type setAction = {
    action: any
    setAction: any
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            // margin: theme.spacing(1),
            minWidth: 193.8
        }
    })
);

export const SelectAction = (Props: setAction) => {
    const classes = useStyles();
    const ChooseAction = (event: any) => {
        Props.setAction(event.target.value)
        console.log('event.target.value', event.target.value)
    }
    return (
        <span>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">인원</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={Props.action}
                    onChange={(event: any) => ChooseAction(event)}>
                    <MenuItem value="0">동작선택</MenuItem>
                    <MenuItem value="1">탑승</MenuItem>
                    <MenuItem value="2">기수이동</MenuItem>
                    <MenuItem value="3">하차</MenuItem>
                </Select>
            </FormControl>
        </span>
    );
};
