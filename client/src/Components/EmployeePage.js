import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import EmployeeForm from './EmployeeForm'

export default class EmployeeList extends Component {

    state = {
        employee: {},
        edited: false,
        children: []
    }

    componentDidMount = () => {
        const id = this.props.match.params.employeeId
        axios.get(`/api/employees/${id}`)
            .then(res => this.setState({ employee: res.data }))
        axios.get(`/api/employees/${id}/children`)
            .then(res => this.setState({ children: res.data }))
    }

    handleEdit = () => {
        this.setState({ edited: !this.state.edited, employee: this.state.employee })
    }

    render() {
        const { employee, children, edited } = this.state
        return (
            <div className='container'>
                <h2>Employee Information</h2>
                <table className='table'>
                    <tr>
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

                <h4>Children List </h4>
                {children.length ?
                    <table className='table'>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Birth Date</th>
                            <th>Gender</th>
                        </tr>
                        {children.map(c =>
                            <tr>
                                <td>{c.id}</td>
                                <td>{c.first_name}</td>
                                <td>{c.last_name}</td>
                                <td>{c.birth_date}</td>
                                <td>{c.gender}</td>
                            </tr>
                        )}
                    </table>
                    : "This employee doesn't have a child"}

            </div>
        )
    }
}
