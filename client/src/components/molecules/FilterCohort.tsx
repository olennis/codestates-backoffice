// @flow 
import React from 'react';
import { SelectCohort } from '../atoms/SelectCohort'
import { CohortButton } from '../atoms/CohortButton'
import { InputCohort } from '../atoms/InputCohort';

type Props = {
    cohort: string,
    nth: string,
    setCohort: any,
    setNth: any,
    setData: any,

};


export const FilterCohort = (props: Props) => {

    return (
        <div>
            <SelectCohort setCohort={props.setCohort} cohort={props.cohort}></SelectCohort>
            <InputCohort setNth={props.setNth}></InputCohort>
            <CohortButton cohort={props.cohort} nth={props.nth} setData={props.setData} ></CohortButton>
        </div>
    );
};