import React,{Component} from 'react'
import data from './json.js'
import {Table} from 'shineout'
export default class FetchTest extends Component {
    constructor(props){
        super(props)
        this.state={
            current:1
        }
        this.columns = [
            {
                title: 'id',
                render: 'id',
                width: 70,
                sorter: order => {
                    this.handlePageChange(1)
                    return (a, b) => {
                        if (order === 'asc') return a.id - b.id
                        return b.id - a.id
                    }
                },
            },
            {
                title: 'First Name',
                group: 'Name',
                render: 'firstName',
                width: 100,
            },
            {
                title: 'Last Name',
                fixed: 'left',
                group: 'Name',
                render: 'lastName',
                width: 120,
                sorter: order => {
                    this.handlePageChange(1)
                    return (a, b) => {
                        if (order === 'asc') return a.lastName.localeCompare(b.lastName)
                        return b.lastName.localeCompare(a.lastName)
                    }
                },
            },
            { title: 'Country', render: 'country' },
            { title: 'Position', render: 'position' },
            { title: 'Office', render: 'office' },
            { title: 'Start Date', render: 'start' },
            {
                title: 'Salary',
                fixed: 'right',
                width: 100,
                render: d => `$${d.salary.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}`,
            },
        ]
    }
    componentDidMount(){

    }

    handlePageChange=(current)=>{
        this.setState({ current })
    }

    render(){
        return (
            <div>
                xx
            </div>
        )
    }
}