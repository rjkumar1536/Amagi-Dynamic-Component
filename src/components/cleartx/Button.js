import React, { Component } from 'react';

const Button = (props)=> {
    const handleAdd = ()=>{
        props.updateState({...props.tasks, isOpenPopUp : true});
    }
        return (
            <div>
                <button onClick = {(e)=>handleAdd(e)}>Add Another Task</button>
            </div>
        );
}

export default Button;