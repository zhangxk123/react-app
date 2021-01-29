import React,{ Component } from "react";
function logProps(WrapperComponent) {
  class LogProps extends Component{
    componentDidUpdate(){
      this.logs()
    }
    logs(){
      console.log('logs')
    }
    render(){
      const {forwardRef,...props}=this.props
      return <WrapperComponent ref={forwardRef} {...props}/>
    }
  }
  function forwardRef(props,ref){
    return <LogProps {...props} forwardRef={ref} />
  }
  const name = WrapperComponent.displayName || WrapperComponent.name;
  forwardRef.displayName = `logProps(${name})`;
  return React.forwardRef(forwardRef)
}

export default logProps