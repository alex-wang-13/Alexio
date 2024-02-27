function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-black sticky-top">
      <div className="navbar-nav justify-content-around w-100">
        <a href="/" className="nav-item nav-link align-self-center"><h4>Home</h4></a>
        <a href="/about" className="nav-item nav-link align-self-center"><h4>About</h4></a>
        <a href="/projects" className="nav-item nav-link align-self-center"><h4>Projects</h4></a>
      </div>
    </nav>
  );
}


export default NavBar;