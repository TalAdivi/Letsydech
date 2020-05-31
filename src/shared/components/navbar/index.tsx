import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from 'react-router-dom';


import './navbar.scss';
import { Grid } from '@material-ui/core';
import T from './t';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const TabPanel = (props: TabPanelProps): any => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default function Navbar(): any {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className='left'>
      <AppBar position="fixed" color="transparent">
        <Grid container alignItems="flex-start" justify="flex-end" direction="row">

          <Router>

            <Tabs
              variant="fullWidth"
              value={value}
              onChange={handleChange}
              aria-label="nav tabs example"
            >
              <Tab component={Link} label="Page One" to="/drafts"  />
              <Tab component={Link} label="Page Two" to="/trash"  />

            </Tabs>
          </Router>
          {/* <Router>
            <div>
              <Tab>

                <Link to="/">Home</Link>
              </Tab>
  
              <Link to="/about">About</Link>
      
              <Link to="/users">Users</Link>
      
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/users">
                  <Users />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router> */}
          {/* <T /> */}
        </Grid>
      </AppBar>
      <TabPanel value={value} index={0}>
        one
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}
