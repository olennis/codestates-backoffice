/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */

import React, { useState } from 'react';
import { SearchCohort } from '../templates/SearchCohort'
import { ToolTab } from '../templates/ToolTab'
import { StudentList } from '../templates/StudentList'

// type Checkbok = {
//   check: boolean
// }

// const defaultCheck: Checkbok = {
//   check: false
// }


function Page() {
  const [cohort, setCohort] = useState('')
  const [nth, setNth] = useState('')
  const [name, setName] = useState('')
  const [data, setData] = useState([])
  const [studentData, setStudentData] = useState([])
  const [tab, setTab] = useState('1');
  const [gitCheck, setGitCheck] = useState(false) // * 깃헙팀 체크박스 상태관리
  const [slackCheck, setSlackCheck] = useState(false) // * 슬랙팀 체크박스 상태관리
  const [calendar, setCalendar] = useState(false) // * 캘린더 체크박스 상태관리



  return (
    <div>
      <b>나는 페이지</b>


      <SearchCohort cohort={cohort} setCohort={setCohort} setNth={setNth} setName={setName} name={name} nth={nth} setData={setData} ></SearchCohort>

      <ToolTab setTab={setTab} setGitCheck={setGitCheck} gitCheck={gitCheck} />
      <StudentList data={data} setStudentData={setStudentData} studentData={studentData} tab={tab} gitCheck={gitCheck}></StudentList>


    </div>
  );
}

export default Page;
