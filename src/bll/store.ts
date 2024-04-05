import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux';
import {counterReducer} from './counter-reducer';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {incrementState, setState} from '../utils/localStorage-utils';


const rootReducer = combineReducers({
    counter: counterReducer
})
// предСтейт получа из LocalStorage
let preloadedState = setState()

export const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk));

// на кажд изм стор, срабат подписчик и сетает нов зн в  LocalStorage
store.subscribe(() => {
    console.log('store.getState()', store.getState())
    incrementState({counter: store.getState().counter})
})


export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector