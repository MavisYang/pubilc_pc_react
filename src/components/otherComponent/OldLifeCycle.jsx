import React,{Component} from 'react'

export default class OldLifeCycle extends Component{
    constructor(props) {
        super(props)
        this.state={
            data:1,
            render:'render',
            id:''

        }
    }

    componentWillMount() { // 组件挂载前触发
        console.log('componentWillMount')
        // 1. Initializing state
        // 2. Fetching external data
        // 3. Adding event listeners (or subscriptions)
    }
    componentDidMount() { // 组件挂载后触发
        console.log('componentDidMount')

    }
    componentWillReceivePorps(nextProps) { // 接收到新的props时触发
        console.log('componentWillReceivePorps')
        // 4. Updating state based on props
        // 6. Side effects on props change
        // 7. Fetching external data when props change
        if (nextProps.id !== this.props.id) {
            this.setState({externalData: null});
            this._loadAsyncData(nextProps.id);
        }
    }
    shouldComponentUpdate(nextProps, nextState) { // 组件Props或者state改变时触发，true：更新，false：不更新
        console.log('shouldComponentUpdate')
        return false
    }
    componentWillUpdate(nextProps, nextState) { // 组件更新前触发
        console.log('componentWillUpdate')
        // 5. Invoking external callbacks
        // 8. Reading DOM properties before an update
    }
    componentDidUpdate(prevProps, prevState) { // 组件更新后触发
        console.log('componentDidUpdate')
        if (this.props.isVisible !== prevProps.isVisible) {
            this._logVisibleChange(this.props.isVisible);
        }
    }

    _loadAsyncData=(id)=>{
        this.setState({
            id
        })
    }
    _logVisibleChange=(isVisible)=>{
        this.setState({
            isVisible
        })
    }

    render(){
        const tableList=[
            {
                name:'第一列',
                num:'100',
                age:11
            },
            {
                name:'第二列',
                num:'200',
                age:12
            }
        ]
        return <div className="wrapper-container">
            <div className='testView divCenter' ref="view">
                <button onClick={()=>this.refs.view.blur()}>button</button>
            </div>
            <table>
                <colgroup>
                    <col/>
                    <col style={{background:'yellow',padding:'20px'}} span="2"/>
                </colgroup>
                <thead>
                <tr>
                    <th>姓名</th>
                    <th>成绩</th>
                    <th>年龄</th>
                </tr>
                </thead>
                <tbody>
                {
                    tableList.map((v,i)=>(
                        <tr key={i}>
                            <td rowspan="2">{v.name}</td>
                            <td>{v.num}</td>
                            {/*<td>{v.age}</td>*/}
                        </tr>
                    ))
                }
                </tbody>
                <tfoot>
                <tr>
                    <td colspan="2">name</td>
                    <td>age</td>
                </tr>

                </tfoot>



            </table>
        </div>
    }

    componentWillUnmount() { // 组件卸载时触发
        console.log('componentWillUnmount')
    }


}
