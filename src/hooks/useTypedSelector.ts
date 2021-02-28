import {useSelector, TypedUseSelectorHook} from 'react-redux'
import {RootState} from '../state'

// we export this and use it instead of useSelector to get state in RepositoriesList
// this means the state we get back has type safety. The rootstate 
// is the parameters of the state we defined earlier see https://react-redux.js.org/using-react-redux/static-typing
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;