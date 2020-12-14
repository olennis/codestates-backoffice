// @flow 
import React from 'react'
import styled from "styled-components"
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

type setAction = {
    action: any
    setAction: any
};



export const SelectAction = (Props: setAction) => {
    const ChooseAction = (event: any) => {
        Props.setAction(event.target.value)
    }
    return (

        <Select variant='outlined' value={Props.action} onChange={(event: any) => ChooseAction(event)} style={{
            height: '30px',
            width: '150px'
        }}>
            <MenuItem value="0">동작선택</MenuItem>
            <MenuItem value="1">탑승</MenuItem>
            <MenuItem value="2">기수이동</MenuItem>
            <MenuItem value="3">하차</MenuItem>
        </Select>

    );
};



