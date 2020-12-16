import React, { Component } from 'react';
import Button from './Button';
import Task from './Task';

const Started = (props)=> {
        return (
            <div >
                <h1 >Started</h1>
                <div className = "container">
                    {props.tasks && props.tasks.started && props.tasks.started.map((task)=>{
                        return <Task id = {task.id} key = {task.id} desc = {task.desc} dueDate = {task.dueDate} userName = {task.userName}  {...props} taskState = "started"/>
                    })}
                    <Button {...props} />
                </div>
            </div>
        );
}

export default Started;