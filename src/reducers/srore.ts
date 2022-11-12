import {combineReducers, legacy_createStore} from "redux";
import {tasksReducer} from "./tasks-reducer";
import {todolistsReducer} from "./todolists-reducer";

export type rootStateType = ReturnType<typeof rootReduser>

export const rootReduser = combineReducers({
    todolists: todolistsReducer,
    tasks: tasksReducer,
})





export const store = legacy_createStore(rootReduser)

// @ts-ignore
window.store = store