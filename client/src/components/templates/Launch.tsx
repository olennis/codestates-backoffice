// @flow 
import * as React from 'react';
import { ActionSection } from '../molecules/ActionSection';
import { PageButton } from '../molecules/PageButton';
import { PageView } from '../molecules/PageView';


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
        <div>

            <PageButton
                setView={props.setView}
                pageNum={props.pageNum}
                setPageNum={props.setPageNum}
                data={props.data}
                view={props.view}
                setSplitData={props.setSplitData}
                checkNum={props.checkNum}
            />
            {/* <PageView
                view={props.view}
                setView={props.setView}
                currentPage={props.currentPage}
                setCurrentPage={props.setCurrentPage}
                data={props.data}
                setData={props.setData}
                splitData={props.splitData}
                setSplitData={props.setSplitData}
                pageNum={props.pageNum}
                setPageNum={props.setPageNum}
            /> */}
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
        </div>
    );
};