// @flow 
import * as React from 'react';
type Props = {
    student : any
};
export const Name = (props: Props) => {
    return (
        <div>
             <span>{props.student.name}</span>
        </div>
    );
};