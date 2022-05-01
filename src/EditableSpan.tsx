import React, {ChangeEvent, useState} from 'react';

export type EditableSpanPropsType = {

    title: string
    renameTaskTitle: (title:string)=>void
}



const EditableSpan = (props: EditableSpanPropsType) => {
    let [title, setTitle] = useState<string>(props.title)
    let [editableMod, setEditableMod] = useState<boolean>(false)

    const OnEditableMod = ()=> {
        setEditableMod(true)
    }

    const OffEditableMod = ()=> {


        setEditableMod(false)
        props.renameTaskTitle(title)
    }
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }


    return (
        editableMod? <input onBlur={OffEditableMod} autoFocus value={title} onChange={onChangeHandler}/> : <span onDoubleClick={OnEditableMod} > {props.title}</span>
    );
};

export default EditableSpan;