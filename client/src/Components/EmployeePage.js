import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class EmployeeList extends Component {

    state = {
        employee: {}
    }

    componentDidMount = () => {
        const id = this.props.match.params.employeeId
        console.log(id)
        axios.get(`/api/employees/${id}`)
            .then(res => this.setState({ employee: res.data }))
    }

    handleEdit = (id) => {
        axios.put(`/api/employees/${id}`)
    }

    render() {
        const { employee } = this.state
        console.log(employee)
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
                        <th>Delete</th>
                    </tr>

                    <tr>
                        <td>{employee.id}</td>
                        <td>{employee.birth_date}</td>
                        <td>{employee.first_name}</td>
                        <td>{employee.last_name}</td>
                        <td>{employee.gender}</td>
                        <td>{employee.title}</td>
                        <td><button className='btn btn-danger' onClick={() => this.handleDelete(employee.id)}>Edit</button></td>
                    </tr>
                </table>
                <hr />

            </div>
        )
    }
}
