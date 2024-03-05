import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-black sticky-top">
      <div className="navbar-nav justify-content-around w-100">
        <Link to="/" className="nav-item nav-link align-self-center"><h4>Home</h4></Link>
        <Link to="/about" className="nav-item nav-link align-self-center"><h4>About</h4></Link>
        <Link to="/projects" className="nav-item nav-link align-self-center"><h4>Projects</h4></Link>
      </div>
    </nav>
  );
}

export default NavBar;