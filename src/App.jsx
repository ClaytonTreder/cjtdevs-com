import { Fragment, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './content/animations.css';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Footer from 'components/Footer/Footer';

import Home from 'screens/home/Home';
import Clients from 'screens/clients/Clients';
import Contact from 'screens/contact/Contact';
import About from 'screens/About/About';
import Blog from 'screens/blog/Blog';
import NewsLetter from 'screens/newsletter/NewsLetter';
import Services from 'screens/services/Services';
import NotFound from 'screens/notfound/NotFound';
import Unsubscribe from 'screens/unsubscribe/Unsubsribe';

import InitLoader from 'components/InitLoader/InitLoader';
import Prices from 'screens/prices/Prices';
import useSessionStorage from 'shared/hooks/useSessionStorage';
import Payments from 'screens/payments/Payments';

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState();

  const [initLoading, setInitLoading] = useSessionStorage('initLoading', false);

  return (
    <Fragment>
      <Helmet>
        <meta
          property='og:title'
          content='CJT Devs - Find your home page here'
        />
        <meta property='og:url' content='https://cjtdevs.com/' />
        <meta
          property='og:description'
          content='CJT Devs is a colletive of software
    developers looking to create your next website or mobile application.'
        />
        <meta property='og:image' content='%PUBLIC_URL%/images/preview.png' />
        <meta name='robots' content='index, follow' />
        <meta
          name='description'
          content='CJT Devs is a colletive of software developers looking to create your next website or mobile application.'
        />
        <title>CJT Devs</title>
      </Helmet>
      {initLoading ? (
        <Router>
          <div className='body-content'>
            <NavBar
              setMobileNavOpen={setMobileNavOpen}
              mobileNavOpen={mobileNavOpen}
            />
            <Header
              setMobileNavOpen={setMobileNavOpen}
              mobileNavOpen={mobileNavOpen}
            />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/services' element={<Services />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/clients' element={<Clients />} />
              <Route path='/blog/*' element={<Blog />} />
              <Route path='/prices' element={<Prices />} />
              <Route path='/payments' element={<Payments />} />
              <Route path='/newsletter' element={<NewsLetter />} />
              <Route path='/user/unsubscribe' element={<Unsubscribe />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      ) : (
        <InitLoader setInitLoading={setInitLoading} />
      )}
    </Fragment>
  );
}

export default App;
