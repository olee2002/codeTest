import React, { Component } from 'react'

export default class EmployeeForm extends Component {

    state = {
        birth_date: '',
        first_name: '',
        last_name: '',
        gender: '',
        title: ''
    }

    handleSubmit = () => {

    }

    handleChange = name => e => {
        this.setState({ [name]: e.target.value })
    }

    render() {
        return (
            <div>
                <form className='form' onSubmit={this.handleSubmit}>
                    <div>
                        <label>Birth Date</label>
                        <input onChange={this.handleChange('birth_date')} />
                    </div>
                    <div>
                        <label>First Name</label>
                        <input onChange={this.handleChange('first_name')} />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input onChange={this.handleChange('last_name')} />
                    </div>
                    <div>
                        <label>Gender</label>
                        <input onChange={this.handleChange('gender')} />
                    </div>
                    <div>
                        <label>Title</label>
                        <input onChange={this.handleChange('title')} />
                    </div>
                    <button>Submit</button>
                </form>

            </div>
        )
    }
}
