import React, { Component } from 'react'

class Button extends Component {
    render() {
        let { text } = this.props

        return (
            <button>{text}</button>
        )
    }
}

export default Button
