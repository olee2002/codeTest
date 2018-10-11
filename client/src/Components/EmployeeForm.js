import React, { Component } from 'react'
import axios from 'axios'

export default class EmployeeForm extends Component {
    constructor(props) {
        super(props)
        const { employee } = props
        this.state = {
            birth_date: employee ? employee.birth_date : '',
            first_name: employee ? employee.first_name : '',
            last_name: employee ? employee.last_name : '',
            gender: employee ? employee.gender : '',
            title: employee ? employee.title : '',
        }
    }


    handleSubmit = () => {
        const { birth_date, first_name, last_name, gender, title } = this.state
        const { employee } = this.props
        const payload = { birth_date, first_name, last_name, gender, title }
        axios.put(`/api/employees/${employee.id}`, payload)
    }

    handleChange = name => e => {
        this.setState({ [name]: e.target.value })
    }

    render() {
        const { birth_date, first_name, last_name, gender, title } = this.state
        return (
            <div className='container'>
                <form className='form' onSubmit={this.handleSubmit}>
                    <div>
                        <label>Birth Date</label>
                        <input value={birth_date} onChange={this.handleChange('birth_date')} />
                    </div>
                    <div>
                        <label>First Name</label>
                        <input value={first_name} onChange={this.handleChange('first_name')} />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input value={last_name} onChange={this.handleChange('last_name')} />
                    </div>
                    <div>
                        <label>Gender</label>
                        <input value={gender} onChange={this.handleChange('gender')} />
                    </div>
                    <div>
                        <label>Title</label>
                        <input value={title} onChange={this.handleChange('title')} />
                    </div>
                    <button className='btn btn-primary'>Submit</button>
                </form>

            </div>
        )
    }
}
