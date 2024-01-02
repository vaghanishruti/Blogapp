import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Adminprotected = (props) => {
  let history = useHistory();
  let [token, setToken] = useState("");
  useEffect(() => {
    let getToken = localStorage.getItem("adminToken");
    if (!getToken) {
      return history.push("/admin");
    }
    setToken(getToken)
  }, []);

  if (!token) {
    return <p>Loading...</p>;
  }
  return <>{props.children}</>;
};

export default Adminprotected;
