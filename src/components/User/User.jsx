import PropTypes from 'prop-types';
import { UpdateUserForm } from 'components/UpdateUserForm/UpdateUserForm';
import { Paragraf, Span } from './User.styled';

export const User = ({
    user: { id, name, email, hasJob },
    userDelete,
    changeJobStatus,
    showUpdateForm,
    userToUpdate,
    updateUser}) => {
    const isOrange = email.includes('biz')

    return (
            <>
            <Paragraf>Name: <Span>{name}</Span></Paragraf>
            <Paragraf>Email: <Span isOrange={isOrange}>{email}</Span></Paragraf>
            <Paragraf>Has job: <Span>{hasJob.toString()}</Span></Paragraf>
            <button onClick={() => userDelete(id)}>Delete</button>
            <button onClick={() => changeJobStatus(id)}>Change job status</button>
            <button onClick={() => showUpdateForm(id)}>Update user</button>

            {userToUpdate && userToUpdate.id === id && <UpdateUserForm userToUpdate={userToUpdate} updateUser={updateUser} />}
        </>
    );
}

User.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired
}