// @flow 
import * as React from 'react';
import styled from "styled-components"

type Props = {
    tab : any
    data : any
    setData : any
};


export const StateBar = (props: Props) => {

    const chooseAll = (e:any) => {
        let checked = e.target.checked 
        props.setData(props.data.map((student:any)=>{
            student.checkValue = checked
            return student
        }))
        
    }

    return (
        <StateSection>
            <input type='checkbox' onChange={(e:any)=>{chooseAll(e)}} ></input>
            {
            props.tab === '1'?
                <>
                    <SpanDevied>직전 기수</SpanDevied>
                    <SpanDevied>현재 기수</SpanDevied>
                    <SpanDevied>Github ID</SpanDevied>
                    <SpanDevied>E-mail</SpanDevied>
                </>
:
            props.tab === '2'?
                <>
                    <SpanDevied>직전 기수</SpanDevied>
                    <SpanDevied>현재 기수</SpanDevied>
                    <SpanDevied>Github ID</SpanDevied>
                </>:
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