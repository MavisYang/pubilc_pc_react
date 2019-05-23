import React,{Component} from 'react'
export default class FlexCss extends Component {

    componentDidMount(){
        console.log('componentDidMount')
        window.addEventListener('scroll',this.handleScroll,true)
        window.addEventListener('click',this.handleClick)
    }

    componentWillUnmount(){
        console.log('componentWillMount')
        window.removeEventListener('scroll',this.handleScroll,true)
        window.removeEventListener('click',this.handleClick)

    }

    handleScroll=()=>{
        console.log('触发scroll')
    }

    handleClick=()=>{
        console.log('click')

    }


    render(){
        console.log('render')
        return (
            <ul ref={'wrapper'}>
                {
                    [1,2,3,4,5,6,7,8,9,10].map((v,i)=>(
                        <li key={i}>第{v}行</li>
                    ))
                }
            </ul>
        )
    }
}