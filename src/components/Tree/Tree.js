import React, { Component } from 'react';
import TreeNode from './TreeNode';

const Tree = (props)=> {
        return (
                <ul>
                    {
                        props.data.map((item)=>{
                            return <TreeNode node = {item}/>
                        })
                    }
                </ul>
        );
}

export default Tree;