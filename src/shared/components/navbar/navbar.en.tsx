import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Grid, Tab, AppBar, List, ListItem, ListItemText, Drawer, IconButton, Divider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './navbar.en.module.scss';
import Axios from 'axios';
import { Image } from '../../models/gallery.model';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
        backgroundColor: '#fdfcdc'
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: '#fdfcdc'
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

const Header = ({ history, path }: any): any => {
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
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const drawer = (
    <List>
      <ListItem button key={'עמוד הבית'} onClick={() => history.push('/')}>
        <ListItemText className={styles.listItem} primary={'עמוד הבית'} />
      </ListItem>
      <Divider />
      <ListItem button key={'אודותינו'} onClick={() => history.push('/aboutUs')}>
        <ListItemText className={styles.listItem} primary={'אודותינו'} />
      </ListItem>
      <Divider />
      <ListItem button key={'אישפוזית לנשים'} onClick={() => history.push('/admission')}>
        <ListItemText className={styles.listItem} primary={'אישפוזית לנשים'} />
      </ListItem>
      <Divider />
      <ListItem button key={'סיפורים'} onClick={() => history.push('/stories')}>
        <ListItemText className={styles.listItem} primary={'סיפורים'} />
      </ListItem>
      <Divider />
      <ListItem button key={'גלריית תמונות'} onClick={() => history.push('/gallery')}>
        <ListItemText className={styles.listItem} primary={'גלריית תמונות'} />
      </ListItem>
      <Divider />
      <ListItem button key={'תרומות'} onClick={() => history.push('/donate')}>
        <ListItemText className={styles.listItem} primary={'תרומות'} />
      </ListItem>
      <Divider />
      <ListItem button key={'צרו קשר'} onClick={() => history.push('/contactUs')}>
        <ListItemText className={styles.listItem} primary={'צרו קשר'} />
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
              <Grid className={styles.grid} container alignItems="flex-start" justify="flex-start" direction="column">
                <Router>
                  <div>
                    <Tab label='עמוד הבית' onClick={() => history.push('/')} />
                    <Tab label='אודותינו' onClick={() => history.push('/aboutUs')} />
                    <Tab label='אישפוזית לנשים' onClick={() => history.push('/admission')} />
                    <Tab label='סיפורים' onClick={() => history.push('/stories')} />
                    <Tab label='גלריית תמונות' onClick={() => history.push('/gallery')} />
                    <Tab label='תרומות' onClick={() => history.push('/donate')} />
                    <Tab label='צרו קשר' onClick={() => history.push('/contactUs')} />
                    <Tab label='Hebrew' onClick={() => history.push(`/${path}`)} />
                  </div>
                </Router>
              </Grid>
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
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </div>
        </div >
      </AppBar>
    </div>
  );
}

export default Header;