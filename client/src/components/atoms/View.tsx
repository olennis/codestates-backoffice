// @flow 
import * as React from 'react';

type setView = {
    view: any
    setView: any
};

export const View = (Props: setView) => {
    const ChooseView = (event: any) => {
        Props.setView(event.target.value)
    }
    return (
        <span>
            <select value={Props.view} onChange={(event: any) => ChooseView(event)}>
                <option value="0">보기</option>
                <option value="1">5명</option>
                <option value="2">10명</option>
                <option value="3">20명</option>
                <option value="4">전체</option>
            </select>
        </span>
    );
};