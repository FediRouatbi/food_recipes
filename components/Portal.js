import React from "react";
import ReactDOM from "react-dom";
const Portal = (Component) => (props) => {
  return ReactDOM.createPortal(
    <Component {...props} />,
    document.getElementById("__next")
  );
};
export default Portal;
