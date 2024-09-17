import './App.css';
import { ComicPage } from './Page';
import ComicData from "./Comic.json"

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate
} from 'react-router-dom';

import { useEffect } from 'react';

import leftBgImage from './assets/Background-Left.webp';
import rightBgImage from './assets/Background-Right.webp';
import logoImage from "./assets/cropped-Fight-Flight-Logo-3-Transparent-White-small-3.webp";

function App() {

  return (
    <div className="App ">
      <figure id=" m-0 p-0">
        <img src={leftBgImage} className="BackgroundImage float-start start-0 d-none d-md-block" alt="Left Background"/>
        <img src={rightBgImage} className="BackgroundImage float-end end-0 d-none d-md-block" alt="Right Background"/>
        <img src={logoImage} id="Logo" className=' d-block mx-auto my-3 position-relative' alt="Fight/Flight Logo"/>
      </figure>

      <main className='container-md container-fluid PageContent text p-0'>
        {/* <nav id='nav' className='position-relative'>
          <div className='my-auto d-inline-block float-left start-0 position-absolute h-100 ms-1'>
            <a href='#' className='navlink p-2 rounded-1 mx-2 my-auto fs-6'>Author</a>
            <a href='#' className='navlink p-2 rounded-1 mx-2 fs-6'>Content Warning</a>
            <a href='#' className='navlink p-2 rounded-1 mx-2 fs-6'>Chapters</a>
          </div>
        </nav> */}

        <section className='container  p-0 '>
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

        <footer className='small text-center mt-5 mb-3 d-flex justify-content-center flex-column  flex-md-row'>
          <small>©2014-2019 <a href="https://riannemeyers.wixsite.com/portfolio">Rianne Meyers</a></small>
          <small>Developed and Maintained by <a href="https://matthewhamel.dev">Matt Hamel</a></small>
          <small className='text-link' onClick={() => { window.scrollTo(0, 0) }}>Back to Top ↑</small>
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
