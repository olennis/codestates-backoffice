// @flow 
import React from 'react'
import { CheckAtoms } from "./CheckAtoms"

type Props = {
    setGitCheck: any
};

export const GithubTeam = (props: Props) => {
    return (
        <div>
            <CheckAtoms /> 깃헙팀
        </div>
    );
};