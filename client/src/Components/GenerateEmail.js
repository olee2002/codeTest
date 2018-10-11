import React, { Component } from 'react'

export default class GenerateEmail extends Component {



    // This is incomplete.

    generateEmail = (e) => {
        const e = {
            first_name: 'Jamie',
            last_name: 'King'
        }

        const aphs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const letters = aphs.split('')
        const randomChars = []

        const nums = '123456789'
        const numbers = nums.split('')
        const randomNumbers = []

        for (let i = 0; i < 4; i++) {
            const j = Math.floor(Math.random() * 10, 1)
            if (i < 3) randomChars.push(letters[j]);
        }
        for (let k = 0; k < nums.length; k++) {
            const j = Math.floor(Math.random() * 10, 1)
            if (k < 7) randomNumbers.push(numbers[j]);
        }

        console.log(randomChars.join(''), randomNumbers.join(''))
        return `${e.first_name}.${e.last_name}.${randomChars.join('')}.${randomNumbers.splice(0, 5).join('')}@heliumservices.com`
    }
}



render() {
    return (
        <div>

        </div>
    )
}
}
