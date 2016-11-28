import React, { Component } from 'react'

class TextInput extends Component {
    render() {
        let { id, name, placeholder, onChange } = this.props

        return (
            <input type="text" id={id} name={name} placeholder={placeholder} onChange={onChange} />
        )
    }
}

export default TextInput
