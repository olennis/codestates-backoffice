import React from 'react';
import useCohort from '../../hooks/useCohort'
import {SETCOHORT} from '../../modules/actions/changeCohortState'


const Index = () => {
    const {cohort, changeCohortState} = useCohort();
    console.log('cohort 상태:',cohort)
    return(
        <div>
            <button onClick={()=>{

                console.log(cohort)
                changeCohortState({type:SETCOHORT,payload:'김소현'})}}>
            
                </button>
        </div>
    )
};

export default Index;