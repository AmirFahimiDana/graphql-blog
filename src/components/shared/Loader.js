import React from "react";
import { Oval } from "react-loader-spinner";


const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "1000px",
        display: "flex",
        justifyContent: "center",
        paddingTop: "20px",
      }}
    >
      <Oval
        height="80"
        width="80"
        radius="9"
        color="grey"
        ariaLabel="three-dots-loading"
     
      />
    </div>
  );
};

export default Loader;
