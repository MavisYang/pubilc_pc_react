import React,{Component} from 'react'

import OldLifeCycle from './OldLifeCycle'
import NewLifeCycle from './NewLifeCycle'
const components =(props)=>{
    switch (props.view){
        case 'old':
            return <OldLifeCycle/>
        case 'new':
            return <NewLifeCycle userinfo={props.newProps}/>
        default:
            break;

    }

}

export default class LifeCycleMain extends Component {
    constructor(props){
        super(props)
        this.state={
            view:'old',
            newProps:'1'
        }
    }
    render(){
        return (
            components(this.state)
        )
    }
}