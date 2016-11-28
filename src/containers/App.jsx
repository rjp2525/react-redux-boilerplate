import React, { Component } from 'react'
import { connect } from 'react-redux'

import Form from '../components/Form'
import Label from '../components/Label'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import List from '../components/List'
import Item from '../components/Item'

import { loadData, addData } from '../actions/data'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            add: null
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    componentDidMount() {
        let { dispatch } = this.props

        dispatch(loadData())
    }
    onChange(event) {
        this.setState({
            add: event.target.value
        })
    }
    onSubmit(event) {
        event.preventDefault()

        let { dispatch } = this.props

        dispatch(addData(this.state.add))
    }
    render() {
        let { data } = this.props
        let { add } = this.state

        return (
            <div>
                <h1>You are using:</h1>
                <Form onSubmit={this.onSubmit}>
                    <Label
                        input="add"
                        text="Add Item"
                    />&nbsp;
                    <TextInput
                        id="add"
                        name="add"
                        placeholder="Add..."
                        onChange={this.onChange}
                        value={add}
                    />&nbsp;
                    <Button
                        type="submit"
                        text="Add"
                    />
                </Form>
                <List>
                    {data.map(item =>
                        <Item
                            key={item.id}
                            text={item.title}
                        />
                    )}
                </List>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps)(App)
