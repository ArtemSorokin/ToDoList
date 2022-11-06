import {combineReducers, legacy_createStore} from "redux";
import {tasksReducer} from "./tasks-reducer";
import {todolistsReducer} from "./todolists-reducer";

export type rootStateType = ReturnType<typeof rootReduser>

export const rootReduser = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer
})





export const store = legacy_createStore(rootReduser)