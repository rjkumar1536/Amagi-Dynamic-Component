import { Component, useEffect, useRef, useState } from 'react';
import './App.css';
function App() {
  const [selectedValue, setSelectedValue] = useState('');
  const selectRef = useRef(null);
  const textInputRef1 = useRef(null);
  const radioButtonRef = useRef(null);
  const checkBoxRef = useRef(null);
  const textInputRef2 = useRef(null);
  const handleSelect = (e)=>{
    setSelectedValue(selectRef.current.value);
  }
  return (
    <div className="App">
      <form>
        <div>
          <label htmlFor = "profile">Profile</label>
          <select ref = {selectRef} id = "profile" onChange = {(e)=> handleSelect(e)}>
              <option value = "">Select Value</option>
              <option name = "a1" value = "a1">a1</option>
              <option name = "a2" value = "a2">a2</option>
              <option name = "a3" value = "a3">a3</option>
              <option name = "a4" value = "a4">a4</option>
          </select>
        </div>
        {
          selectedValue == 'a1' ?  <div>
              <label htmlFor = "name">Fullname</label>
              <input id = "name" type = "text" ref = {textInputRef1}/>
              <input type = "radio" name = "time" id = "day" ref = {radioButtonRef} />
              <label htmlFor = "day">Day</label>
          </div> : selectedValue != '' ? <div>
              < label htmlFor = "onsite">onsite</label>
              <input id = "onsite" type = "checkbox" ref = {checkBoxRef}/>
              <label htmlFor = "role">Role</label>
              <input type = "text" name = "role" id = "role" ref = {textInputRef2} />
          </div> : null
        }
      </form>
    </div>
  );
}

export default App;
