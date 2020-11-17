// @flow 
import React from 'react';
import { FilterCohort } from '../molecules/FilterCohort';
import {SearchName} from '../molecules/SearchName'
type Props = {
   cohort:string,
   name:string,
   nth:string,
   setData:any,
   setCohort:any,
   setName:any,
   setNth:any,
   

};
export  const SearchCohort = (props: Props) => {
    return (
        <div>
            <SearchName setName={props.setName} name={props.name} setData={props.setData}></SearchName>
            <FilterCohort cohort={props.cohort} setCohort={props.setCohort} setNth={props.setNth} nth={props.nth} setData={props.setData}></FilterCohort>
        </div>
    );
};