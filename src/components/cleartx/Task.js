import React, { Component } from 'react';
import './Task.css'

const Task = (props)=> {
        const handleDoubleClick = ()=>{
            props.updateState({...props.tasks, editId : props.id, editUserName : props.userName,editDesc : props.desc, editTaskState : props.taskState, editDueDate : props.dueDate, isEditOpenPopUp : true })
        }
        let today = new Date().toISOString().substr(0, 10);
        let indicator = {
            backgroundColor : "white"
        }
        console.log(props.dueDate, today)
        if(props.dueDate > today && props.taskState == "completed"){
            indicator.backgroundColor = "green"
            console.log('hello')
        }
        else if(props.dueDate < today && props.taskState != "completed"){
            indicator.backgroundColor = 'red';
        } 
        return (
            <div className = "paper" onDoubleClick = {()=>handleDoubleClick()}>
                <div className = "task">
                    <h3>{props.desc}</h3>
                    <p>Due : {props.dueDate}</p>    
                    <p>{props.userName}</p> 
                    <p className = "indicator" style = {indicator}></p>
                </div>
            </div>
        );
}

export default Task;