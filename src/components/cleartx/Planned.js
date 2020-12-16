import React, { Component } from 'react';
import Button from './Button';
import Task from './Task';
import './Category.css'

const Planned = (props)=> {
        return (
            <div >
                <h1 >Planned</h1>
                <div className = "container">
                    { props.tasks && props.tasks.planned && props.tasks.planned.map((task)=>{
                        return <Task id = {task.id} key = {task.id} desc = {task.desc} dueDate = {task.dueDate} userName = {task.userName}  {...props} taskState = "planned"/>
                    })}
                    <Button {...props}/>
                </div>
            </div>
        );
}

export default Planned;