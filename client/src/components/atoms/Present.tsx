// @flow 
import * as React from 'react';
type Props = {
    student:any
};
export const Present = (props: Props) => {
    return (
        <div>
            <span>{props.student.log.split(',')[0]}</span>
        </div>
    );
};