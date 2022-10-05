import PropTypes from 'prop-types';

import { Paragraf, Span } from './User.styled';

export const User = ({ user: {id, name, email, hasJob }, userDelete, changeJobStatus }) => {
    const isOrange = email.includes('biz')

    return (
            <>
            <Paragraf>Name: <Span>{name}</Span></Paragraf>
            <Paragraf>Email: <Span isOrange={isOrange}>{email}</Span></Paragraf>
            <Paragraf>Has job: <Span>{hasJob.toString()}</Span></Paragraf>
            <button onClick={() => userDelete(id)}>Delete</button>
            <button onClick={() => changeJobStatus(id)}>Change job status</button>
        </>
    );
}

User.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired
}