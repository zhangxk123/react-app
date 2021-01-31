//将静态数据转为状态数据
function process(data){
  return data
}
//组件
let component={
  render(vm){
    return `<div>${vm}</div>`
  }
}


let data=1;
let vm=process(data); //viewModel=处理(data)
let view=component.render(vm);// view=渲染 (viewModel)
console.log(view)