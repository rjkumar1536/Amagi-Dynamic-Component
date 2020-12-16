import React, { Component, useEffect, useRef, useState } from 'react';
import './PopUp.css'

const EditPopUp = (props)=> {
    const taskName = useRef(null);
    const taskDueDate = useRef(null);
    const taskUserName = useRef(null);
    const taskStateName = useRef(null);
    const [task, setTask] = useState({desc : "", userName : "", dueDate : "", taskState :""})
    const {desc, userName, dueDate, taskState} = task;
    let displayPopUp = props.tasks.isEditOpenPopUp ? "block" : "none";
    useEffect(()=>{
        if(desc == "" && userName == "" && dueDate == "" && taskState == "" && props.tasks.isEditOpenPopUp){
            setTask({...task,desc : props.tasks.editDesc, userName : props.tasks.editUserName, dueDate : props.tasks.editDueDate, taskState : props.tasks.editTaskState});
        }
    })
    const handleOk = ()=>{
        if(desc == ""){
            props.updateState({...props.tasks, isEditOpenPopUp : false,editId : "", editUserName : "",editDesc : "", editTaskState : "", editDueDate : "" }) 
            return;
        }
        if(taskState.toLowerCase() == props.tasks.editTaskState){
            let selectedTask = props.tasks[taskState.toLowerCase()].filter((task)=>{
                return task.id == props.tasks.editId
            });
            let unSelectedTask = props.tasks[taskState.toLowerCase()].filter((task)=>{
                return task.id != props.tasks.editId
            });
            selectedTask[0].desc = desc;
            selectedTask[0].userName = userName;
            selectedTask[0].dueDate = dueDate;
            props.updateState({...props.tasks, [taskState.toLowerCase()] : [...selectedTask, ...unSelectedTask], isEditOpenPopUp : false,editId : "", editUserName : "",editDesc : "", editTaskState : "", editDueDate : "" }) 
        }
        else{
            console.log(props.tasks.taskState, props.tasks);
            let filteredTask = props.tasks[props.tasks.editTaskState].filter((task)=>{
                return task.id != props.tasks.editId
            });
            let addedTask = [{id : Math.random()*10000 + 1, desc : desc, userName : userName, dueDate : dueDate,}];

            props.updateState({...props.tasks, [taskState.toLowerCase()] : [...props.tasks[taskState.toLowerCase()], ...addedTask],[props.tasks.editTaskState] : [...filteredTask], isEditOpenPopUp : false,editId : "", editUserName : "",editDesc : "", editTaskState : "", editDueDate : "" })

        }
        setTask({desc : "", userName : "", dueDate : "", taskState : ""}) 
    }
    const handleCancel = ()=>{
        props.updateState({...props.tasks,isEditOpenPopUp : false,editId : "", editUserName : "",editDesc : "", editTaskState : "", editDueDate : "" }) ;
        setTask({desc : "", userName : "", dueDate : "", taskState : ""}) 
    }
    const handleChange = (event,ref)=>{
        setTask({...task, [ref.current.id] : ref.current.value })
    }
        return (
            <div style = {{display : displayPopUp}}>
                <div className = "popup">
                    <header className = "header">
                        <h4>Edit Task</h4>
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
                                    <option value = "planned">Planned</option>
                                    <option value = "started">Started</option>
                                    <option value = "completed">Completed</option>
                                </select>
                            </div>
                            <div className = "inline">
                                <span>Assignee </span>
                                <select value= {userName} ref = {taskUserName} id = "userName" onChange = {(e)=> handleChange(e,taskUserName)}>
                                    <option selected >Choose Assignee</option>
                                    {props.tasks.members.map((member, index)=>{
                                        return <option key = {index} >{member.userName}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                    </section>
                    <footer className = "footer">
                        <button onClick = {()=> handleOk()} className = "ok">OK</button>
                        <button onClick = {()=> handleCancel()} className = "ok">CANCEL</button>
                    </footer>
                </div>
            </div>
        );
}

export default EditPopUp;