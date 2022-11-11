import React, {ChangeEvent} from "react";
import {FilterValuesType, TaskStateType, TasksType} from "./App";
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
    changeTodoTitleValueActionCreator, RemoveToDoListActionCreator,
    todolistsReducer
} from "./reducers/todolists-reducer";


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
    id: string
    title: string
    filter: FilterValuesType
}

export const TodoListByRedux: React.FC<PropsType> = (
    {id,title,filter  } )=> {


    let tasks = useSelector<rootStateType, TaskStateType>(state => state.tasks)

    let dispatch = useDispatch()


    const addTask = (title: string) => {
        debugger
        dispatch(addTaskAC(title, id))
    }
    const removeTodoList = ()=> {             /// //////////////////////////////////////////////////////////////////////
        let action = RemoveToDoListActionCreator(id)
        dispatch(action)
    }

    const activeFilterButton = (filter: FilterValuesType) => filter === filter ? 'activeFilterButton' : ''

    const setAllFilterValue = () => {

    }
    const setActiveFilterValue = () => {
        dispatch(changeFilterValueActionCreator('active', id))
    }
    const setCompletedFilterValue = () => {
        dispatch(changeFilterValueActionCreator('completed', id))
    }
    const renameTodolistTitle = (newTitle: string) => {
       dispatch(changeTodoTitleValueActionCreator(newTitle, id))
    }



    const taskJSX = tasks.map( (task:TasksType) => {

        const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(changeTaskStatusAC(task.id, e.currentTarget.checked, id))
        }
        const removeTask = () => {
            dispatch(removeTaskAC(task.id, id))
        }
        const renameTaskTitle = (newTitle: string) => {
            dispatch(changeTaskTitleAC(task.id, newTitle, id))
        }

        const getClass = () => {
            if (task.isDone) {
                return 'is-done'
            }
            return ''
        }
        return (
            <li key={task.id} className={getClass()}>
                <Checkbox
                    defaultChecked
                    color="primary"
                    inputProps={{'aria-label': 'secondary checkbox'}}
                    checked={task.isDone}
                    onChange={changeStatus}
                />
                <EditableSpan title={task.title} renameTaskTitle={renameTaskTitle}/>
                <IconButton>
                    <DeleteIcon onClick={removeTask}/>
                </IconButton>
            </li>
        )
    })

// // тут название тудулиста в h3

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
                <Button

                    // style={ {margin: '3px'}}
                    size={'small'}
                    variant={'contained'}
                    color={filter === 'all' ? 'secondary' : 'primary'}
                    // className={activeFilterButton('all')}
                    onClick={setAllFilterValue}>All
                </Button>
                <Button
                    size={'small'}
                    color={filter === 'active' ? 'secondary' : 'primary'}
                    variant={'contained'}
                    className={activeFilterButton('active')}
                    onClick={setActiveFilterValue}>Active
                </Button>
                <Button
                    size={'small'}
                    style={{marginLeft: '3px'}}
                    variant={'contained'}
                    color={filter === 'completed' ? 'secondary' : 'primary'}

                    className={activeFilterButton('completed')}
                    onClick={setCompletedFilterValue}>Completed
                </Button>
            </div>
        </div>
    )

}



