import React, {ChangeEvent} from 'react';
import {Checkbox, IconButton} from "@material-ui/core";
import EditableSpan from "./EditableSpan";
import DeleteIcon from "@material-ui/icons/Delete";
import {TasksType} from "./AppWithRedux";
import {changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./reducers/tasks-reducer";


export type TaskSeparetedComponentPropsType = {
    task: TasksType
    changeStatus: (taskId: string, title: string, todolistID: string) => void
    renameTaskTitle: (taskId: string, title: string, todolistID: string) => void
    removeTask:(taskID: string, todolistID: string)=> void

}

export const Task = ({
                         task,
                         changeStatus,
                         renameTaskTitle,
                         removeTask,
                         getClass

                     }: TaskSeparetedComponentPropsType) => {

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
        <div>
            <li key={task.id} className={getClass}>
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

        </div>
    );
};

