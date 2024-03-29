import React, { Component } from 'react';
import TodoService from '../../api/todo/TodoService.js'
import AuthenticationService from './AuthenticationService.js'
import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from 'formik'

class TodoComponent extends Component { // id is not in props of TodoComponent, it is in props of Route Component
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            description: '',
            deadLineDate: moment(new Date()).format('YYYY-MM-DD')
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount() {

        if(this.state.id === -1){ //if it's a creation of todo, does nto need to retrive a specific todo cuz it doesn't exist
            return
        }

        let username = AuthenticationService.getLoggedInUsername()
        TodoService.retrieveTodo(username, this.state.id)
            .then(response => this.setState({
                description: response.data.description,
                deadLineDate: moment(response.data.deadLineDate).format('YYYY-MM-DD')
            }))
    }


    onSubmit(values) {
        let username = AuthenticationService.getLoggedInUsername()
        if (this.state.id === -1) {
            TodoService.createTodo(username, {
                id: null, //that's how I'm processing it on backend
                description: values.description,
                deadLineDate: values.deadLineDate
            }).then(() => this.props.history.push('/todos'))
        }
        TodoService.updateTodo(username, this.state.id, {
            id: this.state.id,
            description: values.description,
            deadLineDate: values.deadLineDate
        }).then(() => this.props.history.push('/todos'))
    } // onSubmit is only called when validate returns erros = {} - no erros

    validate(values) {
        let errors = {}

        if (!values.description) {
            errors.description = 'Enter a description'
        } else if (values.description.length < 5) {
            errors.description = 'Enter at least 5 characters in description'
        }

        if (!moment(values.deadLineDate).isValid()) {
            errors.deadLineDate = 'Enter a valid deadline date'
        }

        return errors
    }

    render() {
        let description = this.state.description
        let deadLineDate = this.state.deadLineDate

        //let { description, deadLineDate } = this.state - I may also do this 

        return (
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik
                        initialValues={{ description: description, deadLineDate: deadLineDate }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                    <ErrorMessage name="deadLineDate" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label>Deadline Date</label>
                                        <Field className="form-control" type="date" name="deadLineDate" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}
export default TodoComponent