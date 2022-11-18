import React, {PropsWithChildren, useState} from "react";

import Todo from "../models/todo";

type TodosContentObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
}

export const TodosContext = React.createContext<TodosContentObj>({
items: [],
addTodo: () => {},
removeTodo: (id: string) => {},
})

const TodosContextProvider: React.FC<PropsWithChildren> = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (enteredText: string) => {
      const newTodo = new Todo(enteredText);
  
      setTodos((prevTodos) => {
        return prevTodos.concat(newTodo)
      })
    }
  
    const removeTodoHandler = (todoId: string) => {
        setTodos((prevTodos) => {
          return prevTodos.filter(todo => todo.id !== 
          todoId)
        })
    }

    const contextValue:TodosContentObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    };

    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    )
}
export default TodosContextProvider;