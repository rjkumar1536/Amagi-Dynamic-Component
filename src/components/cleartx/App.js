import { Component, useEffect, useState } from 'react';
import './App.css';
// import EditPopUp from './components/EditPopUp';
// import Header from './components/Header';
// import Main from './components/Main';
// import PopUp from './components/PopUp';
// import Task from './components/Task';
// import Tree from './components/Tree/Tree';
const treeData = [
  {
    key: "0",
    label: "Documents",
    icon: "fa fa-folder",
    title: "Documents Folder",
    children: [
      {
        key: "0-0",
        label: "Document 1-1",
        icon: "fa fa-folder",
        title: "Documents Folder",
        children: [
          {
            key: "0-1-1",
            label: "Document-0-1.doc",
            icon: "fa fa-file",
            title: "Documents Folder",
          },
          {
            key: "0-1-2",
            label: "Document-0-2.doc",
            icon: "fa fa-file",
            title: "Documents Folder",
          },
          {
            key: "0-1-3",
            label: "Document-0-3.doc",
            icon: "fa fa-file",
            title: "Documents Folder",
          },
          {
            key: "0-1-4",
            label: "Document-0-4.doc",
            icon: "fa fa-file",
            title: "Documents Folder",
          },
        ],
      },
    ],
  },
  {
    key: "1",
    label: "Desktop",
    icon: "fa fa-desktop",
    title: "Desktop Folder",
    children: [
      {
        key: "1-0",
        label: "document1.doc",
        icon: "fa fa-file",
        title: "Documents Folder",
      },
      {
        key: "0-0",
        label: "documennt-2.doc",
        icon: "fa fa-file",
        title: "Documents Folder",
      },
    ],
  },
  {
    key: "2",
    label: "Downloads",
    icon: "fa fa-download",
    title: "Downloads Folder",
    children: [],
  },
];

function App() {
  const [xyz, setXYZ] = useState(0);
  useEffect(()=>{
    console.log(xyz);
    return function(){
      console.log('hello')
    }
  },[xyz])
  // const [tasks, updateState] = useState({planned : [], started : [], completed : [], members : [{userName :"Rajender", id : 1}, {userName : "Gorishanker", id : 2}, {userName :"Saurabh", id : 3}, {userName: "Manit",id : 4}, {userName: "Aneesh",id : 5}, {userName : "Aayush",id : 6}, {userName : "Sahil",id : 7}, {userName : "Naveen", id : 8}], isOpenPopUp : false, isEditOpenPopUp : false, editId : "", editUserName : "",editDesc : "", editTaskState : "", editDueDate : "" });
//  console.log(xyz)
  return (
    <div className="App">
      {/* <Header members = {tasks.members} tasks = {tasks}/>
      <Main tasks = {tasks} updateState = {updateState} />
      <PopUp tasks = {tasks} updateState = {updateState}/>
      <EditPopUp tasks = {tasks} updateState = {updateState} /> */}
      {/* <Tree data = {treeData} /> */}
      <button onClick = {()=> setXYZ(xyz + 1)}></button>
    </div>
  );
}

// class App extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       xyz : 0,
//       yz : 1
//     }
//     console.log('1');
//   }
//   componentWillMount(){
//     console.log('2');
//   }
//   componentDidMount(){
//     console.log('4');
//   }
//   componentDidUpdate(){
//     console.log('6');
//   }
//   shouldComponentUpdate(){
//     console.log('5');
//     return true;
//   }
//   componentWillUnmount(){
//     console.log('7');
//   }
//   render(){
//     console.log('3');
//   return <button onClick = {()=>{this.setState({xyz : 2 })}}>{JSON.stringify(this.state)}</button>
//   }
// }

export default App;
