import { NavLink } from "react-router-dom";

function Header({ facade }) {

  

  

  return (
    <ul className="header">
      <li>
        <NavLink activeClassName="active" to="/" exact>
          Home
        </NavLink>
      </li>
      {facade.hasUserAccess("user") && (
        <li>
          <NavLink activeClassName="active" to="/user">
            User
          </NavLink>
        </li>
      )}
      <li>
        {facade.hasUserAccess("admin") && (
          <NavLink  activeClassName="active" to="/admin">
            Admin
          </NavLink>
        )}
      </li>
      <div>
      </div>
     
    </ul>
  );
}

export default Header;
