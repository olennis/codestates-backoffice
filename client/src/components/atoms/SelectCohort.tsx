// @flow 
import  React,{ useEffect, useState } from 'react';
import styled from 'styled-components'

type setCohort = {
    cohort : string
    setCohort : React.Dispatch<React.SetStateAction<string>>
}


export const SelectCohort = (Props:setCohort) => {
    
    const changeCohort = async (e:any) => {
        await Props.setCohort(e.target.value)
        
    }
    console.log('cohort:',Props.cohort)
    
    
    return (
        <span>
            <Cohort value={Props.cohort} onChange={(e:any)=>changeCohort(e)}>
                <option value='??'>코스를 선택하세요</option>
                <option value='Full Immersive'>Full Immersive</option>
                <option value='Full Pre'>Full Pre</option>
                <option value='Part Immersive'>Part Immersive</option>
                <option value='Part Pre'>Part Pre</option>
            </Cohort>
            
        </span>
    );
};

const Cohort = styled.select`
    width:12.5%;
    background: pink;
`