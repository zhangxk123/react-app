import React,{Component, createRef} from 'react';
import {logProps} from "./../HOC";
class Button extends Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props)
    this.state={
      count:1
    }
    this.addCount=this.addCount.bind(this)
    this.btn=createRef();
    // this.btn={current:null}
  }
  componentDidMount(){
    // document.getElementById("btn").addEventListener('click',this.addCount)
    // console.log(this.btn)
    console.log(this,this.btn.current);
  }
  addCount(){
    // this.setState({
    //   count:this.state.count+1
    // })
    // this.setState({
    //   count:this.state.count+1
    // })
    this.setState((state)=>({
      count:state.count+1
    }))
    this.setState((state)=>({
      count:state.count+1
    }))
    this.setState((state)=>({
      count:state.count+1
    }))
    // console.log(`click`,this.state.count)
  }
  render(){
    return (
      <>
        <p>{this.state.count}</p>
        <button ref={this.btn} className="btn" type="button" onClick={this.addCount}>{this.props.children}</button>
        {/* <button ref={(e)=>this.btn=e} className="btn" type="button" onClick={this.addCount}>{this.props.children}</button> */}
        {/* <button className="btn" id="btn" type="button">{this.props.children}</button> */}
      </>
    )
  }
}

export default logProps(Button)
