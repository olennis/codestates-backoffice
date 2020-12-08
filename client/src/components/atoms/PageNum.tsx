// @flow 
import * as React from 'react';
import { Button } from '@material-ui/core';

type Props = {
    count: any
    setPageNum: any

};
export const PageNum = (props: Props) => {
    console.log(props.count)
    return (
        <span>
            <Button variant="outlined" color="default" size="large" onClick={(event: any) => {
                props.setPageNum(event.target.innerText)
            }} >
                {props.count}
            </Button>
        </span>
    );
};

/**
 * Math.ceil(props.data.length/props.view)
 */