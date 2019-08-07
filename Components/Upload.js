import React, { useState, useEffect } from "react";
import api from "../utils/api";

const Upload = () => {
  const [file, setFile] = useState("");

  const submit = e => {
    e.preventDefault();
    console.log(file);
    const fd = new FormData();
    fd.append("myImage", file, file.name);
    api.upload(fd).then(done => {
      console.log(done);
    });
  };

  const change = e => {
    setFile(e.target.files[0]);
  };
  return (
    <form enctype="multipart/form-data" onSubmit={submit}>
      <input type="file" name="myImage" onChange={change} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Upload;
