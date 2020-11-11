import React, { useState, useCallback } from 'react';
import useCohort from '../../hooks/useCohort'
import {SETCOHORT} from '../../modules/actions/changeCohortState'
import axios from 'axios'

const CohortSelect = () => {
    const [number, setNumber] = useState('')
    const [type, setType] = useState('')
    const {cohort, changeCohortState} = useCohort();
    const payload = `${type}`+` `+`${number}기`.trim()

    
    
    return (
        <div>
            <select value={type} id='cohortSelector' onChange={(e)=>{
                setType(e.target.value)
                }}>
                <option >기수를 선택하세요</option>
                <option >Full Immersive</option>
                <option>Full Pre</option>
                <option>Part Immersive</option>
                <option>Part Pre</option>
            </select>
            <input type='number'
                    placeholder='기수를 입력해주세요'
                    min='0'
                    onChange={(e)=>{
                        setNumber(e.target.value)
                        }}>
            </input>
            <button 
            onClick={()=>
                {
                changeCohortState({type:SETCOHORT,payload:payload})
                }
            }
                >클릭!</button>
                    <div>{cohort}</div>
        </div>
    );
};

export default CohortSelect;