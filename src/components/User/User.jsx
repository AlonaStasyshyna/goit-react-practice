import PropTypes from 'prop-types';

import { Paragraf, Span } from './User.styled';

export const User = ({ user: { name, email } }) => {
    const isOrange = email.includes('biz')

    return (
            <>
            <Paragraf>Name: <Span>{name}</Span></Paragraf>
            <Paragraf>Email: <Span isOrange={isOrange}>{email}</Span></Paragraf>
            </>
    );
}

User.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired
}