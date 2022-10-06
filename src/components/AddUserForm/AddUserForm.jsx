import { Component } from "react";
import PropTypes from 'prop-types';
import { Form, Label, Input, Button } from "./AddUserForm.styled";

export class AddUserForm extends Component {
    static propTypes = {
        addUser: PropTypes.func.isRequired,
    }

    state = {
        name: "",
        email: "",
    }

    handleInput = ({target: {name, value}}) => {
        this.setState({
            [name]: value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.props.addUser(this.state);
        this.formReset();
    }

    formReset = () => {
        this.setState({
            name: "",
            email: "",
        })
    }

    render() {
        const { name, email } = this.state;

        return (
            <Form onSubmit={this.onSubmit}>
                <Label>
                    Name
                    <Input type="text" name="name" value={name} onChange={this.handleInput} />
                </Label>

                <Label>
                    Email
                    <Input type="text" name="email" value={email} onChange={this.handleInput} />
                </Label>

                <Button type="submit">Submit</Button>
            </Form>
        )

    }
 }