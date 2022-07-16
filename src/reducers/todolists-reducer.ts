import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";


type removeToDoListActionType = {
    type: 'REMOVE-TODOLIST'
    id: string
}

type addToDoListActionType = {
    type: 'ADD-TODOLIST'
    title: string
    id: string
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

export const todolistsReducer = (todolists: Array<TodolistType>, action: ActionsType): Array<TodolistType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return todolists.filter(tl => tl.id !== action.id)

        case 'ADD-TODOLIST':
            const newToDo: TodolistType = {
                id: action.id,
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

export const addToDoListActionCreator = (title: string, id: string): addToDoListActionType=> (
    {
        type: 'ADD-TODOLIST',
        title,
        id
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


