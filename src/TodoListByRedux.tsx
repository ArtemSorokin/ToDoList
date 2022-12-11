import React, {ChangeEvent, memo, useCallback} from "react";
import {FilterValuesType, TaskStateType, TasksType} from "./AppWithRedux";
import {AddFormForTodoList} from "./AddFormForTodoList";
import EditableSpan from "./EditableSpan";
import {Button, Checkbox, IconButton} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import {TodolistType} from "./AppWithRedux";
import {useDispatch, useSelector} from "react-redux";
import {rootReduser, rootStateType} from "./reducers/srore";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./reducers/tasks-reducer";
import {
    changeFilterValueActionCreator,
    changeTodoTitleValueActionCreator,
    RemoveToDoListActionCreator,
    todolistsReducer
} from "./reducers/todolists-reducer";
import {Task} from "./Task";


export type PropsType = {
    // id: string
    // title: string
    // tasks: Array<TasksType>
    // removeTask: (taskID: string, todolistID: string) => void
    // changeFilterValue: (filter: FilterValuesType, todolistID: string) => void
    // addTask: (title: string, todolistID: string) => void
    // filter: FilterValuesType
    // changeCheckStatus: (id: string, isDone: boolean, todolistID: string) => void
    // removeTodoList: (id: string) => void
    // changeTaskTitleValue: (taskId: string, title: string, todolistID: string) => void
    // changeTodoTitleValue: (title: string, todolistID: string) => void
    todolist: TodolistType
}

export const TodoListByRedux = memo(({todolist}: PropsType) => {
    console.log('Todolist')

    const {id, title, filter} = todolist

    let tasks = useSelector<rootStateType, Array<TasksType>>(state => state.tasks[id])
    let dispatch = useDispatch()
    const activeFilterButton = (filter: FilterValuesType) => filter === filter ? 'activeFilterButton' : ''

/// лишняя отрисовка зачем я написал юзколлбэк ?

    const addTask = useCallback((title: string) => {

        dispatch(addTaskAC(title, id))
    }, [dispatch])
    const removeTodoList = () => {
        let action = RemoveToDoListActionCreator(id)
        dispatch(action)
    }
    const setAllFilterValue = useCallback(() => {
        dispatch(changeFilterValueActionCreator('all', id))
    }, [filter, id])
    const setActiveFilterValue = useCallback(() => {
        dispatch(changeFilterValueActionCreator('active', id))
    }, [filter, id])
    const setCompletedFilterValue = useCallback(() => {
        dispatch(changeFilterValueActionCreator('completed', id))
    }, [filter, id])
    const renameTodolistTitle = useCallback((newTitle: string) => {
        dispatch(changeTodoTitleValueActionCreator(newTitle, id))
    }, [id])


    //Tasks


    let tasksForRender = tasks
    if (filter === "active") {
        tasksForRender = tasks.filter(task => !task.isDone)
    }
    if (filter === "completed") {
        tasksForRender = tasks.filter(task => task.isDone)
    }

    const changeStatus = useCallback((taskId: string, isDone: boolean) => {
        dispatch(changeTaskStatusAC(taskId, isDone, id))
    }, [dispatch])
    const removeTask = useCallback((taskId: string) => {
        dispatch(removeTaskAC(taskId, id))
    }, [dispatch])
    const renameTaskTitle = useCallback((taskId: string, newTitle: string) => {
        dispatch(changeTaskTitleAC(taskId, newTitle, id))
    }, [dispatch])

    const taskJSX = tasksForRender.map((task) => {


        return <Task task={task} changeStatus={changeStatus} renameTaskTitle={renameTaskTitle} removeTask={removeTask}/>
    })


    return (
        <div>

            <h3>
                <EditableSpan title={title} renameTaskTitle={renameTodolistTitle}/>

                <Button>
                    <DeleteIcon onClick={removeTodoList}/>

                </Button>
            </h3>
            <AddFormForTodoList addItem={addTask}/>
            <ul>
                {taskJSX}
            </ul>
            <div>
                <ButtonComponent

                    // style={ {margin: '3px'}}
                    size={'small'}
                    variant={'contained'}
                    color={'default'}
                    filterValue={filter}
                    setFilterValue={setAllFilterValue}
                    titleButton='all'
                />
                <ButtonComponent
                    size={'small'}
                    color={'default'}
                    variant={'contained'}
                    filterValue={filter}
                    setFilterValue={setActiveFilterValue}
                    titleButton='active'
                />
                <ButtonComponent
                    size={'small'}
                    variant={'contained'}
                    color={'default'}
                    setFilterValue={setCompletedFilterValue}
                    titleButton='completed'
                    filterValue={filter}
                />

            </div>
        </div>
    )

})
type ButtonComponentPropsType = {
    size: 'small' | 'medium' | 'large'
    color: 'inherit' | 'primary' | 'secondary' | 'default'
    variant: 'text' | 'outlined' | 'contained'
    titleButton: FilterValuesType
    setFilterValue: () => void
    filterValue: string
}

export const ButtonComponent = memo((props: ButtonComponentPropsType) => {
    console.log('ButtonComponent')

    return (
        <Button
            size={props.size}
            color={props.titleButton === props.filterValue ? 'secondary' : 'primary'}
            variant={props.variant}
            onClick={props.setFilterValue}> {props.titleButton}
        </Button>
    )


})



