import React, {useRef, useContext} from 'react';

import {TodosContext} from '../store/todos-context';
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
const todosCtx = useContext(TodosContext);

const todoText = useRef<HTMLInputElement>(null)

const submitHandler = (event:React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoText.current!.value;

    if(enteredText.trim().length === 0){
        // throw an error
        return;
    }

    todosCtx.addTodo(enteredText)

    todoText.current!.value = ''
}

return (
    <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="Todo text"></label>
        <input type="text" id='text' ref={todoText}/>
        <button>Add Todo</button>
    </form>
)
}

export default NewTodo;