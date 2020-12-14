// @flow 
import * as React from 'react';
import { ActionSection } from './ActionSection';
import { PageButton } from './PageButton';
import styled from "styled-components"



type Props = {
    cohort: any
    nth: any
    gitCheck: any
    slackCheck: any
    calendar: any
    action: any
    setAction: any
    data: any
    setData: any
    view: any
    setView: any
    currentPage: any
    setCurrentPage: any
    splitData: any
    setSplitData: any
    pageNum: any
    setPageNum: any
    checkNum: any
};
export const Launch = (props: Props) => {
    return (
        <Container>

            <PageButton
                setView={props.setView}
                pageNum={props.pageNum}
                setPageNum={props.setPageNum}
                data={props.data}
                view={props.view}
                setSplitData={props.setSplitData}
                checkNum={props.checkNum}
            />

            <ActionSection cohort={props.cohort}
                nth={props.nth}
                gitCheck={props.gitCheck}
                slackCheck={props.slackCheck}
                calendar={props.calendar}
                action={props.action}
                setAction={props.setAction}
                data={props.data}
                setData={props.setData}
            />
        </Container>
    );
};

const Container = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:100%;
`