import {FilterValuesType, TaskStateType, TodolistType} from "../App";
import {v1} from "uuid";
import {addToDoListActionType, removeToDoListActionType} from "./todolists-reducer";


export const removeTaskAC = (taskId: string, todolistId: string) => {
    return {type: 'RemoveTask', taskId, todolistId} as const
}

export const addTaskAC = (title: string, todolistId: string) => {
    return {type: 'AddTask', title, todolistId} as const
}
export const changeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string) => {
    return {type: 'ChangeTaskStatus', taskId, isDone, todolistId} as const

}
export const changeTaskTitleAC = (taskId: string, title: string, todolistId: string) => {
    return {type: 'ChangeTaskTitle', taskId, title, todolistId} as const
}


type RemoveTaskActionType = ReturnType<typeof removeTaskAC>
type AddTaskActionType = ReturnType<typeof addTaskAC>
type ChangeTaskStatusActionType = ReturnType<typeof changeTaskStatusAC>
type ChangeTaskTitleActionType = ReturnType<typeof changeTaskTitleAC>


type ActionTypes = RemoveTaskActionType | AddTaskActionType | ChangeTaskStatusActionType | ChangeTaskTitleActionType |
    addToDoListActionType | removeToDoListActionType

export const tasksReducer = (state: TaskStateType, action: ActionTypes): TaskStateType => {

    switch (action.type) {
        case 'RemoveTask':
            return {
                ...state, [action.todolistId]: state[action.todolistId].filter((el) => el.id !== action.taskId)
            }

        case 'AddTask':

            return {
                ...state,
                [action.todolistId]: [{id: v1(), title: action.title, isDone: false}, ...state[action.todolistId]]
            }
        case 'ChangeTaskStatus':

            return {
                ...state,
                [action.todolistId]: [...state[action.todolistId].map((ts) => ts.id === action.taskId ? {
                    ...ts,
                    isDone: action.isDone
                } : ts)]
            }
        case 'ChangeTaskTitle':

            return {
                ...state,
                [action.todolistId]: [...state[action.todolistId].map((ts) => ts.id === action.taskId ? {
                    ...ts,
                    title: action.title
                } : ts)]
            }
        case 'ADD-TODOLIST':

            return {
                ...state,
                [action.todolistId]: []
            }
        case 'REMOVE-TODOLIST':

            let copyState = {...state}
            delete copyState[action.id]
            return copyState

        default:
            return state
    }
}

