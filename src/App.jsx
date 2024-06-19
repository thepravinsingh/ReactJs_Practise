import React from "react";
import "./App.css";
import FolderFirst from "./folders/folder-1/FolderFirst";
import FolderSecond from "./folders/folder-2/FolderSecond";
import FolderThird from "./folders/folder-3/FolderThird";

const App = () => {
  return (
    <div style={{ height: "2000px" }}>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Practice Layouts
      </h1>
      <FolderFirst />
      <FolderSecond />
      <FolderThird />
    </div>
  );
};

export default App;
