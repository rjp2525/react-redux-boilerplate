import React, { Component } from 'react'

class Label extends Component {
    render() {
        let { htmlFor, text } = this.props

        return (
            <label htmlFor={htmlFor}>{text}</label>
        )
    }
}

export default Label
