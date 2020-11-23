// @flow 
import * as React from 'react';

type Props = {
    gitCheck: any
    setGitCheck: any
};


export const CheckAtoms = (props: Props) => {
    return (
        <div>
            <input type="checkbox" onClick={(event: any) => console.log(event.target.checked)} />
        </div>
    );
};

// ! 툴 별 상태를 체크 해야하기 때문에 툴별 상태를 가져온 것.
