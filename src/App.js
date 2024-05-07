import './App.css';
import { ComicPage } from './Page';
import ComicData from "./Comic.json"

import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useParams,
  useNavigate
} from 'react-router-dom';

import { useEffect } from 'react';

import leftBgImage from './assets/Background-Left.webp';
import rightBgImage from './assets/Background-Right.webp';
import logoImage from "./assets/cropped-Fight-Flight-Logo-3-Transparent-White-small-3.webp";
import tumblrIcon from "./assets/tumblr.webp";

function App() {

  return (
    <div className="App ">
      <figure id=" m-0 p-0">
        <img src={leftBgImage} className="BackgroundImage float-start start-0" />
        <img src={rightBgImage} className="BackgroundImage float-end end-0" />
        <img src={logoImage} className='d-block mx-auto my-3 position-relative' />
      </figure>

      <main className='container PageContent text p-0' style={{ maxWidth: "55vw" }}>
        <nav id='nav' className='position-relative'>
          <div className='my-auto d-inline-block float-left start-0 position-absolute h-100 ms-1'>
            <a href='#' className='navlink p-2 rounded-1 mx-2 my-auto fs-6'>Author</a>
            <a href='#' className='navlink p-2 rounded-1 mx-2 fs-6'>Chapters</a>
            <a href='#' className='navlink p-2 rounded-1 mx-2 fs-6'>Patreon</a>
            <a href='#' className='navlink p-2 rounded-1 mx-2 fs-6'>Content Warning</a>
          </div>

          <div className='my-auto float-right end-0 position-absolute me-1'>
            <a href='#' title='Tumblr' className='mx-2' style={{ minHeight: '20px', maxHeight: '20px' }}><img id="tumblr" src={tumblrIcon} /></a>
            <a href='#' title='Facebook' className='mx-2'><i className="bi bi-facebook fs-5" /></a>
            <a href='#' title='Twitter' className='mx-2'><i className="bi bi-twitter fs-5" /></a>
            <a href='#' title='Email' className='mx-2'><i className="bi bi-envelope-fill fs-5" /></a>
          </div>
        </nav>

        <section className='container p-0 '>
          <Router>
            <Routes>
              <Route 
                path='/'
                element={<Landing />}
              />
              <Route
                path="comic/:id"
                element={<ComicPage ComicData={ComicData} />}
              />
            </Routes>
          </Router>
        </section>

        <footer className='small text-center mt-5 mb-3'>
          ©2014-2019 <a href="#">Rianne Meyers</a> | Developed and Maintained by <a href="#">Matt Hamel</a> | <span className='text-link' onClick={() => { window.scrollTo(0, 0) }}>Back to Top ↑</span>
        </footer>
      </main>

    </div>
  );
}

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to /comic/4 immediately after the component mounts
    navigate(`/comic/${ComicData.length - 1}`);
  }, [navigate]);

  return (
    <div>
      <p>Redirecting</p>
    </div>
  );
}

export default App;
