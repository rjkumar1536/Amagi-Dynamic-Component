import React, { Component } from 'react';
import Completed from './Completed';
import Planned from './Planned';
import Started from './Started';
import './Main.css'

const Main = (props)=> {
        return (
            <div className = "tasks">
                <Planned tasks = {props.tasks} updateState = {props.updateState}/>
                <Started tasks = {props.tasks}  updateState = {props.updateState} />
                <Completed tasks = {props.tasks} updateState = {props.updateState} />
            </div>
        );
}

export default Main;