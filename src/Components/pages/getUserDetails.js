import React from "react";
// Gmail authentication module
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
// React Hooks
import { useEffect, useState, Component } from "react";
//To talk to Database use "API" module
import { Amplify, API, graphqlOperation, Auth } from "aws-amplify";
import S3 from "react-aws-s3";
import * as AWS from "aws-sdk";
import { useHistory } from "react-router-dom";

// aws configuration
import awsmobile from "../../aws-exports";
import { Link } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import App from "../../App";

Amplify.configure(awsmobile);

function GetUserDetails({ signOut, user }) {
  // ========================
  const handleClick = (event) => {
    event.preventDefault();
    const config = {
      bucketName: "test-bucket-1313",
      dirName: "UserDetails",
      region: "ap-south-1",
      accessKeyId: "AKIAWL27HAFTQJQBA6CN",
      secretAccessKey: "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",
      s3Url: "https://" + "test-bucket-1313" + ".s3.amazonaws.com",
    };
    console.log(config);
    // let file = fileInput.current.files[0];
    // let fileName = fileInput.current.files[0].name;
    // console.log(file);
    putToDDB(username, User_profile_image_url);
    // const ReactS3Client = new S3(config);
    // ReactS3Client.uploadFile(file, fileName).then((data) => {
    //   console.log(data);
    //   if (data.status === 204) {
    //     console.log("success");
    //     // const s3Path = {
    //     //   bucket: data.bucket,
    //     //   key: data.key,
    //     // };
    //     putToDDB(username, User_profile_image_url);
    //   } else {
    //     console.error("error");
    //   }
    // }
    // );
  };

  // ==============================
  function putToDDB(username, User_profile_image_url) {
    const ddbClient = new AWS.DynamoDB.DocumentClient({
      region: "ap-south-1",
      secretAccessKey: "mSIItx8MTP8rtY97yLI/oA1GmS8lWJBMq5n2pMXP",
      accessKeyId: "AKIAWL27HAFTQJQBA6CN",
    });
    const putData = (tableName, data) => {
      let params = {
        TableName: tableName,
        Item: data,
      };

      ddbClient.put(params, function (err, data) {
        if (err) {
          console.log("Error", err);
        } else {
          console.log("Success", data);
        }
      });
    };
    putData("User_details", {
      user_name: username,
      //   password: password,
      User_profile_image_url: User_profile_image_url,
    });
  }

  const [userName, setuserName] = useState("");
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

  const [username, setUsername] = useState("");
  const [User_profile_image_url, set_User_profile_image_url] = useState("");
  return (
    <>
      <div>Getting User Details Page</div>
      <form className="upload" onSubmit={handleClick} />
      <label>
        User_Name:
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          name="username"
          type="text"
        />
      </label>
      <br />
      <label>
        User_profile_image_url:
        <input
          value={User_profile_image_url}
          onChange={(event) => set_User_profile_image_url(event.target.value)}
          name="User_profile_image_url"
          type="url"
        />
      </label>
      <br />
      <br />
      <button type="submit" onClick={handleClick}>
        Submit Data
      </button>
      <Link href="/home">
        Link To My Awesome Website
      </Link>
      ;
    </>
  );
}

export default withAuthenticator(GetUserDetails);
