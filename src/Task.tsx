import React, {ChangeEvent, memo} from 'react';
import {Checkbox, IconButton} from "@material-ui/core";
import EditableSpan from "./EditableSpan";
import DeleteIcon from "@material-ui/icons/Delete";
import {TasksType} from "./AppWithRedux";



export type TaskSeparetedComponentPropsType = {
    task: TasksType
    changeStatus: (taskId: string, isDone: boolean) => void
    renameTaskTitle: (taskId: string, title: string) => void
    removeTask:(taskID: string)=> void


}

export const Task = React.memo(({
                         task,
                         changeStatus,
                         renameTaskTitle,
                         removeTask,
                     }: TaskSeparetedComponentPropsType) => {

    console.log('TaskRedered')

    const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
        changeStatus(task.id, e.currentTarget.checked)

    }
    const removeTaskItem = () => {
        removeTask(task.id)
    }
    const renameTaskTitleValue = () => {
        renameTaskTitle(task.id,task.title)
    }

    const getClass = () => {
        if (task.isDone) {
            return 'is-done'
        }
        return ''
    }

    return (
        <div>
            <li key={task.id} className={getClass()}>
                <Checkbox
                    defaultChecked
                    color="primary"
                    inputProps={{'aria-label': 'secondary checkbox'}}
                    checked={task.isDone}
                    onChange={changeTaskStatus}
                />
                <EditableSpan title={task.title} renameTaskTitle={renameTaskTitleValue}/>
                <IconButton>
                    <DeleteIcon onClick={removeTaskItem}/>
                </IconButton>
            </li>

        </div>
    );
});

