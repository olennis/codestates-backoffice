import React, { useState, useCallback } from 'react';
import useCohort from '../../hooks/useCohort'
import {SETCOHORT} from '../../modules/actions/changeCohortState'

const CohortSelect = () => {
    const [number, setNumber] = useState('')
    const {cohort, changeCohortState} = useCohort();
    const selectChange = useCallback((e:any) => {
        changeCohortState({
            type:SETCOHORT,
            payload:`${e.target.value.replace('IM','Immersive')}` + `${number}`})
            //Full Immersive 20기
        console.log('cohort:',cohort)
        
    }, [])//공부필요

    const getNumber = useCallback((e:any) => {
        setNumber(e.target.value)
        console.log(number)
    },[])
    
    return (
        <div>
            <select value={cohort} id='cohortSelector' onChange={selectChange}>
                <option>FULL IM</option>
                <option>FULL PRE</option>
                <option>PART IM</option>
                <option>PART PRE</option>
            </select>
            <input type='number'
                    placeholder='기수를 입력해주세요'
                    onChange={(e)=>getNumber}>
            </input>
        </div>
    );
};

export default CohortSelect;