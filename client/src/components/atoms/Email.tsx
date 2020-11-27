// @flow 
import * as React from 'react';
type Props = {
    student:any
};
export const Email = (props: Props) => {
    return (
        <span>
            <span>{props.student.email}</span>
        </span>
    );
};