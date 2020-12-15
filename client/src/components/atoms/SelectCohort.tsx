// @flow 
import React, { useEffect, useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

type setCohort = {
    cohort: string
    setCohort: React.Dispatch<React.SetStateAction<string>>
}
export const SelectCohort = (Props: setCohort) => {
    const changeCohort = (e: any) => {
        Props.setCohort(e.target.value)
    }
    return (
        <div>
            <Select variant='outlined' value={Props.cohort} onChange={(e: any) => changeCohort(e)}
                style={{ height: '50px', width: '82%' }}
            >
                <MenuItem value='??'>코스를 선택하세요</MenuItem>
                <MenuItem value='Full Immersive'>Full Immersive</MenuItem>
                <MenuItem value='Full Pre'>Full Pre</MenuItem>
                <MenuItem value='Part Immersive'>Part Immersive</MenuItem>
                <MenuItem value='Part Pre'>Part Pre</MenuItem>
            </Select>
        </div>
    );
};

