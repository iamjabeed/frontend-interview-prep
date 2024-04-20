import { useState } from "react";

const FileHandling = () => {
  const [file, setFile] = useState(null);
  const fileHandler = (e) => {
    setFile(e.target.files[0]);
    console.log("file", file);
    console.log(e.target.files[0]);
  };
  return (
    <div>
      <input type="file" name="image" id="image" onChange={fileHandler} />
    </div>
  );
};
export default FileHandling;
