import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Button, Container, TextField} from "@material-ui/core";


import {AddFormForTodoList} from "../AddFormForTodoList";
import {action} from "@storybook/addon-actions";
import AddBoxIcon from "@material-ui/icons/AddBox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'AddItemForm',
    component: AddFormForTodoList,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        addItem: {description: 'Button clicked inside Form'},
    },
} as ComponentMeta<typeof AddFormForTodoList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AddFormForTodoList> = (args) => <AddFormForTodoList {...args} />;


export const AddFormBaseExample = Template.bind({})

AddFormBaseExample.args = {
    addItem: action('Name from title send to store')
}




const Template2: ComponentStory<typeof AddFormForTodoList> = (args) => {


    let [title, setTitle] = useState<string>('')
    let [error, setError] = useState<boolean>(true)

    const errorMessage = <div style={{color: "red"}}> Title is Required </div>

    // функции
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(false)
    }

    const changeTitleByBut = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTask()
        }
    }

    const addTask = () => {
        const trimedTitle = title.trim()
        if (trimedTitle) {
            args.addItem(trimedTitle)

        } else {
            setError(true)

        }

        setTitle('')
    }

    return (
        <div>

            <TextField id="outlined-basic" label="Name a task" variant="outlined"
                       className={error ? 'errorInput' : ''}
                       value={title}
                       onChange={changeTitle}
                       onKeyPress={changeTitleByBut}
                       helperText={error && errorMessage}
                       error={error}

            />
            <Button color={'primary'}>
                <AddBoxIcon fontSize={'large'} onClick={addTask}/>
            </Button>

        </div>
    );
}


export const AddFormBaseExampleWithError = Template2.bind({})

AddFormBaseExampleWithError.args = {
    addItem: action('Name from title send to store')
}