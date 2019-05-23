import React,{Component} from 'react'
import FlexCss from './FlexCss'
import './FlexCss.scss'
import FetchTest from './FetchTest/FetchTest'
export default class OtherButton extends Component {
    constructor(props){
        super(props)
        this.state={
            view:0
        }
    }

    changeView(view){
        this.setState({view})
    }

    render(){
        const {view} = this.state
        let viewBox =''
        switch (view){
            case 1:
                viewBox = <FlexCss handleBack={()=>this.changeView(0)}/>;
                break;
            case 2:
                viewBox = <FetchTest handleBack={()=>this.changeView(0)}/>;
                break;
            default:
                break;

        }
        return (
           <React.Fragment>
               <button onClick={()=>this.changeView(1)}>flex布局</button>
               <button onClick={()=>this.changeView(2)}>fetch</button>
               {
                   viewBox
               }
           </React.Fragment>
        )
    }
}