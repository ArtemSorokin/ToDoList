import React, {useReducer, useState} from 'react';
import './App.css';
import {TodoList} from "./TodoList";
import {v1} from "uuid";
import {AddFormForTodoList} from "./AddFormForTodoList";
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {
    addToDoListActionCreator,
    changeFilterValueActionCreator, changeTodoTitleValueActionCreator,
    RemoveToDoListActionCreator,
    todolistsReducer
} from "./reducers/todolists-reducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from "./reducers/tasks-reducer";
import {useDispatch, useSelector} from "react-redux";
import {rootReduser, rootStateType} from "./reducers/srore";
import {TodoListByRedux} from "./TodoListByRedux";


export type TasksType = {
    id: string
    isDone: boolean
    title: string
}
//
export type FilterValuesType = 'all' | 'active' | 'completed'

export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TaskStateType = {
    [key: string]: Array<TasksType>
}


function MenuIcon() {
    return null;
}


function AppWithRedux() {




    const todolists = useSelector<rootStateType, Array<TodolistType>>(state => state.todolists)
  //  const tasks = useSelector<rootStateType, TaskStateType>(state=> state.tasks)

    const dispathForAll = useDispatch()



    // ФУНКЦИИ ДЛЯ ТАСОК НУТРИ ТУДУЛИСТА


    // Измение названия каждой отдельной таски
    const changeTaskTitleValue = (taskId: string, title: string, todolistID: string) => {
        let actiom =changeTaskTitleAC(taskId, title, todolistID)
        dispathForAll(actiom)
    }

    // Удаление таски
    const removeTask = (taskID: string, todolistID: string) => {

        let actiom = removeTaskAC(taskID, todolistID)
        dispathForAll(actiom)
    }


    // добавление тасок в туду лист
    const addTask = (newTaskTitle: string, todolistID: string) => {

        let action = addTaskAC(newTaskTitle, todolistID)
        dispathForAll(action)
    }
    // Изменение чекбокс
    const changeCheckStatus = (taskID: string, isDone: boolean, todolistID: string) => {
      let action = changeTaskStatusAC(taskID, isDone, todolistID )
        dispathForAll(action)
    }
    // Логика смены показываемых тасок

    // ФУНКЦИИ ТУДУЛИСТА

    const removeTodoList = (id: string) => {

        dispathForAll(RemoveToDoListActionCreator(id))
    }
    const addToDoList = (newTitle: string) => {

          let action = addToDoListActionCreator(newTitle)
        dispathForAll(action)

    }
    const changeFilterValue = (filter: FilterValuesType, todolistID: string) =>     {
        dispathForAll(changeFilterValueActionCreator(filter, todolistID))
    }
    const changeTodoTitleValue = (title: string, todolistID: string) => {
        dispathForAll(changeTodoTitleValueActionCreator(title, todolistID))
    }
    const todoListComponents = todolists.map(tl => {
        // let allTodolistTasks = tasks[tl.id]
        //
        // let tasksForTodolist = allTodolistTasks
        //
        // if(tl.filter === "active"){
        //     tasksForTodolist =  tasks[tl.id].filter(task => !task.isDone)
        // }
        // if(tl.filter === "completed"){
        //     tasksForTodolist =  tasks[tl.id].filter(task => task.isDone)
        // }


        return (

            <Grid item key={tl.id}>
                <Paper variant={"elevation"} square={false}>
                    <TodoListByRedux
                        todolist={tl}
                        // title={tl.title}
                        // //
                        // tasks={tasksForTodolist}
                        // removeTask={removeTask}
                        // changeFilterValue={changeFilterValue}
                        // addTask={addTask}
                        // filter={tl.filter}
                        // changeCheckStatus={changeCheckStatus}
                        // removeTodoList={removeTodoList}
                        // changeTaskTitleValue={changeTaskTitleValue}
                        // changeTodoTitleValue={changeTodoTitleValue}
                    />
                </Paper>
            </Grid>
        )
    })
    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar style={{justifyContent: 'space-between'}}>
                    <IconButton edge="start" aria-label="menu">
                        <Menu color={'secondary'}/>
                    </IconButton>
                    <Typography variant="h5">
                        Menu
                    </Typography>
                    <Button variant={"outlined"} style={{color: 'deeppink'}}> Logout</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container style={{padding: '10px'}}>
                    <AddFormForTodoList addItem={addToDoList}/>
                </Grid>
                <Grid container spacing={5}>
                    {todoListComponents}
                </Grid>
            </Container>
        </div>
    );
}

export default AppWithRedux;