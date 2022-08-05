import React, { useContext } from "react";
import { Context } from "../../../App.js";
import ErrorStyle from "./error.module.sass";

function Error() {
  const [mode] = useContext(Context);
  const darkTheme = mode.mode === 'dark'?ErrorStyle.darkTheme:''
  return (
    <div className={`${ErrorStyle.errorBox} ${darkTheme}`}>
      <div>
        <h1
          className={
            ErrorStyle.header
          }
        >
          Error : 404{" "}
        </h1>
        <h2 className={ErrorStyle.subHeader}>Page Not Found</h2>
      </div>
    </div>
  );
}

export default Error;
