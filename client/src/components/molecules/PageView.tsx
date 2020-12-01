// @flow 
import * as React from 'react';
import Pagination from "../atoms/Pagination"
import { View } from '../atoms/View';

type Props = {
    view: any
    setView: any
};
export const PageView = (props: Props) => {
    return (
        <div>
            <View
                view={props.view}
                setView={props.setView}
            />
            <Pagination />
        </div>
    );
};