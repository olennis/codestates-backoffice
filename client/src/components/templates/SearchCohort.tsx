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
            <EveryFilter>
                <FilterCohort cohort={props.cohort} setCohort={props.setCohort} setNth={props.setNth} nth={props.nth} setData={props.setData}></FilterCohort>
                <SearchName setName={props.setName} name={props.name} setData={props.setData}></SearchName>
            </EveryFilter>
        </SeachSection>
    );
};

const SeachSection = styled.div`
    grid-column: 1; 
    gird-row: 3;
`

const EveryFilter = styled.div`
    padding-top: 2em;
    text-align: center;
    background: rgb(248, 249, 251);
    padding-bottom: 2em;
`