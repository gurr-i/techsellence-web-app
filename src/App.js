import "./App.css";
// Gmail authentication module
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
//To talk to Database use "API" module
import { Amplify, API, graphqlOperation, Auth } from "aws-amplify";
// Using GraphQL mutations as a function
import {
  createUserTable,
  updateUserTable,
  deleteUserTable,
} from "./graphql/mutations";

import "@aws-amplify/ui-react/styles.css";
// React Hooks
import { useEffect, useState, Component } from "react";
// aws configuration
import awsmobile from "./aws-exports";
import App2 from "./Components/RichTextEditor";

// import logger from "logging-library";
import FileViewer from "react-file-viewer";
import DocIframe from "./Components/Doc";
import FormBox from "./Components/Formbox";
// import { CustomErrorComponent } from "custom-error";
import Pdff from "./Components/generated.pdf";
import docc from "./Components/Susmit Walve(19311020) tut1.docx";
import vdo1 from "./Components/Pexels Videos 1409899.mp4";
import ReactPlayer from "react-player";
import { FileNavigationpaneexpandedPostLoginHomePage } from './ui-components';

Amplify.configure(awsmobile);

const onError = (e) => {
  console.log(e, "error in file-viewer");
};

function App({ signOut, user }) {
  const [userName, setuserName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userComment, setuserComment] = useState("");
  const [Doclink, setDoclink] = useState("");
  const [vdo, setvdo] = useState("");
  const [videoFilePath, setVideoFilePath] = useState(null);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        // return Auth.changePassword(user, 'oldPassword', 'newPassword');
        console.log(user);
        setuserName(user.username);
        // setuserEmail(user.attributes.email)
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  //<============ Function to Handle The Form data and upload the data to dynamoDB using GraphQL apis===============>
  const handleFormdatafun = async (e) => {
    e.preventDefault();

    // Update According to schema.graphql for updating data to aws DynamodB Table
    const UserTable_details = {
      user_Name: userName,
      user_email: userEmail,
      user_comment: userComment,
    };

    const NewUserTable = await API.graphql(createUserTable, {
      input: {
        user_Name: userName,
        user_email: userEmail,
        user_comment: userComment,
      },
    });

    // const result = await API.graphql(createTodo, {
    //   input: {
    //     name: 'My first todo!'
    //   }
    // })
  };

  const handleVideoUpload = (event) => {
    setVideoFilePath(URL.createObjectURL(event.target.files[0]));
  };

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
        User Name:{" "}
        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) => {
            setuserName(e.target.value);
          }}
        />{" "}
        <p>{userName}</p>
        <br />
        User Email:{" "}
        <input
          type="text"
          name="useremail"
          id="useremail"
          onChange={(e) => {
            setuserEmail(e.target.value);
          }}
        />{" "}
        <p>{userEmail}</p>
        <br />
        User Comment:{" "}
        <input
          type="text"
          name="usercomment"
          id="usercomment"
          onChange={(e) => {
            setuserComment(e.target.value);
          }}
        />{" "}
        <p>{userComment}</p>
        <br />
        <button type="submit">Update input Data to aws DynamoDB table</button>
      </form>
      {/* <iframe
        src="https://onedrive.live.com/embed?cid=C1E995875B26BBD4&amp;resid=C1E995875B26BBD4%211911&amp;authkey=AGNZd_iov9Nvruo&amp;em=2&amp;wdAr=1.7777777777777777"
        width="1186px"
        height="691px"
        frameborder="0"
      >
        This is an embedded{" "}
        <a target="_blank" href="https://office.com">
          Microsoft Office
        </a>{" "}
        presentation, powered by{" "}
        <a target="_blank" href="https://office.com/webapps">
          Office
        </a>
        .
      </iframe> */}
      {/* <iframe
        width="402"
        height="346"
        frameborder="0"
        scrolling="no"
        src="https://onedrive.live.com/embed?resid=C1E995875B26BBD4%21935&authkey=%21AEHXkNjKf1cWIsM&em=2&AllowTyping=True&ActiveCell='Sheet1'!C5&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True"
      ></iframe> */}
      Doc link:
      <input
        type="url"
        name="doclink"
        id="doclink"
        onChange={(e) => {
          setDoclink(e.target.value);
        }}
      />{" "}
      <DocIframe source={Doclink} />
      {/* <FormBox/> */}
      <h1>React File Viewer Demo</h1>
      <h2>Displaying file extensions:</h2>
      <details>
        <summary>.docx</summary>
        <FileViewer fileType="docx" filePath={docc} onError={onError} />
      </details>
      <details>
        <summary>Video</summary>
        <input
          type="file"
          name="vdo"
          id="vdo"
          onChange={(e) => {
            setvdo(e.target.value);
          }}
        />
        <FileViewer fileType="mp4" filePath={vdo} onError={onError} />
      </details>
      {/* <details>
        <summary>MP3</summary>
      <FileViewer fileType="mp3" filePath="./MP3_700KB.mp3" onError={onError} />
      </details>  */}
      <details>
        <summary>PDF</summary>
        <FileViewer fileType="pdf" filePath={Pdff} onError={onError} />
      </details>
      <input type="file" onChange={handleVideoUpload} />
      {/* <ReactPlayer
        url={vdo1}
        width="100%"
        height="100%"
        controls={true}
      /> */}
      {/* <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQngURS59TctWntZhZlm-VEPYvExsadEvGotffiwe4AmtEiV9CGi69UwX39jfb0VqwFaZy6NmJuIT6x/pubhtml?widget=true&amp;headers=false"></iframe> */}
      <FileNavigationpaneexpandedPostLoginHomePage />
    </>
  );
}

export default withAuthenticator(App);
