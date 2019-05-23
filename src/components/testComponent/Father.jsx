import React,{Component} from 'react'
import './Index.scss'
import Chidren from './Chidren'
import Grandson from './Grandson'
export const Item=(props)=>{
    return <div>{props.name}</div>

}

const Img=({src})=>(<img src={src} alt="Img"/>)

export default class Father extends Component{
    constructor(props) {
        super(props)
        this.state={
            data:'父传子的初始化数据',
            childData:[],
            edit:false,
            fatherData:'我是父组件'

        }
        console.log('1.father-constructor')
    }


    componentWillMount() { // 组件挂载前触发
        console.log('2.father-componentWillMount')

    }

    componentDidMount() { // 组件挂载后触发
        console.log('8.father-componentDidMount')
        setTimeout(()=>{
            this.setState({
                data:'我是父传子的数据',
                childData:[
                    {
                        name:'我是要改动的name值1',
                    },
                    {
                        name:'我是要改动的name值2',
                    }
                ]
            })
        },100)

    }

    changeState=()=>{
        this.setState({
            data:'我是通过setState父传子修改后的数据',
        })
    }

    handleEditStatus=(status)=>{
        this.setState({edit:status})
        // if(status)
            // this.changeState()
    }
    render(){
        console.log('3.father-render')
        console.log(this.state.childData)
        const {data,childData,edit,fatherData} = this.state
        return <div className="wrapper-container">
            <h1>{fatherData}</h1>

            <button className='buttonStyle' onClick={this.changeState}>button</button>
            <div className={'buttonStyle'} onClick={()=>this.handleEditStatus(true)}>点击出现子组件</div>
            {
                edit? <Chidren hideEdit={()=>this.handleEditStatus(false)}
                               edit={edit}
                               data={data} childData={childData}/>:null
            }
            <Grandson/>
        </div>
    }

    componentWillReceiveProps(nextProps) { // 接收到新的props时触发
        console.log(11)
        console.log('father-componentWillReceivePorps')
    }
    shouldComponentUpdate(nextProps, nextState) { // 组件Props或者state改变时触发，true：更新，false：不更新
        console.log('9.father-shouldComponentUpdate')
        return true
    }
    componentWillUpdate(nextProps, nextState) { // 组件更新前触发
        console.log('10.father-componentWillUpdate')
    }
    componentDidUpdate() { // 组件更新后触发
        console.log('14.father-componentDidUpdate')
    }
    componentWillUnmount() { // 组件卸载时触发
        console.log('father-componentWillUnmount')

    }

}
