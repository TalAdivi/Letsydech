import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Tab, AppBar, List, ListItem, ListItemText, Drawer, IconButton, Divider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './navbar.module.scss';
import Axios from 'axios';
import { Image } from '../../models/gallery.model';

const HeaderEn = ({ history, path }: any): any => {
  const [data, setData] = React.useState<{ Logo: Image }>();
  const [navOpen, setNavOpen] = React.useState(false);
  const [setNav, setSetNav] = React.useState(window.innerWidth <= 1113);

  React.useEffect((): any => {
    window.addEventListener('resize', () => {
      setSetNav(window.innerWidth <= 1113);
    });
    fetchData();
  }, []);

  const fetchData = async (): Promise<void> => {
    try {
      const res: { data: { Logo: Image } } = await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/info`);
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const drawer = (
    <List>
      <ListItem button key={'Home page'} onClick={() => history.push('/en')}>
        <ListItemText className={styles.listItem} primary={'Home page'} />
      </ListItem>
      <Divider />
      <ListItem button key={'About us'} onClick={() => history.push('/en/aboutUs')}>
        <ListItemText className={styles.listItem} primary={'About us'} />
      </ListItem>
      <Divider />
      <ListItem button key={'Admission'} onClick={() => history.push('/en/admission')}>
        <ListItemText className={styles.listItem} primary={'Admission'} />
      </ListItem>
      <Divider />
      <ListItem button key={'Stories'} onClick={() => history.push('/en/stories')}>
        <ListItemText className={styles.listItem} primary={'Stories'} />
      </ListItem>
      <Divider />
      <ListItem button key={'Gallery'} onClick={() => history.push('/en/gallery')}>
        <ListItemText className={styles.listItem} primary={'Gallery'} />
      </ListItem>
      <Divider />
      <ListItem button key={'Donate'} onClick={() => history.push('/en/donate')}>
        <ListItemText className={styles.listItem} primary={'Donate'} />
      </ListItem>
      <Divider />
      <ListItem button key={'Contact us'} onClick={() => history.push('/en/contactUs')}>
        <ListItemText className={styles.listItem} primary={'Contact us'} />
      </ListItem>
      <Divider />
      <ListItem button key={'Hebrew'} onClick={() => history.push(`/${path}`)}>
        <ListItemText className={styles.listItem} primary={'Hebrew'} />
      </ListItem>
    </List>
  );

  const container: any = window !== undefined ? document.body : undefined;

  return (
    <div className={styles.root}>
      <AppBar position="static" color="transparent">
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src={data?.Logo.url} alt="logo" onClick={() => history.push('/')} />
          </div>
          <div className={styles.nav}>
            {!setNav ?
              <div className={styles.gridHolder}>
                <Router>
                  <div>
                    <Tab className={styles.tab} label='Home page' onClick={() => history.push('/en')} />
                    <Tab className={styles.tab} label='About us' onClick={() => history.push('/en/aboutUs')} />
                    <Tab className={styles.tab} label='Admission' onClick={() => history.push('/en/admission')} />
                    <Tab className={styles.tab} label='Stories' onClick={() => history.push('/en/stories')} />
                    <Tab className={styles.tab} label='Gallery' onClick={() => history.push('/en/gallery')} />
                    <Tab className={styles.tab} label='Donate' onClick={() => history.push('/en/donate')} />
                    <Tab className={styles.tab} label='Contact us' onClick={() => history.push('/en/contactUs')} />
                    <Tab className={styles.tab} label='Hebrew' onClick={() => history.push(`/${path}`)} />
                  </div>
                </Router>
              </div>
              :
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={() => setNavOpen(!navOpen)}
                className={styles.menuButton}
              >
                <MenuIcon />
              </IconButton>
            }
          </div>
          <div>
            <Drawer
              container={container}
              variant="temporary"
              anchor={'left'}
              open={navOpen}
              onClose={() => setNavOpen(false)}
              className={styles.drawer}
              classes={{
                paper: styles.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true
              }}
            >
              {drawer}
            </Drawer>
          </div>
        </div >
      </AppBar>
    </div>
  );
};

export default HeaderEn;