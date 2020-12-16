import React, { Component } from 'react';
import Button from './Button';
import Task from './Task';

const Completed = (props)=> {
    // console.log(props)
        return (
            <div >
                <h1 >Completed </h1>
                <div className = "container">
                    {props.tasks && props.tasks.completed && props.tasks.completed.map((task)=>{
                        return <Task id = {task.id} key = {task.id} desc = {task.desc} dueDate = {task.dueDate} userName = {task.userName}  {...props} taskState = "completed"/>
                    })}
                    <Button {...props} />
                </div>
            </div>
            );
}

export default Completed;