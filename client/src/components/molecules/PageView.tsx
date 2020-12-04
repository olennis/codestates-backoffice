// @flow 
import * as React from 'react';
import { PageMove } from "../atoms/PageMove"
import { View } from '../atoms/View';

type Props = {
    view: any
    setView: any
    currentPage: any
    setCurrentPage: any
    data: any
    setData: any
    setPageNum: any
    splitData: any
    setSplitData: any
};
export const PageView = (props: Props) => {
    return (
        <div>
            <View
                view={props.view}
                setView={props.setView}
            />
            <PageMove
                view={props.view}
                data={props.data}
                setData={props.setData}
                currentPage={props.currentPage}
                setCurrentPage={props.setCurrentPage}
                setPageNum={props.setPageNum}
                splitData={props.splitData}
                setSplitData={props.setSplitData}
            />
        </div>
    );
};