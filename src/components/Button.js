import React,{Component} from 'react';
import {logProps} from "./../HOC";
function alert(e){
  console.log(e.currentTarget.innerText)
}
class Button extends Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props)
  }
  render(){
    console.log(this);
    return (<button className="btn" type="button" onClick={alert}>{this.props.children}</button>)
  }
}

export default logProps(Button)
