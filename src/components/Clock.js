import React from 'react';
export default class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: props.startTime};
  }
  componentDidMount(){
    this.timer=setInterval(() => {
      this.setState({
        date:new Date()
      })
    }, 1000);
  }
  componentWillUnmount(){
    clearInterval(this.timer);
  }
  render(){
    return (
      <div>
        <p>当前时间： {this.state.date.toLocaleString()}</p>
      </div>
    )
  }
}

