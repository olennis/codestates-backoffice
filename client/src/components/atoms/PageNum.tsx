// @flow 
import * as React from 'react';
import Button from '@material-ui/core/Button';

type Props = {
    count: any
    setPageNum: any
};
export const PageNum = (props: Props) => {
    return (
        <span>
            <Button size='small' onClick={(event: any) => {
                props.setPageNum(event.target.innerText)
            }} >{props.count}</Button>
        </span>
    );
};
/**
 * Math.ceil(props.data.length/props.view)
 */