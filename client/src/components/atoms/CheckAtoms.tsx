// @flow 
import * as React from 'react';
type Props = {

};
export const CheckAtoms = (props: Props) => {
    return (
        <div>
            <input type="checkbox" onClick={(event: any) => console.log(event.target.checked)} />
        </div>
    );
};