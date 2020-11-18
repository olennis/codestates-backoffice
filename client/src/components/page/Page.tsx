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
  const [cohort, setCohort] = useState('')
  const [nth, setNth] = useState('')
  const [name, setName] = useState('')
  const [data, setData] = useState([])
  const [tab, setTab] = useState(1);

  
  
  return (
    <div>
      <b>나는 페이지</b>

      <SearchCohort cohort = {cohort} setCohort = {setCohort} setNth = {setNth} setName = {setName} name={name} nth={nth} setData={setData} ></SearchCohort>
      <ToolTab setTab={setTab}/>
      <StudentList data={data}></StudentList>
    </div>
  );
}

export default Page;
