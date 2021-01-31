import React from "react"
import './App.css';
import {Checkbox } from "./Hook"

function App() {
  const defaultValue=[1]
  const list=[{
    value:1,
    label:'第一'
  },{
    value:2,
    label:'第二'
  },{
    value:3,
    label:'第三',
    disabled:true
  }]
  const onChangeItem=(e)=>{
    console.log(`checkedValue`,e.target.checked)
  }
  const onChange=(checkedValues)=>{
    console.log(`checkedValues`,checkedValues)
  }
  return (
    <div className="App">
      <h1>Checkbox</h1>
      {
        list.map(item=>(
          <Checkbox key={item.value} disabled={item.disabled} onChange={onChangeItem}>{item.label}</Checkbox>
        ))
      }
      <h1>Checkbox.Group</h1>
      <Checkbox.Group defaultValue={defaultValue} options={list} onChange={onChange} />
    </div>
  )
}
export default App;
