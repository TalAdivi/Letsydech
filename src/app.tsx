import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import Home from './pages/home';
import AboutUs from './pages/aboutUs';

const App = () => {
  return (
    <div>
      <MetaTags>
        <title> Letsydech </title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' />
      </MetaTags>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/test" component={() => { return <div>'Test'</div>; }} />
        <Route exact path="/aboutUs" component={AboutUs} />
      </Router>
    </div>
  );
};

export default App;