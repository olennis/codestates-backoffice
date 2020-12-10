// @flow 
import React, { useEffect, useState } from 'react';
type setCohort = {
    cohort: string
    setCohort: React.Dispatch<React.SetStateAction<string>>
}
export const SelectCohort = (Props: setCohort) => {
    const changeCohort = (e: any) => {
        Props.setCohort(e.target.value)
    }
    console.log('cohort:', Props.cohort)
    return (
        <span>
            <select value={Props.cohort} onChange={(e: any) => changeCohort(e)}>
                <option value='??'>코스를 선택하세요</option>
                <option value='Full Immersive'>Full Immersive</option>
                <option value='Full Pre'>Full Pre</option>
                <option value='Part Immersive'>Part Immersive</option>
                <option value='Part Pre'>Part Pre</option>
            </select>
        </span>
    );
};