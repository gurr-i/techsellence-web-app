import React from "react";

const DocIframe = ({ source }) => {
  if (!source) {
    return <div>Loading...</div>;
  }

  const src = source;
  return (
    <div>
        <center>
      <iframe
        // src={"https://docs.google.com/viewer?url=" + src + "&embedded=true"}
        src={""}
        title="file"
        width="80%"
        height="400"
      ></iframe>
      </center>
    </div>
  );
};

export default DocIframe;
