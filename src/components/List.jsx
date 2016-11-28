import React, { Component } from 'react'

class List extends Component {
    render() {
        let { children } = this.props

        return (
            <ul>
                {children}
            </ul>
        )
    }
}

export default List
