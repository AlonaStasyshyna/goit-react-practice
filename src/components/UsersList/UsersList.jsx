import PropTypes from 'prop-types';
import { User } from "components/User/User"

export const UsersList = ({ users }) => {
    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    <User user={user}/>
                </li>
            ))}
        </ul>
    )
}

UsersList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })).isRequired,
}