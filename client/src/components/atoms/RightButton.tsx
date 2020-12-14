// @flow 
import * as React from 'react';
import Button from '@material-ui/core/Button';

type Props = {
    pageNum: any
    setPageNum: any
    view: any
    data: any
};
export const RightButton = (props: Props) => {
    const max = () => {
        if (Number(props.pageNum) < Math.ceil(props.data.length / props.view)) {
            props.setPageNum(Number(props.pageNum) + 1)
        }
        else {
            props.setPageNum(Math.ceil(props.data.length / props.view))
        }
    }
    return (

        <Button onClick={() => max()}>{'>'}</Button>

    );
};