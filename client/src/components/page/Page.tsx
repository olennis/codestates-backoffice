/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */

import React, { useState } from 'react';
import { SearchCohort } from '../templates/SearchCohort'
import { ToolTab } from '../templates/ToolTab'
import { StudentList } from '../templates/StudentList'

type Checkbok = {
  check: boolean
}

const defaultCheck: Checkbok = {
  check: false
}



function Page() {
  const [check, setCheck] = useState(defaultCheck);

  return (
    <div>
      <b>나는 페이지</b>
      <SearchCohort></SearchCohort>
      <ToolTab />
      <StudentList></StudentList>
    </div>
  );
}

export default Page;
