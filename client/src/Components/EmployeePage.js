import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import EmployeeForm from './EmployeeForm'

export default class EmployeeList extends Component {

    state = {
        employee: {},
        edited: false
    }

    componentDidMount = () => {
        const id = this.props.match.params.employeeId
        axios.get(`/api/employees/${id}`)
            .then(res => this.setState({ employee: res.data }))
        console.log(this.state.employee)
    }

    handleEdit = () => {
        this.setState({ edited: !this.state.edited, employee: this.state.employee })
    }

    render() {
        const { employee, edited } = this.state
        return (
            <div className='container'>
                <h2>Employee Information</h2>
                <table className='table'>
                    <tr>
                        <th>Id</th>
                        <th>Birth Date</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Title</th>
                        <th>Edit</th>
                    </tr>

                    <tr>
                        <td>{employee.id}</td>
                        <td>{employee.birth_date}</td>
                        <td>{employee.first_name}</td>
                        <td>{employee.last_name}</td>
                        <td>{employee.gender}</td>
                        <td>{employee.title}</td>
                        <td><button className='btn btn-danger' onClick={this.handleEdit}>Edit</button></td>
                    </tr>
                </table>
                <hr />
                {edited ? <EmployeeForm employee={employee} /> : null}
            </div>
        )
    }
}
