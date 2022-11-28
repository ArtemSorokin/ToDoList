import React, {useReducer, useState} from 'react';
// import './App.css';
// import {TodoList} from "./TodoList";
// import {v1} from "uuid";
// import {AddFormForTodoList} from "./AddFormForTodoList";
// import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
// import {Menu} from "@material-ui/icons";
// import {
//     addToDoListActionCreator,
//     changeFilterValueActionCreator, changeTodoTitleValueActionCreator,
//     RemoveToDoListActionCreator,
//     todolistsReducer
// } from "./reducers/todolists-reducer";
// import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from "./reducers/tasks-reducer";
//
//
// export type TasksType = {
//     id: string
//     isDone: boolean
//     title: string
// }
// //
// export type FilterValuesType = 'all' | 'active' | 'completed'
//
// export type TodolistType = {
//     id: string
//     title: string
//     filter: FilterValuesType
// }
//
// export type TaskStateType = {
//     [key: string]: Array<TasksType>
// }
//
//
// function MenuIcon() {
//     return null;
// }
//
//
// function AppWithReducer() {
//     const todolistID_1 = v1()
//     const todolistID_2 = v1()
//
//     const [todolists, dispathToTodolist] = useReducer(todolistsReducer, [
//         {id: todolistID_1, title: 'What to learn', filter: 'all'},
//         {id: todolistID_2, title: 'What to Buy', filter: 'all'}
//     ])
//
// const [tasks, dispathToTask] = useReducer(tasksReducer,{
//     [todolistID_1]: [
//         {id: v1(), isDone: true, title: 'HTML'},
//         {id: v1(), isDone: false, title: 'css'},
//         {id: v1(), isDone: false, title: 'js'}
//     ],
//     [todolistID_2]: [
//         {id: v1(), isDone: true, title: 'Milk'},
//         {id: v1(), isDone: false, title: 'Beer'},
//         {id: v1(), isDone: false, title: 'Lemon'}
//     ]
// } )
//
//
//
//     // ФУНКЦИИ ДЛЯ ТАСОК НУТРИ ТУДУЛИСТА
//
//
//     // Измение названия каждой отдельной таски
//     const changeTaskTitleValue = (taskId: string, title: string, todolistID: string) => {
//         let actiom =changeTaskTitleAC(taskId, title, todolistID)
//             dispathToTask(actiom)
//     }
//
//     // Удаление таски
//     const removeTask = (taskID: string, todolistID: string) => {
//
//         let actiom = removeTaskAC(taskID, todolistID)
//         dispathToTask(actiom)
//     }
//
//
//     // добавление тасок в туду лист
//     const addTask = (newTaskTitle: string, todolistID: string) => {
//
//         let action = addTaskAC(newTaskTitle, todolistID)
//         dispathToTask(action)
//     }
//     // Изменение чекбокс
//     const changeCheckStatus = (taskID: string, isDone: boolean, todolistID: string) => {
//       let action = changeTaskStatusAC(taskID, isDone, todolistID )
//       dispathToTask(action)
//     }
//     // Логика смены показываемых тасок
//     const getTaskForRender = (todolist: TodolistType) => {
//         switch (todolist.filter) {
//             case 'active':
//                 return tasks[todolist.id].filter(task => !task.isDone)
//             case 'completed':
//                 return tasks[todolist.id].filter(task => task.isDone)
//             default:
//                 return tasks[todolist.id]
//         }
//     }
//
//     // ФУНКЦИИ ТУДУЛИСТА
//
//     // Удалеине тудулиста
//     const removeTodoList = (id: string) => {
//
//         dispathToTodolist(RemoveToDoListActionCreator(id))
//     }
//     // Добавлеине туду листа
//
//     const addToDoList = (newTitle: string) => {
//         debugger
//           let action = addToDoListActionCreator(newTitle)
//         dispathToTodolist(action)
//         dispathToTask(action)
//
//     }
//
//     // Какие таски показывать, активные или нет.
//
//     const changeFilterValue = (filter: FilterValuesType, todolistID: string) =>     {
//        dispathToTodolist(changeFilterValueActionCreator(filter, todolistID))
//     }
//     // Меняет название тудулиста
//
//     const changeTodoTitleValue = (title: string, todolistID: string) => {
//
//         dispathToTodolist(changeTodoTitleValueActionCreator(title, todolistID))
//     }
//
//     const todoListComponents = todolists.map(tl => {
//
//         const taskForRender = getTaskForRender(tl)
//         return (
//             <Grid item key={tl.id}>
//                 <Paper variant={"elevation"} square={false}>
//                     <TodoList
//
//                         id={tl.id}
//                         title={tl.title}
//                         //
//                         tasks={taskForRender}
//                         removeTask={removeTask}
//                         changeFilterValue={changeFilterValue}
//                         addTask={addTask}
//                         filter={tl.filter}
//                         changeCheckStatus={changeCheckStatus}
//                         removeTodoList={removeTodoList}
//                         changeTaskTitleValue={changeTaskTitleValue}
//                         changeTodoTitleValue={changeTodoTitleValue}
//                     />
//                 </Paper>
//             </Grid>
//         )
//     })
//     return (
//         <div className="App">
//             <AppBar position="static">
//                 <Toolbar style={{justifyContent: 'space-between'}}>
//                     <IconButton edge="start" aria-label="menu">
//                         <Menu color={'secondary'}/>
//                     </IconButton>
//                     <Typography variant="h5">
//                         Menu
//                     </Typography>
//                     <Button variant={"outlined"} style={{color: 'deeppink'}}> Logout</Button>
//                 </Toolbar>
//             </AppBar>
//             <Container fixed>
//                 <Grid container style={{padding: '10px'}}>
//                     <AddFormForTodoList addItem={addToDoList}/>
//                 </Grid>
//                 <Grid container spacing={5}>
//                     {todoListComponents}
//                 </Grid>
//             </Container>
//         </div>
//     );
// }
//
// export default AppWithReducer;