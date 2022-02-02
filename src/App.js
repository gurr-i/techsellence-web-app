import "./App.css";
// Gmail authentication module
import { withAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
//To talk to Database use "API" module
import { Amplify, API, graphqlOperation, Auth } from "aws-amplify";
// Using GraphQL mutations as a function
import { createUserTable, updateUserTable, deleteUserTable } from "./graphql/mutations";

import "@aws-amplify/ui-react/styles.css";
// React Hooks
import { useEffect, useState } from "react";
// aws configuration
import awsmobile from "./aws-exports";
import App2 from "./Components/RichTextEditor";
Amplify.configure(awsmobile);



function App({ signOut, user }) {

  const [userName, setuserName] = useState('');
  const [userEmail, setuserEmail] = useState('');
  const [userComment, setuserComment] = useState('');

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        // return Auth.changePassword(user, 'oldPassword', 'newPassword');
        console.log(user);
        setuserName(user.username)
        // setuserEmail(user.attributes.email)
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  //<============ Function to Handle The Form data and upload the data to dynamoDB using GraphQL apis===============>
  const handleFormdatafun = async (e) =>{
    e.preventDefault();

    // Update According to schema.graphql for updating data to aws DynamodB Table
    const UserTable_details = {
      user_Name: userName,
      user_email: userEmail,
      user_comment: userComment
    }

    const NewUserTable = await API.graphql(createUserTable, {
      input: { 
        user_Name: userName,
        user_email: userEmail,
        user_comment: userComment}
    })

    // const result = await API.graphql(createTodo, {
    //   input: {
    //     name: 'My first todo!'
    //   }
    // })
  }

  return (
    <>
      <center>
        <h1>Hello!, {user.username}</h1>
        <h2>You are logged is as {user.attributes.email}</h2>
        <button className="btn-gradient-2" onClick={signOut}>
          Sign out
        </button>
        {/* <AmplifySignOut/> */}
      </center>
      <div>
        <App2 />
      </div>
      <form onSubmit={handleFormdatafun}>
        User Name: <input type="text" name="username" id="username" onChange={(e) => {setuserName(e.target.value)}}/> <p>{userName}</p>
        <br />
        User Email: <input type="text" name="useremail" id="useremail" onChange={(e) => {setuserEmail(e.target.value)}}/> <p>{userEmail}</p>
        <br />
        User Comment: <input type="text" name="usercomment" id="usercomment" onChange={(e) => {setuserComment(e.target.value)}}/> <p>{userComment}</p>
        <br />
        <button type="submit">Update input Data to aws DynamoDB table</button>
      </form>
    </>
  );
}

export default withAuthenticator(App);
