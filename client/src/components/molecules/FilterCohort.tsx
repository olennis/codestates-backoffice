// @flow 
import  React, { useState } from 'react';
import {SelectCohort} from '../atoms/SelectCohort'
import {CohortButton} from '../atoms/CohortButton'
import {InputCohort} from '../atoms/InputCohort';




export const FilterCohort = () => {
    const [cohort, setCohort] = useState('')
    const [nth, setNth] = useState('')
    return (
        <div>
            <SelectCohort setCohort={setCohort} cohort={cohort}></SelectCohort>
            <InputCohort setNth={setNth}></InputCohort>
            <CohortButton cohort={cohort} nth={nth}></CohortButton>

        </div>
    );
};