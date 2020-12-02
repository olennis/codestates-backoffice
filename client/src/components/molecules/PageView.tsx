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
};
export const PageView = (props: Props) => {
    return (
        <div>
            <View
                view={props.view}
                setView={props.setView}
            />
            <PageMove
                data={props.data}
                currentPage={props.currentPage}
                setCurrentPage={props.setCurrentPage}
            />
        </div>
    );
};