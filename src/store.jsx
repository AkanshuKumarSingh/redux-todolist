import React from 'react';
import { createStore } from 'redux';

let initialState = {
    list: []
}

function ListReducer(state = initialState, action) {

    console.log(action.type);

    switch (action.type) {
        case 'add_note':
            var newList = state.list;
            newList.push(action.payload)
            var newState = {
                list: newList
            }
            return newState;
        case 'delete_note':
            var newList = state.list;
            newList.splice(action.payload,1);
            var newState = {
                list: newList
            }
            return newState;
        default: return initialState;
    }

}

const store = createStore(ListReducer);
export default store;
