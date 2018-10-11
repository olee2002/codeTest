import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class EmployeeList extends Component {

    state = {
        employees: []
    }

    componentDidMount = () => {
        axios.get('/api/employees')
            .then(res => this.setState({ employees: res.data }))
    }

    handleDelete = (id) => {
        axios.delete(`/api/employees/${id}`)
            .then(res => this.setState({ employees: res.data }))
    }

    render() {
        const { employees } = this.state
        return (
            <div className='container'>
                <h2>Employee List</h2>
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
                    {employees.map(e =>
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.birth_date}</td>
                            <td><Link to={`/employees/${e.id}`}>{e.first_name}</Link></td>
                            <td>{e.last_name}</td>
                            <td>{e.gender}</td>
                            <td>{e.title}</td>
                            <td><button className='btn btn-danger' onClick={() => this.handleDelete(e.id)}>Delete</button></td>
                        </tr>
                    )}
                </table>
            </div>
        )
    }
}
