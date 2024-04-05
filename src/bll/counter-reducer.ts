import {Dispatch} from 'redux';
import {AppRootType} from './store';

const initialState = {value: 0}
export type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: CommonType): InitialStateType => {
    switch (action.type) {
        case 'INC-VALUE':
            return {...state, value: state.value + 1}
        case 'SET-VALUE':
            return {...state, value: action.value}
        default:
            return state
    }
}
//AC
export const incCounterValueAC = () => {
    return {
        type: 'INC-VALUE',
    } as const
}
export const setValueFromLocalStorageAC = (value: number) => {
    return {
        type: 'SET-VALUE',
        value
    } as const
}
//TC
export const incValueTC = () => (dispatch: Dispatch, getState: () => AppRootType) => {
    let currentValue = getState().counter.value
    localStorage.setItem('counterValue', JSON.stringify(currentValue + 1))
    dispatch(incCounterValueAC())
}
// со старта получили данные из ЛС
export const setValueFromLocalStorageTC = () => (dispatch: Dispatch) => {
    let valueAsString = localStorage.getItem('counterValue')
    if (valueAsString) {
        let value = JSON.parse(valueAsString)
        dispatch(setValueFromLocalStorageAC(value))
    } else
        return 0
}
export type CommonType = ReturnType<typeof incCounterValueAC> | ReturnType<typeof setValueFromLocalStorageAC>
