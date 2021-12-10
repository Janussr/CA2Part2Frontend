import React from "react";
import { useEffect } from "react";
import facade from "../apiFacade";
import { NavLink } from "react-router-dom";

function User({ userMessage, setUserMessage }) {
  useEffect(() => {
    facade
      .fetchData("user/userinfo")
      .then((data) => setUserMessage(data.msg))
      .catch((error) => setUserMessage("  "));
  }, [setUserMessage]);

  return (
    <div className="center">
      <h1>User</h1>
      <h2>{userMessage}</h2>




        <NavLink activeClassName="active" to="/zoo">
        <button className="btn btn-danger">List of zoo's</button>
        </NavLink>

        <br></br>     <br></br>

        <NavLink activeClassName="active" to="/animal">
          <button className="btn btn-danger">List of animals</button>
        </NavLink>

    </div>
  );
}

export default User;
