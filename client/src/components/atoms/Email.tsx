// @flow 
import * as React from 'react';
type Props = {
    student:any
};
export const Email = (props: Props) => {
    return (
        <div>
            <span>{props.student.email}</span>
        </div>
    );
};