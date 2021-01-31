import React from "react"
import './App.css';
import {Clock,Button,HelloName} from "./components"
import {Count } from "./Hook"
const ref=React.createRef()
function App() {
  return (
    <div className="App">
        <Button ref={ref}>大按钮</Button>
        <Clock startTime={new Date()}></Clock> 
        <HelloName/>
        <Count />
    </div>
  )
}
export {
  ref
}
export default App;
