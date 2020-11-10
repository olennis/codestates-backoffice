import {useSelector, useDispatch} from 'react-redux'
import {RootState} from '../modules/reducer'
import changeCohortState from '../modules/actions/changeCohortState'
import { useCallback } from 'react';

export default function useCohort(){
    const cohort = useSelector((state:RootState) => state.changeCohortState.cohort)
    const dispatch = useDispatch();

    const changeCohortState = useCallback((cohort:any) => dispatch(cohort),[dispatch]);

    return {
        changeCohortState,
        cohort
    }

} 