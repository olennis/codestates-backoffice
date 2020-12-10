// @flow 
import * as React from 'react';
type Props = {
    count: any
    setPageNum: any
};
export const PageNum = (props: Props) => {
    console.log(props.count)
    return (
        <span>
            <button onClick={(event: any) => {
                props.setPageNum(event.target.innerText)
            }} >{props.count}</button>
        </span>
    );
};
/**
 * Math.ceil(props.data.length/props.view)
 */