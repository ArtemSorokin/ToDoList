import React, {KeyboardEvent, ChangeEvent, useState} from "react";
import {FilterValuesType, TasksType} from "./App";
import AddFormForTodoList from "./AddFormForTodoList";



export type PropsType = {
    id: string
    title: string
    tasks: Array<TasksType>
    removeTask: (taskID: string , todolistID: string)=> void
    changeFilterValue: (filter: FilterValuesType, todolistID: string)=> void
    addTask: (title: string, todolistID: string)=>void
    filter: FilterValuesType
    changeCheckStatus: (id:string, isDone: boolean , todolistID: string)=>void
    removeTodoList: (id:string)=>void
    // addToDoList:()=>void

}

export function TodoList (props: PropsType) {


    const addTask = (title: string) => {
       props.addTask(title, props.id)   ////////////////////////////////
    }


    const activeFilterButton = (filter: FilterValuesType)=> props.filter === filter? 'activeFilterButton' : ''
    const setAllFilterValue = ()=>{props.changeFilterValue('all', props.id)}
    const setActiveFilterValue = ()=>{props.changeFilterValue('active', props.id)}
    const setCompletedFilterValue = ()=>{props.changeFilterValue('completed', props.id)}


    const taskJSX = props.tasks.map( task => {
        const changeStatus = (e: ChangeEvent<HTMLInputElement>)=> props.changeCheckStatus(task.id, e.currentTarget.checked, props.id)
        const removeTask =()=> {props.removeTask(task.id, props.id) }

        const getClass = ()=> {
            if(task.isDone) {
                return 'is-done'
            }
            return ''
        }
return(
        <li key={task.id} className={getClass()}>
            <input
                onChange={changeStatus}
                type="checkbox"
                checked={task.isDone}/>
            <span> {task.title} </span>
            <button onClick={removeTask}>X</button>
        </li>
    )
})



    return (
        <div>
            <h3> {props.title}
            <button onClick={ ()=>{props.removeTodoList(props.id) }  } >X</button>
            </h3>
                  <AddFormForTodoList addItem={addTask}/>
            <ul>
                {taskJSX}
            </ul>
            <div>
                <button
                    className={activeFilterButton('all')}
                    onClick={setAllFilterValue}>All</button>
                <button
                    className={activeFilterButton('active')}
                    onClick={setActiveFilterValue}>Active</button>
                <button
                    className={activeFilterButton('completed')}
                    onClick={setCompletedFilterValue }>Completed</button>
            </div>
        </div>
    )

}



