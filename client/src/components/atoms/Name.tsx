// @flow 
import * as React from 'react';
type Props = {
    student : any
};
export const Name = (props: Props) => {
    return (
        <span>
             <span>{props.student.name}</span>
        </span>
    );
};