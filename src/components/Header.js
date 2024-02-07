import image from '../images/pfp.jpg';

function Header() {
  return (
    <div className="header-container container-fluid" style={{padding: 0}}>
      <div className="row">
        <img src={image} alt="Header Image" className="header-image" />
      </div>
    </div>
  );
}

export default Header;