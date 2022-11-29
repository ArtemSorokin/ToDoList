import React, {ChangeEvent, KeyboardEvent, memo, useState} from 'react';
import {Button, Container, TextField} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import AddBoxIcon from '@material-ui/icons/AddBox';


 export type AddFormForTodoListPropsType = {
   addItem:(title:string)=> void
}


 export const AddFormForTodoList = memo((props: AddFormForTodoListPropsType) => {

     console.log('AddFormFor - Отрисовался')

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

             <TextField id="outlined-basic" label="Name a task" variant="outlined"
                        className={error ? 'errorInput' : ''}
                        value={title}
                        onChange={changeTitle}
                        onKeyPress={changeTitleByBut}
                        helperText={error && errorMessage}
                        error={error}

             />
             <Button color={ 'primary'}>
                 <AddBoxIcon fontSize={'large'} onClick={addTask}/>
             </Button>

         </div>
     );
 } )

