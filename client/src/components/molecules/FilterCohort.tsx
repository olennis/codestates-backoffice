// @flow 
import React from 'react';
import { SelectCohort } from '../atoms/SelectCohort'
import { CohortButton } from '../atoms/CohortButton'
import { InputCohort } from '../atoms/InputCohort';
import styled from "styled-components";

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
            <CutButton>
                <SelectCohort setCohort={props.setCohort} cohort={props.cohort}></SelectCohort>
            </CutButton>
            <div>
                <CutButton>
                    <InputCohort setNth={props.setNth}></InputCohort>
                    <CohortButton cohort={props.cohort} nth={props.nth} setData={props.setData} ></CohortButton>
                </CutButton>
            </div>
        </div>
    );
};

const CutButton = styled.div`
    padding-bottom: 50px;
`