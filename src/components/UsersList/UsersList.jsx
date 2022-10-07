import PropTypes from 'prop-types';
import { User } from "components/User/User"


export const UsersList = ({
    users,
    userDelete,
    changeJobStatus,
    showUpdateForm,
    userToUpdate,
    updateUser,}) => {
    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    <User
                        user={user}
                        userDelete={userDelete}
                        changeJobStatus={changeJobStatus}
                        showUpdateForm={showUpdateForm}
                        userToUpdate={userToUpdate}
                        updateUser={updateUser}
                    />
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