import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux';
import {counterReducer} from './counter-reducer';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';


const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk));
export type AppRootType = ReturnType<typeof rootReducer>

export type AppThunkDispatch = ThunkDispatch<AppRootType, any, AnyAction>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootType> = useSelector