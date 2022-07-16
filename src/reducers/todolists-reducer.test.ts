import {TodolistType} from "../App";
import {
    addToDoListActionCreator,
    changeFilterValueActionCreator, changeTodoTitleValueActionCreator,
    RemoveToDoListActionCreator,
    todolistsReducer
} from "./todolists-reducer";
import {v1} from "uuid";


test('correct todolist should be removrd', ()=>{
    //
    let todolistID_1 = v1()
    let todolistID_2 = v1()

    const startState: Array<TodolistType> = [
        {id: todolistID_1, title: 'What to learn', filter: 'all'},
        {id: todolistID_2, title: 'What to Buy', filter: 'all'}
    ]
    // вызов функции

    const endState = todolistsReducer(startState, RemoveToDoListActionCreator(todolistID_2))

    expect(endState.length).toBe(1)
    expect(endState[0].id).toBe(todolistID_1)

})


test('correct todolist should be added', ()=>{

    let todolistID_1 = v1()
    let todolistID_2 = v1()

    let newTodolistTitle = 'Im new todolis'

    const startState: Array<TodolistType> = [
        {id: todolistID_1, title: 'What to learn', filter: 'all'},
        {id: todolistID_2, title: 'What to Buy', filter: 'all'}
    ]

    const endState = todolistsReducer(startState, addToDoListActionCreator (newTodolistTitle, v1()) )

    expect(endState.length).toBe(3)
    expect(endState[0].title).toBe('Im new todolis')
})


test('filter should be changed', ()=>{

    let todolistID_1 = v1()
    let todolistID_2 = v1()

    const startState: Array<TodolistType> = [
        {id: todolistID_1, title: 'What to learn', filter: 'all'},
        {id: todolistID_2, title: 'What to Buy', filter: 'all'}
    ]

    const endState = todolistsReducer(startState, changeFilterValueActionCreator('active',todolistID_1 ))

    expect(endState.length).toBe(2)
    expect(endState[0].filter).toBe("active")
})

test('title should be changed', ()=>{

    let todolistID_1 = v1()
    let todolistID_2 = v1()

    let newTitle = 'Opa'

    const startState: Array<TodolistType> = [
        {id: todolistID_1, title: 'What to learn', filter: 'all'},
        {id: todolistID_2, title: 'What to Buy', filter: 'all'}
    ]

    const endState = todolistsReducer(startState, changeTodoTitleValueActionCreator(newTitle, todolistID_1))

    expect(endState.length).toBe(2)
    expect(endState[0].title).toBe('Opa')
})
