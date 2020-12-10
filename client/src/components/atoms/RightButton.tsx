// @flow 
import * as React from 'react';
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
        <span>
            <button onClick={() => max()}>➡️</button>
        </span>
    );
};