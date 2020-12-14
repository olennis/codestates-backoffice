// @flow 
import React from 'react';
import { FilterCohort } from '../molecules/FilterCohort';
import { SearchName } from '../molecules/SearchName'
import styled from "styled-components"

type Props = {
    cohort: string,
    name: string,
    nth: string,
    setData: any,
    setCohort: any,
    setName: any,
    setNth: any,


};
export const SearchCohort = (props: Props) => {
    return (
        <SeachSection>
            <CohortFilter>
                <FilterCohort cohort={props.cohort} setCohort={props.setCohort} setNth={props.setNth} nth={props.nth} setData={props.setData}></FilterCohort>
            </CohortFilter>
            <SearchName setName={props.setName} name={props.name} setData={props.setData}></SearchName>
        </SeachSection>
    );
};

const SeachSection = styled.div`
    border: 1px solid blue;
    grid-column: 1; 
    gird-row: 3;
`

const CohortFilter = styled.div`
    padding-top: 2em;
    text-align: center;
    background: papayawhip;
`