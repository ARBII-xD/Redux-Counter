import React from 'react'
import { createStore } from 'redux'

const reducerFunc = (state={counter:0}, action) => {


    // Syncrhonous Function
    // Should not mutate the state 
    if (action.type === 'INCREMENT') {
        return {
            counter: state.counter + 1
        }
    }
    else if (action.type === 'DECREMENT') {
        return {
            counter: state.counter - 1
        }
}
    else if (action.type === 'ADD_BY_10') {
        return {
            counter: state.counter + action.payload
        }
    }

return state
}

const store = createStore(reducerFunc)
export default store