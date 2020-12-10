// @flow 
import * as React from 'react';
type setView = {
    view: any
    setView: any
};
export const View = (Props: setView) => {
    const ChooseView = (event: any) => {
        Props.setView(event.target.value)
        console.log(typeof event.target.value)
    }
    return (
        <span>
            <select value={Props.view} onChange={(event: any) => ChooseView(event)}>
                <option value="1">전체</option>
                <option value="5">5명</option>
                <option value="10">10명</option>
                <option value="30">30명</option>
            </select>
        </span>
    );
};