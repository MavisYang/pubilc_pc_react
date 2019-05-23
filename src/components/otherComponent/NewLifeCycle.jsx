import React ,{Component} from 'react'

export default class NewLifeCycle extends Component{
    constructor(props){
        super(props)
        this.state={
            userinfo:'2'

        }
        //1. Initializing state
        console.log('constructor-初始化状态')
    }




    componentDidMount() {
        //2. Fetching external data:获取外部数据
        //3. Adding event listeners (or subscriptions):添加事件侦听器
        console.log('componentDidMount-获取外部数据')
        this.setState({
            userinfo:this.props.userinfo
        })


        console.log('componentDidMount-添加事件侦听器')
        document.addEventListener('click',this.hideTextHandle)

    }
    static getDerivedStateFromProps(nextProps, prevState) {
        //4. Updating state based on props:基于道具更新状态
        //7. Fetching external data when props change : 在道具改变时获取外部数据--Clear out previously-loaded data so we dont render stale stuff

        // Store prevId in state so we can compare when props change.

        console.log('getDerivedStateFromProps--',nextProps, prevState)
        /**
         * 保证父级传入的props的值传给子级的state中。
         * */

        if(nextProps.userinfo!==prevState.userinfo){
            return {
                userinfo:nextProps.userinfo
            }
        }
        // No state update necessary
        return null;
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        return false
    }


    hideTextHandle=()=>{
        this.setState({
            showText:false
        })
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
    getInitData=(tenantId,params)=>{


    }

    changeUserInfo=()=>{
        console.log(this.state.userinfo)
        this.setState({
            userinfo:'修改state数值'
        },()=>{
            console.log(this.state.userinfo)
        })

    }
    render() {
        console.log('render')
        return (
            <div>
                <p>props:{this.props.userinfo}</p>
                <p>state:{this.state.userinfo}</p>
                <button onClick={this.changeUserInfo}>change state</button>
            </div>
        )
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        //8. Reading DOM properties before an update：在更新之前读取DOM属性

        console.log('getSnapshotBeforeUpdate--',prevProps, prevState)
        return null
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        //5. Invoking external callbacks:调用外部回调
        //6. Side effects on props change:组件发生了改变（道具的副作用改变了）

        console.log('componentDidUpdate--',prevProps, prevState, snapshot)

        if (this.props.isVisible !== prevProps.isVisible) {
            this._logVisibleChange(this.props.isVisible);
        }
        // if(this.state.tenantId!==prevState.tenantId){
        //     this.getInitData(this.state.tenantId,{})
        // }

        if(this.props.userinfo!==prevProps.userinfo){
            this.setState({
                userinfo:'prevProps 判断'
            })
        }
        if(this.state.userinfo!==prevState.userinfo){
            this.setState({
                userinfo:'prevState 判断'
            })
        }
    }

    componentWillUnmount() {
    }

}