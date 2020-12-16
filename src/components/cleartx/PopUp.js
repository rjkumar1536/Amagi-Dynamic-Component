import React, { Component, useEffect, useRef, useState } from 'react';
import './PopUp.css'

const PopUp = (props)=> {
    const taskName = useRef(null);
    const taskDueDate = useRef(null);
    const taskUserName = useRef(null);
    const taskStateName = useRef(null);
    const [task, setTask] = useState({desc : "", userName : "", dueDate : "", taskState : "planned"})
    const {desc, userName, dueDate, taskState} = task;
    let displayPopUp = props.tasks.isOpenPopUp ? "block" : "none";
    let today = new Date().toISOString().substr(0, 10);
    const handleOk = ()=>{
        if(desc == ""){
            props.updateState({...props.tasks, isOpenPopUp : false}) 
            return;
        }
        let planned = props.tasks[taskState.toLowerCase()].slice();
        props.updateState({...props.tasks, [taskState.toLowerCase()] : [...props.tasks[taskState.toLowerCase()],{id : Math.random()*10000 + 1, desc : desc, userName : userName, dueDate : dueDate}], isOpenPopUp : false}) 
        setTask({desc : "", userName : "", dueDate : today, taskState : "planned"}) 
    }
    const handleCancel = ()=>{
        props.updateState({...props.tasks,isOpenPopUp : false}) 
        setTask({desc : "", userName : "", dueDate : today, taskState : "planned"}) 
    }
    useEffect(()=>{
        setTask({...task, dueDate : today})
    },[])
    const handleChange = (event,ref)=>{
        setTask({...task, [ref.current.id] : ref.current.value })
    }
        return (
            <div style = {{display : displayPopUp}}>
                <div className = "popup">
                    <header className = "header">
                        <h4>Add New Task</h4>
                    </header>
                    <section className = "section">
                        <div className = "leftSection">
                            <div className = "inline">
                                <span>Task Name : </span><input type = "text" placeholder = "New task" value = {desc} ref = {taskName} id = "desc" onChange = {(e)=> handleChange(e,taskName)}/>
                            </div>
                            <div className = "inline">
                                <span>Due Date : </span><input type = "date" value = {dueDate} ref = {taskDueDate} id = "dueDate" onChange = {(e)=> handleChange(e,taskDueDate)}/>
                            </div>
                        </div>
                        <div className = "rightSection">
                            <div className = "inline">
                                <span>Task State : </span>
                                <select value = {taskState} ref = {taskStateName} id = "taskState" onChange = {(e)=> handleChange(e,taskStateName)}>
                                    <option selected>Planned</option>
                                    <option >Started</option>
                                    <option >Completed</option>
                                </select>
                            </div>
                            <div className = "inline">
                                <span>Assignee </span>
                                <select value= {userName} ref = {taskUserName} id = "userName" onChange = {(e)=> handleChange(e,taskUserName)}>
                                    <option >Choose Assignee</option>
                                    {props.tasks.members.map((member, index)=>{
                                        return <option key = {index}>{member.userName}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                    </section>
                    <footer className = "footer">
                        <button className = "ok" onClick = {()=> handleOk()}>OK</button>
                        <button onClick = {()=> handleCancel()} className = "ok">CANCEL</button>
                    </footer>
                </div>
            </div>
        );
}

export default PopUp;