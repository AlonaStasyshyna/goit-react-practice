import { Component } from "react";
import PropTypes from 'prop-types';
import { Form, Label, Input, Button } from "../AddUserForm/AddUserForm.styled";


export class UpdateUserForm extends Component {
    static propTypes = {
        addUser: PropTypes.func.isRequired,
    }

    state = {
        name: this.props.userToUpdate.name,
        email: this.props.userToUpdate.email,
    }

    handleInput = ({target: {name, value}}) => {
        this.setState({
            [name]: value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.props.updateUser({...this.props.userToUpdate, ...this.state});
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