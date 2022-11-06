import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";


export type removeToDoListActionType = {
    type: 'REMOVE-TODOLIST'
    id: string
}

export type addToDoListActionType = {
    type: 'ADD-TODOLIST'
    title: string
    todolistId: string
}

type changeFilterValueActionType = {
    type: 'CHANGE-FILTER'
    filter: FilterValuesType,
    id: string
}

type changeTodoTitleValueActionType = {
    type: 'CHANGE-TITLE'
    title: string
    id: string
}

type ActionsType =  removeToDoListActionType | addToDoListActionType | changeFilterValueActionType | changeTodoTitleValueActionType


const initialState: Array<TodolistType> = [
    {id: v1(), title: 'Todolist#1', filter: "active"},
    {id: v1(), title: 'Todolist#1', filter: "completed"},
    {id: v1(), title: 'Todolist#1', filter: "active"}
]

export const todolistsReducer = (todolists = initialState, action: ActionsType): Array<TodolistType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return todolists.filter(tl => tl.id !== action.id)

        case 'ADD-TODOLIST':
            const newToDo: TodolistType = {
                id: action.todolistId,
                title: action.title,
                filter: 'all'
            }
            return [newToDo, ...todolists]
        case 'CHANGE-FILTER':
            return todolists.map(tl => tl.id === action.id ? {...tl, filter: action.filter} : tl)

        case 'CHANGE-TITLE':
            return todolists.map(tl=>tl.id === action.id ? {...tl, title: action.title}: tl)

        default:
            return todolists
    }

}

export const RemoveToDoListActionCreator = (id: string): removeToDoListActionType=> (
    {
        type: 'REMOVE-TODOLIST',
        id: id
    }
)

export const addToDoListActionCreator = (title: string): addToDoListActionType=> (
    {
        type: 'ADD-TODOLIST',
        title,
        todolistId: v1()
    })

export const changeFilterValueActionCreator = (filter:FilterValuesType, id: string):changeFilterValueActionType => (
    {
        type: 'CHANGE-FILTER',
        filter,
        id
    }
)

export const changeTodoTitleValueActionCreator = (title: string, id:string):changeTodoTitleValueActionType=>(
    {
        type: 'CHANGE-TITLE',
        title,
        id
    }
)


