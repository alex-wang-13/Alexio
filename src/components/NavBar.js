import image from '../images/pfp.jpg';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
      <div className="navbar-nav justify-content-around w-100">
        <div className="navbar-brand align-self-center">
          <img src={image} alt="Profile Image" className="profile-image" />
        </div>
        <a href="/" className="nav-item nav-link align-self-center"><h3>Home</h3></a>
        <a href="/about" className="nav-item nav-link align-self-center"><h3>About</h3></a>
        <a href="/projects" className="nav-item nav-link align-self-center"><h3>Projects</h3></a>
      </div>
    </nav>
  );
}


export default NavBar;