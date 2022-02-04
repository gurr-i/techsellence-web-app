import React from "react";

function Formbox() {
  var FormBox = React.createClass({
    getInitialState: function () {
      return {
        file: "",
        imagePreviewUrl: "",
      };
    },
    pressButton: function (e) {
      e.preventDefault();
      // TODO: do something with -> this.state.file
      console.log("handle uploading-", this.state.file);
    },
    getPhoto: function (e) {
      e.preventDefault();

      let reader = new FileReader();
      let file = e.target.files[0];

      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result,
        });
      };

      reader.readAsDataURL(file);
    },
    render: function () {
      let { imagePreviewUrl } = this.state;
      let imagePreview = null;
      if (imagePreviewUrl) {
        imagePreview = <img src={imagePreviewUrl} />;
      } else {
        imagePreview = (
          <div className="previewText">Please select an Image for Preview</div>
        );
      }
      return (
        <div>
          <form action="." enctype="multipart/form-data">
            <input type="file" onChange={this.getPhoto} />
            <button onClick={this.pressButton}> Get it </button>
          </form>
          <div className="imgPreview">{imagePreview}</div>
        </div>
      );
    },
  });
  return (
    <div>
      <FormBox />
    </div>
  );
}

export default Formbox;
