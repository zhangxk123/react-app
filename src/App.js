import React from "react"
import './App.css';
import Clock from "./components/Clock"
import Button from "./components/Button"
import HelloName from "./components/HelloName"
const ref=React.createRef()
function App() {
  return (
    <div className="App">
        <Button ref={ref}>大按钮</Button>
        <Clock startTime={new Date()}></Clock> 
        <Clock startTime={new Date('2020-1-1')}></Clock> 
        <HelloName/>
    </div>
  )
}
export {
  ref
}
export default App;
