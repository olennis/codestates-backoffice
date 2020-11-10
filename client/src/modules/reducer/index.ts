import { combineReducers } from 'redux'
import changeCohortState from '../actions/changeCohortState'
import changeTabState from "../actions/changeTabState"

const rootReducer = combineReducers({
    changeCohortState,
    changeTabState
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>