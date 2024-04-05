# 2: рекомендованный вариант

```
let preloadedState = setState()
```

```
store.subscribe(() => {
    console.log('store.getState()', store.getState())
    incrementState({counter: store.getState().counter})
})
```

# 1: приемлемый вариант -, но лучше не использовать

localStorage - это работа с сайд эфф, обращаемся к нему в TC.

на UI disatch TC



