import React from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from './bll/store';
import {incCounterValueAC} from './bll/counter-reducer';


function App() {
    const count = useAppSelector<any>(state=>state.counter.value)
    const dispatch = useAppDispatch()



    const incHandler = () => {
        dispatch(incCounterValueAC())
    }

    return (
        <div className="App">
            <h1>LocalStorage</h1>
            <h1>{count}</h1>
            <button onClick={incHandler}>increment</button>
        </div>
    );
}

export default App;


/*// СДЕЛАЛИ СЧЕТЧИК, ЧТОБЫ ПРИ ПЕРВОЙ ЗАГРУЗКЕ ДАННЫЕ БРАЛИСЬ ИЗ ЛОКАЛСТОРАДЖ
function App() {
// функ для инициализ значения сработает один раз
    const [value, setValue] = useState<number>(()=>{
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            return newValue
        } else
            return 0
    })
    /!* useEffect(() => {
         let valueAsString = localStorage.getItem('counterValue')
         if (valueAsString) {
             let newValue = JSON.parse(valueAsString)
             return newValue
         } else
             return 0
     }, [])*!/


// каждый раз при изм значения велью, запускается юзЕффект и шарашит эту функцию ( передает ключ-знач в локалСторадж)
    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    }, [value])


    const incHandler = () => {
        setValue(value + 1)
    }


    return (
        <div className="App">
            <h1>LocalStorage</h1>
            <h1>{value}</h1>
            <button onClick={incHandler}>increment</button>
        </div>
    );
}

export default App;*/
