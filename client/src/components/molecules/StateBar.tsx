// @flow 
import * as React from 'react';
import styled from "styled-components"

type Props = {
    tab: any
    data: any
    setData: any
    setCheckNum: any
    checkNum: any
};


export const StateBar = (props: Props) => {

    const chooseAll = (e: any) => {
        let checked = e.target.checked
        if (e.target.checked === true) {
            props.setCheckNum(props.data.length)
        }
        else if (e.target.checked === false) {
            props.setCheckNum(0)
        }
        props.setData(props.data.map((student: any) => {
            student.checkValue = checked

            return student
        }))

    }

    return (
        <StateSection>
            {
                props.data.length === 0 ?
                    <input type='checkbox' onChange={(e: any) => { chooseAll(e) }} ></input> :
                    <input type='checkbox' checked={(props.data.length === props.data.filter((student: any) => student.checkValue).length ? true : false)} onChange={(e: any) => { chooseAll(e) }} ></input>
            }


            {
                props.tab === '1' ?
                    <>
                        <SpanDevied>직전 기수</SpanDevied>
                        <SpanDevied>현재 기수</SpanDevied>
                        <SpanDevied>Github ID</SpanDevied>
                        <SpanDevied>E-mail</SpanDevied>
                    </>
                    :
                    props.tab === '2' ?
                        <>
                            <SpanDevied>직전 기수</SpanDevied>
                            <SpanDevied>현재 기수</SpanDevied>
                            <SpanDevied>Github ID</SpanDevied>
                        </> :
                        <>
                            <SpanDevied>직전 기수</SpanDevied>
                            <SpanDevied>현재 기수</SpanDevied>
                            <SpanDevied>Github ID</SpanDevied>
                        </>
            }

        </StateSection>
    );
};

const StateSection = styled.section`
    padding: 1em;
    background: green;
`

const SpanDevied = styled.span`
    padding: 20px;
`