/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from 'react';
import { SearchCohort } from '../templates/SearchCohort'
import { ToolTab } from '../templates/ToolTab'
import { StudentList } from '../templates/StudentList'
import { Launch } from "../templates/Launch"
import styled from "styled-components"


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
    <Container>
      <HeaderTab>
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
      </HeaderTab>
      <BodySection>
        <SearchCohort
          cohort={cohort}
          setCohort={setCohort}
          setNth={setNth}
          setName={setName}
          name={name}
          nth={nth}
          setData={setData}
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
          setGitCheck={setGitCheck}
          setSlackCheck={setSlackCheck}
          setCalendar={setCalendar}

        />
      </BodySection>
      <BottomSection>
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
      </BottomSection>
    </Container >
  );
}

// * Container --> 전체 컴포넌트를 담고 있는 부분입니다. 
// * rid-template-columns --> 가로 컬럼을 몇개 만들지 입니다.
// * grid-gab --> 위의 헤더와 얼마나 간격을 둘지
// * grid-template-rows -> 헤더안쪽의 범위
const Container = styled.div`  
  border: 1px solid red;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 110px;
  grid-gap: 30px;
  padding-top: 30px;
  margin-top: 50px;
  margin-left: 20px;
  margin-right: 20px;
`

const HeaderTab = styled.div`
  border: 1px solid black;
`
const BodySection = styled.div`
  border: 1px solid black;
  display: grid;
  grid-template-columns: 1fr 3fr;
`

const BottomSection = styled.div`
  border: 1px solid black;

`

export default Page;


