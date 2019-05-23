
import React,{Component} from 'react'
import higherComponent from './HigherComponent'
class Grandson extends Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         username: ''
    //     }
    // }
    //
    // componentWillMount() {
    //     let username = localStorage.getItem('username');
    //     this.setState({
    //         username: username
    //     })
    // }
    //
    // render() {
    //     return (
    //         <div>welcome {this.state.username}</div>
    //     )
    // }

    render(){
        return <div>
            welcome {this.props.username}
        </div>
    }


}
Grandson = higherComponent(Grandson)

export default Grandson
