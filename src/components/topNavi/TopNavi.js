import React,{Component} from 'react'
import './topNavi.scss'
export default class TopNavi extends Component{
    constructor(props){
        super(props)
    }
    logoutHandle = ()=>{
        // AxiosCore.get('/launch-api/user/logout').then((res)=>{
        //     this.props.history.push('/login')
        // },(err)=>{
        //
        // })
    }
    render(){
        return (
            <div className='top-header'>
                <div className="logout" onClick={this.logoutHandle}>
                    <span className="icon"/>
                    退出
                </div>
            </div>
        )
    }
}