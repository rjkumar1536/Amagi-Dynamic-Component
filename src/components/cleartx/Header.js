import React, { Component } from 'react';
import './Header.css'
const Header = (props)=> {
        return (
            <div className = "header">
                <h1>Kanan Board</h1>
                <div>
                {props.members && props.members.map((member, index)=>{
                        return <span key = {index} className = "avatar">{member.userName}</span>
                    })}
                </div>
            </div>
        );
}

export default Header;