import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import Home from './pages/home';
import AboutUs from './pages/aboutUs/index';
import Gallery from './pages/gallery';
import ContactUs from './pages/contactUs'
import Stories from './pages/stories'

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
        <Route exact path="/stories" component={Stories} />
      </Router>
    </div>
  );
};

export default App;