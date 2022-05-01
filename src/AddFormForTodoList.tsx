import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

 export type AddFormForTodoListPropsType = {
   addItem:(title:string)=> void
}



const AddFormForTodoList = (props: AddFormForTodoListPropsType) => {
    let [title, setTitle] = useState<string>('')
    let [error, setError] = useState<boolean>(false)

    const errorMessage = <div style={ {color: "red"} }> Title is Required </div>


    // функции
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(false)
    }

    const changeTitleByBut = (e: KeyboardEvent<HTMLInputElement>)=> {
        if(e.key === 'Enter'){
            addTask()
        }
    }

    const addTask = () => {
        const trimedTitle = title.trim()
        if(trimedTitle) {
            props.addItem(trimedTitle)

        } else {
            setError(true)

        }

        setTitle('')
    }

    return (
        <div>
            <input
                className={ error? 'errorInput': ''}
                value={title}
                onChange={changeTitle}
                onKeyPress={changeTitleByBut}
            />
            <button onClick={addTask}>+</button>
            {error && errorMessage}
        </div>
    );
};

export default AddFormForTodoList;