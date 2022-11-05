import { Link, NavLink, Route, Routes } from "react-router-dom";


// I cut out the <NavLink> from the ReactRouter.js component to become its own standalone component...

const Navigation = () => {
  return (
    <section className="navigation">
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "red" } : { color: "white" }
        }
        className="link-btn"
        to="/"
      >
        Home page
      </NavLink>

      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "red" } : { color: "white" }
        }
        className="link-btn"
        to="/form"
      >
        Form page
      </NavLink>
    </section>
  );
};

export default Navigation;
