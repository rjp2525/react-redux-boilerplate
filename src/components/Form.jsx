import React, { Component } from 'react'

class Form extends Component {
    render() {
        let { onSubmit, children } = this.props

        return (
            <form onSubmit={onSubmit}>
                {children}
            </form>
        )
    }
}

export default Form
