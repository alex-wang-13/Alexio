import './HomePage.css';
import image from '../images/pfp.jpg';
import imagecs from '../images/cats-soup-img.webp';
import imagear from '../images/animal-rest-img.webp';
import lblogo from '../images/letterboxd-logo.png';
import grlogo from '../images/goodreads-logo.png';
import ghlogo from '../images/github-logo.png';

function HomePage() {
  return (
    <div className='home container-fluid bg-dark min-vh-100 '>
      <div className="row justify-content-center">
        <div className="col-4 ">
          <img src={image} alt="Profile Picture" className='profile-image' />
        </div>
        <div className="col-8 d-flex bg-secondary flex-row justify-content-evenly rounded m-4">
          <p className='text-center p-4 m-0'><a className='link-dark text-uppercase text-decoration-none' target='blank_' href="https://letterboxd.com/alexthedawg/"><p>letterboxd</p><img src={lblogo} alt='letterboxd logo' /></a></p>
          <p className='text-center p-4 m-0'><a className='link-dark text-uppercase text-decoration-none' target='blank_' href="https://www.goodreads.com/user/show/57369610-alex"><p>goodreads</p><img src={grlogo} alt='goodreads logo' /></a></p>
          <p className='text-center p-4 m-0'><a className='link-dark text-uppercase text-decoration-none' target='blank_' href="https://github.com/alex-wang-13"><p>github</p><img src={ghlogo} alt='github logo' /></a></p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;