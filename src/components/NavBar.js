function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
      <div className="collapse navbar-collapse justify-content-center">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="/projects" className="nav-link">Projects</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}


export default NavBar;