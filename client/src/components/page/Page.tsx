import React from 'react';
import {SearchCohort} from '../templates/SearchCohort'
import {ToolTab} from '../templates/ToolTab'
import {StudentList} from '../templates/StudentList'


function Page() {
  return (
    <div>
      <SearchCohort></SearchCohort>
      <ToolTab></ToolTab>
      <StudentList></StudentList>
    </div>
  );
}

export default Page;
