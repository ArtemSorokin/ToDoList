import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';



import {AddFormForTodoList} from "../AddFormForTodoList";
import {action} from "@storybook/addon-actions";
import AddBoxIcon from "@material-ui/icons/AddBox";
import {Task} from "../Task";
import {TasksType} from "../AppWithRedux";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'TaskStories',
    component: Task,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // args - это пропсы общие для всех
    args: {
        task:   {id: 'taskID', isDone: true, title: 'Task1'},

        changeStatus: action('changeStatus'),
        renameTaskTitle: action('renameTaskTitle'),
        removeTask:action('removeTask'),
        todolistId: '123456'
    }

} as ComponentMeta<typeof Task>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;


export const TaskIsDoneExample = Template.bind({})

TaskIsDoneExample.args = {

}

export const TaskInProgresExample = Template.bind({})

// TaskInProgresExample.args = {
//     // в новой истории переопределит task определенный выше в args
//     task:   {id: 'taskID', isDone: false, title: 'Task2'},
//
// }

const Template1: ComponentStory<typeof Task> = (args) =>{
    const [task , setTask] = useState({id: 'taskID', isDone: false, title: 'Task2'})
    const changeStatus = (taskId: string, isDone: boolean)=>{
        setTask({id: 'taskID', isDone: !task.isDone, title: 'Task2'})
    }
    const renameTaskTitle = (taskId: string, title: string) => {

        debugger
          setTask({id: 'ddd', isDone: false, title: title})
    }
    const removeTask = ()=> {
        alert('removed Task')
    }

    return (

    <Task task={task} changeStatus={changeStatus} renameTaskTitle={renameTaskTitle} removeTask={removeTask} />
)}

export const TaskfullVersion = Template1.bind({})

