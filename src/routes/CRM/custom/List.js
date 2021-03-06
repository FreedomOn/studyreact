import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
class List extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {}
    }
    render(){
        let {data} = this.props
        return <ul className='list-group' style={{cursor:'pointer'}}> 
            {data.map((item,index)=>{
                let {id,name} = item
                // onclick 和 link的方法都可以实现
                // <li onClick={ev=>{this.props.history.push('/custom/detail')}}>
                return <li className='list group-item' key={index}>
                <Link to={{
                    // pathname:'/custom/detail', //默认跳转到详情
                    // search:`?id=${id}`, //1问号传参 
                    // state:id  //2.state传值
                    pathname:`/custom/detail/${id}`,//3.url地址参数
                }}>
                    编号：{id}
                    &nbsp;&nbsp;
                    姓名：{name}
                </Link>
            </li>
            })}
           
        </ul>
    }
}
export default connect(state=>({...state.custom}))(List);
/*
    在spa路由管控的项目中，从列表跳转到详情，总需要传递一些信息给详情组件，传递给详情页信息的
    几种方式，
        不推荐
          本地存储
          redux存储
          =》点击列表某一项的时候，吧信息存储到本地或redux中，跳转到页面，从本地或redux获取即可
        推荐
          1,问号传参
          2.state传值(弊端，一旦页面刷新，上一次传的state值就没有了)
          3.url地址参数(把参数当做地址的一部分)
            第一步 更改二级路由 path='/custom/detail/:id'
            第二步 模板字符串传参   pathname:`/custom/detail/${id}`
           
*/ 