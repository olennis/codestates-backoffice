// @flow 
import * as React from 'react';
import { Button } from '@material-ui/core';

type Props = {
    pageNum: any
    setPageNum: any
};

export const LeftButton = (props: Props) => {
    const min = () => {
        if (Number(props.pageNum) > 1) {
            props.setPageNum(Number(props.pageNum) - 1)
        }
        else {
            props.setPageNum(1)
        }

    }

    return (
        <span>
            <Button variant="outlined" color="default" size="large" onClick={() => min()}>⬅️</Button>
        </span>
    );
};