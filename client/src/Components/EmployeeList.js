import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import EmployeeForm from './EmployeeForm'

export default class EmployeeList extends Component {

    state = {
        employees: [],
        children: []
    }

    componentDidMount = () => {
        axios.get('/api/employees')
            .then(res => this.setState({ employees: res.data }))
        axios.get('/api/children')
            .then(res => this.setState({ children: res.data }))
    }

    handleDelete = (id) => {
        axios.delete(`/api/employees/${id}`)
            .then(res => this.setState({ employees: res.data }))
    }

    handleForm = () => {
        this.setState({ open: !this.state.open })
    }
    // generateEmail = (e) => {

    //     const aphs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    //     const letters = aphs.split('')

    //     for (let i=0; i<letters.length; i++){
    //         Math.Random() * i
    //     }


    //     return `${e.first_name}.${e.lastname}.${chars}.${numbers}@heliumservices.com`
    // }

    render() {
        const { employees, children, open } = this.state

        return (
            <div className='container'>
                <h2>Employee List</h2>
                <table className='table'>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Birth Date</th>
                        <th>Job Title</th>
                        <th>Number Of Children</th>
                        <th>Email Address</th>
                        <th>Delete</th>
                    </tr>
                    {employees.map(e =>
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td><Link to={`/employees/${e.id}`}>{e.first_name}</Link></td>
                            <td>{e.last_name}</td>
                            <td>{e.birth_date}</td>
                            <td>{e.title}</td>
                            <td>{children.filter(c => c.employee_id === e.id).length}</td>
                            <td></td>
                            <td><button className='btn btn-danger' onClick={() => this.handleDelete(e.id)}>Delete</button></td>
                        </tr>
                    )}
                </table>
                <hr />
                <button className='btn btn-primary' onClick={this.handleForm}>Add An Employee</button>
                <button className='btn btn-primary ml-2' onClick={this.handleEmail}>Generate Email</button>
                {open ? <EmployeeForm open={open} /> : null}
            </div>
        )
    }
}
