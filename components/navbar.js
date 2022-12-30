import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const drawerWidth = 240;
const navItems = [
  
  {name:"Blockchain NFT", slug:"Blockchain-NFT"},
  { name: 'Full stack development', slug: 'full-stack-development' },
  // {name: 'Web and mobile app development'},
  { name: 'Services for start ups', slug: 'services-for-start-ups' },
  { name: 'Android App Development', slug: 'android-app-development' },
  { name: 'Ios App Development', slug: 'ios-app-development' },
  {name:"About Us", slug:"about-us"},
  {name:"Contact Us", slug:"contact-us"},
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileOpenBox, setMobileOpenBox] = React.useState(false);
  const [mobileSubOpenBox, setSubMobileOpenBox] = React.useState(false);

  const handleDrawerToggle = () => {
   // alert(!mobileSubOpenBox);
  // alert('here');
    if(!mobileSubOpenBox){
      setMobileOpen(true);
    }else{
      setMobileOpen(true);
    }
  };

  const handleDrawerMobileToggle = () => {
    setMobileOpen(true);
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState();

  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [subAnchorEl, setSubAnchorEl] = useState();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAnchorEl, setMobileAnchorEl] = useState();

  const [subMobileMenuOpen, setSubMobileMenuOpen] = useState(false);
  const [subMobileAnchorEl, setSubMobileAnchorEl] = useState();

  const recordButtonPosition = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  }

  const recordSubButtonPosition = (event) => {
    setSubAnchorEl(event.currentTarget);
    setSubMenuOpen(true);
  }
  const recordMobileButtonPosition = (event) => {
   // alert(0);
    setMobileAnchorEl(event.currentTarget);
    setSubMobileOpenBox(true);
    setMobileMenuOpen(true);
  }
  const recordSubMobileButtonPosition  = (event) => {
    setSubMobileAnchorEl(event.currentTarget);
    setSubMobileMenuOpen(true);
  }

  let closeMenu = () => {
      setMenuOpen(false);
  }

  let closeSubMenu = () => {
    setSubMenuOpen(false);
  }

  let closeMobileMenu = () => {
    setMobileMenuOpen(false);
  }

  let closeSubMobileMenu = () => {
    setSubMobileMenuOpen(false);
  }


  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        <Avatar
          alt='Logo'
          src='https://c5cea5.n3cdn1.secureserver.net/wp-content/uploads/2020/09/INFORDRIVE-LOGO-FINAL-01-1-1-1-1.png'
        />
      </Typography>
      <Divider />
      <List>
              <ListItem disablePadding>
                <ListItemButton component='a' to="/">
                  <ListItemText primary={'Home'} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton 
                  onClick={recordMobileButtonPosition}
                  disableElevation>
                  Our services <KeyboardArrowDownIcon/>
                </ListItemButton>
                <Menu
                  anchorEl={mobileAnchorEl}
                  open={mobileMenuOpen}
                  onClose={closeMobileMenu}>
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton component='a' to="/web-and-mobile-app-development">
                        <ListItemText primary={'Web and app development '} />
                      </ListItemButton>
                      <ArrowForwardIosIcon 
                        onClick={recordSubMobileButtonPosition}
                        className="customIcon"
                      />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton component='a' to="/services-for-start-ups" >
                        <ListItemText primary={'Services for start ups'} />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton component='a' to="/Blockchain-NFT" >
                        <ListItemText primary={'Blockchain and NFT'} />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Menu>

                <Menu
                  anchorEl={subMobileAnchorEl}
                  open={subMobileMenuOpen}
                  onClose={closeSubMobileMenu}>
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton component='a' to="/android-app-development">
                        <ListItemText primary={'Android app development'} />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton component='a' to="/ios-app-development" >
                        <ListItemText primary={'IOS app development'} />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Menu>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component='a' to="/about-us">
                    <ListItemText primary={'About us'} />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton component='a' to="/contact-us">
                    <ListItemText primary={'Contact us'} />
                  </ListItemButton>
                </ListItem>
            </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }} className='navbarMenu'>
      <AppBar component='nav'>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerMobileToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h4'
            component='div'
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              maxWidth: 445,
            }}
          >
            <img
              alt='Logo'
              style={{ width: 80, height: 60 }}
              src='https://c5cea5.n3cdn1.secureserver.net/wp-content/uploads/2020/09/INFORDRIVE-LOGO-FINAL-01-1-1-1-1.png'
            />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <List>
              <ListItem disablePadding>
                <ListItemButton component='a' to="/">
                  <ListItemText primary={'Home'} />
                </ListItemButton>
                <ListItemButton 
                  onClick={recordButtonPosition}
                  disableElevation>
                  Our services <KeyboardArrowDownIcon/>
                </ListItemButton>
                <Menu
                  anchorEl={anchorEl}
                  open={menuOpen}
                  onClose={closeMenu}>
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton component='a' to="/web-and-mobile-app-development">
                        <ListItemText primary={'Web and app development '} />
                      </ListItemButton>
                      <ArrowForwardIosIcon 
                        onClick={recordSubButtonPosition}
                        className="customIcon"
                      />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton component='a' to="/services-for-start-ups" >
                        <ListItemText primary={'Services for start ups'} />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton component='a' to="/Blockchain-NFT" >
                        <ListItemText primary={'Blockchain and NFT'} />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Menu>

                <Menu
                  anchorEl={subAnchorEl}
                  open={subMenuOpen}
                  onClose={closeSubMenu}>
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton component='a' to="/android-app-development">
                        <ListItemText primary={'Android app development'} />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton component='a' to="/ios-app-development" >
                        <ListItemText primary={'IOS app development'} />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Menu>


                <ListItemButton component='a' to="/about-us">
                  <ListItemText primary={'About us'} />
                </ListItemButton>
                <ListItemButton component='a' to="/contact-us">
                  <ListItemText primary={'Contact us'} />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component='main' sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
