import React, { Component, useState } from 'react';
import Tree from './Tree'

const TreeNode = (props)=> {
        const [childVisibility, setChildVisibility] = useState(false)
        const hasChild = props.node.children ? true : false;
        return (
            <li>
                <div onClick = {()=> setChildVisibility(v => !v)}>
                    {props.node.label}
                </div>
                {
                    hasChild && childVisibility && <Tree data = {props.node.children} />
                }
            </li>
        );
}

export default TreeNode;