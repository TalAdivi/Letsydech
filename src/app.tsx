import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import Home from './pages/home';
import AboutUs from './pages/aboutUs/index';
import Gallery from './pages/gallery';
import Donate from './pages/donate';
import ContactUs from './pages/contactUs'
import Stories from './pages/stories'
import Admission from './pages/admission';
import Success from './pages/success';
import ContactUsEn from './pages/contactUs/index.en';
import DonateEn from './pages/donate/index.en';
import GallaryComponentEn from './pages/gallery/index.en';
import StoriesEn from './pages/stories/index.en';
import AdmissionEn from './pages/admission/index.en';
import AboutUsEn from './pages/aboutUs/index.en';
import HomeEn from './pages/home/index.en';

const App = (): any => {
  return (
    <div>
      <MetaTags>
        <title> Letsydech </title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' />
      </MetaTags>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/Gallery" component={Gallery} />
        <Route exact path="/aboutUs" component={AboutUs} />
        <Route exact path="/contactUs" component={ContactUs} />
        <Route exact path="/Donate" component={Donate} />
        <Route exact path="/stories" component={Stories} />
        <Route exact path="/admission" component={Admission} />
        <Route exact path="/success" component={Success} />
        <Route exact path="/en" component={HomeEn} />
        <Route exact path="/en/Gallery" component={GallaryComponentEn} />
        <Route exact path="/en/aboutUs" component={AboutUsEn} />
        <Route exact path="/en/contactUs" component={ContactUsEn} />
        <Route exact path="/en/Donate" component={DonateEn} />
        <Route exact path="/en/stories" component={StoriesEn} />
        <Route exact path="/en/admission" component={AdmissionEn} />
      </Router>
    </div>
  );
};

export default App;