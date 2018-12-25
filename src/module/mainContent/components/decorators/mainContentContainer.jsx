import React,{ Component } from 'react'
import Nav from '../nav'
import '../../mainContent.scss'

// 主模块容器装饰器
export default function mainContentContainer(WrappedComponent){
    return class ContainerComponent extends Component {
        render(){
            return(
                <div className='mainContentContainer'>
                <Nav />
                <WrappedComponent />
               </div>
            )
        }
    }
}