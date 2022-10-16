import {TodolistType} from "../App";
import {
    addToDoListActionCreator,
    changeFilterValueActionCreator, changeTodoTitleValueActionCreator,
    RemoveToDoListActionCreator,
    todolistsReducer
} from "./todolists-reducer";
import {v1} from "uuid";



let todolistID_1: string
let todolistID_2: string

let startState: Array<TodolistType>

beforeEach(()=>{
    todolistID_1 = v1()
     todolistID_2 = v1()
    startState = [
        {id: todolistID_1, title: 'What to learn', filter: 'all'},
        {id: todolistID_2, title: 'What to Buy', filter: 'all'}
    ]
})


test('correct todolist should be removrd', ()=>{

    const endState = todolistsReducer(startState, RemoveToDoListActionCreator(todolistID_2))

    expect(endState.length).toBe(1)
    expect(endState[0].id).toBe(todolistID_1)

})

test('correct todolist should be added', ()=>{

    let newTodolistTitle = 'Im new todolis'

    const endState = todolistsReducer(startState, addToDoListActionCreator (newTodolistTitle) )

    expect(endState.length).toBe(3)
    expect(endState[0].title).toBe('Im new todolis')
})


test('filter should be changed', ()=>{

    const endState = todolistsReducer(startState, changeFilterValueActionCreator('active',todolistID_1 ))

    expect(endState.length).toBe(2)
    expect(endState[0].filter).toBe("active")
})

test('title should be changed', ()=>{

    let newTitle = 'Opa'

    const endState = todolistsReducer(startState, changeTodoTitleValueActionCreator(newTitle, todolistID_1))

    expect(endState.length).toBe(2)
    expect(endState[0].title).toBe('Opa')
})
