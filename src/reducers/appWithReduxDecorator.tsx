import React from "react";
import {Provider} from "react-redux";
import {rootStateType, store} from "./srore";
import {combineReducers, createStore, legacy_createStore} from "redux";
import {tasksReducer} from "./tasks-reducer";
import {todolistsReducer} from "./todolists-reducer";
import {v1} from "uuid";

const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolist: todolistsReducer

})

const initialGlobalState = {
    todolists: [
        {id: 'todolistID_1', title: 'What to learn', filter: 'all'},
        {id: 'todolistID_2', title: 'What to Buy', filter: 'all'}
    ],
    tasks: {
        ['todolistID_1']: [
            {id: v1(), isDone: true, title: 'HTML'},
            {id: v1(), isDone: false, title: 'css'},
            {id: v1(), isDone: false, title: 'js'}
        ],
        ['todolistID_2']: [
            {id: v1(), isDone: true, title: 'Milk'},
            {id: v1(), isDone: false, title: 'Beer'},
            {id: v1(), isDone: false, title: 'Lemon'}
        ]
    }
}

export const storyBookStore = legacy_createStore(rootReducer, initialGlobalState as rootStateType)

export const WithProviderReduxDecorator = (storyFn: ()=>React.ReactNode)=>{

    return <Provider store={storyBookStore}>{storyFn()}</Provider>

}