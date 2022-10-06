import { Component } from "react";
import { nanoid } from 'nanoid'
// import { User } from "./User/User";
import { UsersList } from "./UsersList/UsersList";
// import { Section } from "./Section/Section";
import { users } from "data/users";
import { Button } from "./Button/Button";
import { AddUserForm } from "./AddUserForm/AddUserForm";

export class App extends Component {
  state = {
    users,
    isListShown: false,
  }

  onClickHandler = () => 
    this.setState({
      isListShown: true,
    })
  
  userDelete = (userId) => {
    this.setState(prevState => 
      ({users: prevState.users.filter(user => user.id !== userId)}),
    )
  }

  changeJobStatus = (userId) => {
    this.setState(prevState => ({
      users: prevState.users.map(user => {
        if (user.id === userId) {
          return { ...user, hasJob: !user.hasJob };
        }

        return user;
      })
    }))
  }

  addUser = (data) => {
    const newUser = {
      ...data,
      id: nanoid(),
      hasJob: false,
    }
    
    this.setState((prevState) => ({
      users: [...prevState.users, newUser]
    }))
    }

  render() {
    const { users, isListShown } = this.state;

    return (
      <>
        {isListShown
          ? <>
              <AddUserForm addUser={this.addUser} />
              <UsersList
                users={users}
                userDelete={this.userDelete}
                changeJobStatus={this.changeJobStatus}
              />
            </>
          : <Button
              type="button"
              text="Show users list"
              clickHandler={this.onClickHandler}
            />
        }
      </>
    )
  }
};

// export const App = () => {
//   return (
//     <>
//       <Section>
//         <User user={users[0]} />
//       </Section>
      
//       <Section title="List of users">
//         <UsersList users={users} />
//       </Section>
//     </>
//   );
// };
