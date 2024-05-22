import React, { useState } from 'react';

const TodoInput = function(props) {

    const { handleAddTodos, todoValue, setTodoValue} = props;  //destructure

    return (
        <>
            <header>
                <input 
                    value={todoValue} 
                    onChange={(e) => {setTodoValue(e.target.value)}}
                    placeholder="Enter todo..." 
                />
                <button onClick={() => {
                    handleAddTodos(todoValue);
                    setTodoValue(''); // Clear input after adding the todo
                }}>
                    Add
                </button>
            </header>
        </>
    );
}

export default TodoInput;
