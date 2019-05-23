

import React,{Component} from 'react'

export default class Chidren extends Component{

    constructor(props){
        super(props)
        this.state={
            childData:null,
            isUpdate: false,
            receiveProps:'监听变化',
            count:1

        }

        console.log('4.children-constructor')
    }


    componentWillMount() { // 组件挂载前触发
        console.log('5.children-componentWillMount')

    }

    componentDidMount() { // 组件挂载后触发
        console.log('7.children-componentDidMount')
        // this.setState({
        //     childData:this.props.childData
        // })
        //直接将props赋值给子state,子组件childData修改之后父组件中的childData值也会修改
        this.setState({
            childData:this.props.childData.map(item=>Object.assign({},{...item}))
        })
        //通过map方法返回新的数组，子组件childData修改之后父组件中的childData值不会修改，
    }


    handleChangeInput=(index)=>{
        let {childData} =this.state
        childData[index].name='我是修改的name'
        this.setState({
            childData
        })
    }


    render(){
        console.log('6.children-render')
        console.log(this.state.childData)
        const {childData,isUpdate,receiveProps} =this.state
        const {data,hideEdit} =this.props
        return  <div className='children-wrapper'>
            <h2>我是子组件</h2>
            <div onClick={()=>{ this.setState({isUpdate:!this.state.isUpdate})}}>
                {data}--{isUpdate?'true':'false'}
            </div>

            {
                childData&&childData.map((item,index)=>{
                    return <div key={index} onClick={()=>this.handleChangeInput(index)}>{item.name}</div>
                })
            }
            <div className='buttonStyle' onClick={hideEdit}>隐藏子组件</div>

            <div>{receiveProps}</div>

            <button
                color={this.props.color}
                onClick={() => this.setState(state => ({count: state.count + 1}))}>
                Count: {this.state.count}
            </button>


        </div>

    }


    componentWillReceiveProps(nextProps) { // 组件加载时不调用，组件接受新的props时调用
        console.log('11.children-componentWillReceivePorps')
        console.log(this.props.data,nextProps)
        if(this.props.edit===nextProps.edit){
            this.setState({
                receiveProps:'componentWillReceiveProps 相等'
            })
        }
    }
    shouldComponentUpdate(nextProps, nextState) { // 组件接收到新的props或者state时调用，return true就会更新dom（使用diff算法更新），return false能阻止更新（不调用render）
        console.log('12.children-shouldComponentUpdate')
        if(this.props.childData!==nextProps.childData){
            console.log('!=')
            this.setState({
                childData:nextProps.childData
            })
        }
        if(this.state.count===nextState.count){
            return true
        }
        return true;
    }
    componentWillUpdate(nextProps, nextState) { // 组件加载时不调用，只有在组件将要更新时才调用，此时可以修改state
        console.log('13.children-componentWillUpdate')
    }
    componentDidUpdate() { // 组件加载时不调用，组件更新完成后调用
        console.log('14.children-componentDidUpdate')
    }
    componentWillUnmount() { // 组件卸载时触发，只调用一次
        console.log('15.children-componentWillUnmount')

    }


}
