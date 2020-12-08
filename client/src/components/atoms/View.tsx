// @flow 
import * as React from 'react';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

type setView = {
    view: any
    setView: any
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            // margin: theme.spacing(1),
            minWidth: 193.8
        }
    })
);

export const View = (Props: setView) => {
    const classes = useStyles();
    const ChooseView = (event: any) => {
        Props.setView(event.target.value)
        console.log(typeof event.target.value)
    }
    return (
        <span>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">인원</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={Props.view}
                    onChange={(event: any) => ChooseView(event)}>
                    <MenuItem value="1">전체</MenuItem>
                    <MenuItem value="5">5명</MenuItem>
                    <MenuItem value="10">10명</MenuItem>
                    <MenuItem value="30">30명</MenuItem>
                </Select>
            </FormControl>
        </span>
    );
};