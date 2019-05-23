import React ,{Component} from 'react'

/**
 * 高阶组件(高阶组件就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件)。
 * 高阶组件就是把username通过props传递给目标组件了。目标组件只管从props里面拿来用就好了。
 * 把redux的state和action创建函数，通过props注入给了Component。
 * 你在目标组件Component里面可以直接用this.props去调用redux state和action创建函数了。
 * ConnectedComment = connect(mapStateToProps, mapDispatchToProps)(Component);
 */
//HigherComponent 接受一个组件作为参数
export default (HigherComponent)=>{

    class newConponent extends Component{
        constructor(props) {
            super(props);
            this.state = {
                username: 'miaomiao'
            }
        }

        componentWillMount() {
            let username = localStorage.getItem('userBase');
            this.setState({
                username: username
            })
        }

        render() {
            return <HigherComponent username={this.state.username}/>
        }

  }
  //返回一个新的组件
  return newConponent
}
