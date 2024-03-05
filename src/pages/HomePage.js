import './HomePage.css';
import image from '../images/pfp.jpg';
import imagecs from '../images/cats-soup-img.webp';
import imagear from '../images/animal-rest-img.webp';
import lblogo from '../images/letterboxd-logo.png';
import grlogo from '../images/goodreads-logo.png';
import ghlogo from '../images/github-logo.png';

function HomePage() {
  return (
    // <div className="container-fluid bg-dark">
    //   <div className="row">
    //     <div className="col">
    //       <div className="card m-3 bg-secondary">
    //         <div className="row">
    //           <div className="col-md-4">
    //             <img src={image} alt="Profile icture" className="card-img-top img-fluid profile-image" />
    //           </div>
    //           <div className="col-md-8">
    //             <div className="card-body">
    //               <h2 className="fw-bold">Who am I?</h2>
    //               <p className="text-justify">
    //                 I am Alex Wang.
    //               </p>
    //               <h2 className="fw-bold">About Me</h2>
    //               <ul>
    //                 <li>I love watching TV shows and movies (see my <a href="https://letterboxd.com/alexthedawg/" rel="noreferrer" target="_blank" className="link-light">letterboxd</a> account)</li>
    //                 <li>I love reading books (see my <a href="https://www.goodreads.com/user/show/57369610-alex" rel="noreferrer" target="_blank" className="link-light">goodreads</a> account)</li>
    //                 <li>I love comfort games involving cats. For example,&nbsp;
    //                   <a href="https://catsandsoupgame.fandom.com/wiki/CatsAndSoup_Wiki#About_the_Game" rel="noreferrer" target="_blank" className="link-light" id="imagecs">
    //                     <img src={imagecs} alt="Cats and Soup App Icon" id="imagecs-popup" />this
    //                     </a> or&nbsp;
    //                   <a href="https://random-game-guides.fandom.com/wiki/Animal_Restaurant" rel="noreferrer" target="_blank" className="link-light" id="imagear">
    //                     <img src={imagear} alt="Cats and Soup App Icon" id="imagear-popup" />this
    //                     </a>.</li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className='home container-fluid bg-dark min-vh-100'>
      <div className="row align-items-center">
        <div className="col-6 p-0">
          <img src={image} alt="Profile Picture" className='profile-image' />
        </div>
        <div className="col-6 p-0 d-flex flex-column">
          <div className="card d-flex align-items-stretch bg-secondary justify-content-center m-5 h-50">
            <div>
              <p className='text-center p-4 m-0'><a className='link-dark text-uppercase text-decoration-none' href="https://letterboxd.com/alexthedawg/"><p>letterboxd</p><img src={lblogo} alt='letterboxd logo' /></a></p>
            </div>
            <div>
              <p className='text-center p-4 m-0'><a className='link-dark text-uppercase text-decoration-none' href="https://www.goodreads.com/user/show/57369610-alex"><p>goodreads</p><img src={grlogo} alt='goodreads logo' /></a></p>
            </div>
            <div>
              <p className='text-center p-4 m-0'><a className='link-dark text-uppercase text-decoration-none' href="https://github.com/alex-wang-13"><p>github</p><img src={ghlogo} alt='github logo' /></a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;