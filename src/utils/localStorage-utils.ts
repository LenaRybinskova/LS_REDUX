import {AppRootStateType} from '../bll/store';

// увеличиваем и сохр в  localStorage
export const incrementState=(state:AppRootStateType)=>{
    try{
        localStorage.setItem('app-state', JSON.stringify(state))
    }
    catch{
    }
}

// берем из localStorage
export const setState=()=>{
    try{
        const persistedTodosString = localStorage.getItem('app-state')
        if (persistedTodosString) {
           return  JSON.parse(persistedTodosString)
        }
        return undefined
    }
    catch{
        return undefined
    }
}