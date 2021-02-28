import {combineReducers} from 'redux'
import repositoriesReducer from './repositoriesReducer'

// this means we are going to have a state with a repositories key
const reducers = combineReducers({
    repositories: repositoriesReducer
})

export default reducers

// this is a type that describes state in store
export type RootState = ReturnType<typeof reducers>;