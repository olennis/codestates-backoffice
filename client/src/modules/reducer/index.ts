import { combineReducers } from 'redux'
import changeCohortState from '../actions/changeCohortState'
import changeTabState from "../actions/ChangeTab"

const rootReducer = combineReducers({
    changeCohortState,
    changeTabState
})

export type RootState = ReturnType<typeof rootReducer>