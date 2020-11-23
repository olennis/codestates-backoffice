// @flow 
import React from 'react'
import { CheckAtoms } from "./CheckAtoms"

type Props = {
    gitCheck: any
    setGitCheck: any
};



export const GithubTeam = (props: Props) => {
    return (
        <div>
            <input type="checkbox" onClick={(event: any) => props.setGitCheck(event.target.checked)} />
        </div>
    );
};