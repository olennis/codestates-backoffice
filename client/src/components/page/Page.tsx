/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from 'react';
import { SearchCohort } from '../templates/SearchCohort'
import { ToolTab } from '../templates/ToolTab'
import { StudentList } from '../templates/StudentList'
import { Launch } from "../templates/Launch"


function Page() {
  const [cohort, setCohort] = useState('')
  const [action, setAction] = useState('')
  const [view, setView] = useState('1') //* 보기에 대한 토글
  const [currentPage, setCurrentPage] = useState('') //* 페이지네이션

  const [nth, setNth] = useState('')
  const [name, setName] = useState('')
  const [data, setData] = useState([])
  const [splitData, setSplitData] = useState([]) //* 보기토글대로 나눠진 데이터숫자상태
  const [pageNum, setPageNum] = useState('1') //* 페이지 숫자상태
  const [studentData, setStudentData] = useState([])
  const [tab, setTab] = useState('1');
  const [gitCheck, setGitCheck] = useState(false) // * 깃헙팀 체크박스 상태관리
  const [slackCheck, setSlackCheck] = useState(false) // * 슬랙팀 체크박스 상태관리
  const [calendar, setCalendar] = useState(false) // * 캘린더 체크박스 상태관리
  const [checkNum, setCheckNum] = useState(0)


  return (
    <div>
      <SearchCohort
        cohort={cohort}
        setCohort={setCohort}
        setNth={setNth}
        setName={setName}
        name={name}
        nth={nth}
        setData={setData}
      />
      <ToolTab
        tab={tab}
        setTab={setTab}
        setGitCheck={setGitCheck}
        gitCheck={gitCheck}
        slackCheck={slackCheck}
        setSlackCheck={setSlackCheck}
        calendar={calendar}
        setCalendar={setCalendar}
        data={data}
        setData={setData}
        checkNum={checkNum}
        setCheckNum={setCheckNum}
      />
      <StudentList
        data={data}
        setData={setData}
        setStudentData={setStudentData}
        studentData={studentData}
        tab={tab}
        gitCheck={gitCheck}
        slackCheck={slackCheck}
        calendar={calendar}
        splitData={splitData}
        pageNum={pageNum}
        view={view}
        checkNum={checkNum}
        setCheckNum={setCheckNum}
      />
      <Launch
        //객체 태스트
        cohort={cohort}
        nth={nth}
        gitCheck={gitCheck}
        slackCheck={slackCheck}
        calendar={calendar}
        action={action}
        setAction={setAction}
        data={data}
        setData={setData}
        view={view}
        setView={setView}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        splitData={splitData}
        setSplitData={setSplitData}
        pageNum={pageNum}
        setPageNum={setPageNum}
        checkNum={checkNum}
      />
    </div >
  );
}

export default Page;

