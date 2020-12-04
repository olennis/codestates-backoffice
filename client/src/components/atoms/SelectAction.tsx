// @flow 
import React from 'react'

type setAction = {
    action: any
    setAction: any
};
export const SelectAction = (Props: setAction) => {
    const ChooseAction = (event: any) => {
        Props.setAction(event.target.value)
        console.log('event.target.value',event.target.value)
    }
    return (
        <span>
            <select value={Props.action} onChange={(event: any) => ChooseAction(event)}>
                <option value="0">동작선택</option>
                <option value="1">탑승</option>
                <option value="2">기수이동</option>
                <option value="3">하차</option>
            </select>
        </span>
    );
};