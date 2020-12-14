// @flow 
import * as React from 'react';
import styled from "styled-components"
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

type setView = {
    view: any
    setView: any
};
export const View = (Props: setView) => {
    const ChooseView = (event: any) => {
        Props.setView(event.target.value)
    }
    return (

        <Select variant='outlined' value={Props.view} onChange={(event: any) => ChooseView(event)} style={{
            height: '30px',
            width: '100px'
        }}>
            <MenuItem value="1">전체</MenuItem>
            <MenuItem value="5">5명</MenuItem>
            <MenuItem value="10">10명</MenuItem>
            <MenuItem value="30">30명</MenuItem>
        </Select>

    );
};

