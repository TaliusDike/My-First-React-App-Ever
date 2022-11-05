import { NavLink, Link, Route, Routes } from "react-router-dom";
import Crements from "./Crements";
import FormEvent from "./FormEvent";
import Navigation from "./Navigation";

const ReactRouter = () => {
  return (
    <section className="main-container">
      <h1>Home Page</h1>
      <p>Click HERE to go to the about page.</p>
      <br />
      {/* I blurred out the long <NavLink> and imported it as a component instead. */}
      <Navigation />
      {/* <Link className="link-btn" to="/form">
        {" "}
        Move to form page
      </Link> */}
      {/* <NavLink
        style={({ isActive }) =>
          isActive ? { color: "red" } : { color: "white" }
        }
        className="link-btn"
        to="/form"
      >
        Form page
      </NavLink> */}
      {/* <Link className="link-btn" to="/">
        Move back to Home page
      </Link> */}
      {/* <NavLink
        style={({ isActive }) =>
          isActive ? { color: "red" } : { color: "white" }
        }
        className="link-btn"
        to="/"
      >
        Home page
      </NavLink> */}
      <br />
      <br />
      <Routes>
        <Route path="/" element={<Crements />} />
        <Route path="/form" element={<FormEvent />} />
      </Routes>
    </section>
  );
};

export default ReactRouter;
