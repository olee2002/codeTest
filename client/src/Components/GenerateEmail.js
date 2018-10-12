import React, { Component } from 'react'

export default class GenerateEmail extends Component {


    // This component is incomplete.


    generateEmail = () => {
        const e = {
            first_name: 'Jamie',
            last_name: 'King'
        }

        const aphs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const letters = aphs.split('')
        const randomChars = []

        const nums = '0123456789'
        const numbers = nums.split('')
        const randomNumbers = []

        for (let i = 0; i < 4; i++) {
            const j = Math.floor(Math.random() * 10, 1)
            if (i < 3) randomChars.push(letters[j]);
        }
        for (let k = 0; k < 6; k++) {
            const j = Math.floor(Math.random() * 10, 1)
            if (k < 6) randomNumbers.push(numbers[+j]);
        }

        const email = `${e.first_name}.${e.last_name}.${randomChars.join('')}.${randomNumbers.join('')}@heliumservices.com`
        // now this works exactly as the instruction indicated.
        return email.toLowerCase()
    }



    render() {
        return (
            <div>

            </div>
        )
    }
}
