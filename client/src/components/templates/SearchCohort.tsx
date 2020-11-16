// @flow 
import * as React from 'react';
import { FilterCohort } from '../molecules/FilterCohort';
import {SearchName} from '../molecules/SearchName'
type Props = {
   
};
export  const SearchCohort = (props: Props) => {
    return (
        <div>
            <SearchName></SearchName>
            <FilterCohort></FilterCohort>
        </div>
    );
};