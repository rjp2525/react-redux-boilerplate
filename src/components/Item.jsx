import React, { Component } from 'react'

class Item extends Component {
    render() {
        let { text } = this.props

        return (
            <li>{text}</li>
        )
    }
}

export default Item
