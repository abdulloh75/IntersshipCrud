import React from "react";
import "./Loading.css";
import ReactLoading from 'react-loading'

function Loading() {
  return (
    <div className="sudo">
      <ReactLoading
        type={"bars"}
        color={"#03fc4e"}
        height={150}
        width={150}
      />
    </div>
  );
}

export default Loading;