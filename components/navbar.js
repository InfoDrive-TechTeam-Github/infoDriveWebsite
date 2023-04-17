import React, { useState } from 'react';
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
  { name: 'Blockchain NFT', slug: 'Blockchain-NFT' },
  { name: 'Full stack development', slug: 'full-stack-development.html' },
  // {name: 'Web and mobile app development'},
  { name: 'Services for start ups', slug: 'services-for-start-ups.html' },
  { name: 'Android App Development', slug: 'android-app-development.html' },
  { name: 'Ios App Development', slug: 'ios-app-development.html' },
  { name: 'About Us', slug: 'about-us.html' },
  { name: 'Contact Us', slug: 'contact-us.html' },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileOpenBox, setMobileOpenBox] = React.useState(false);
  const [mobileSubOpenBox, setSubMobileOpenBox] = React.useState(false);

  const handleDrawerToggle = () => {
    // alert(!mobileSubOpenBox);
    // alert('here');
    if (!mobileSubOpenBox) {
      setMobileOpen(true);
    } else {
      setMobileOpen(true);
    }
  };

  const handleDrawerMobileToggle = () => {
    setMobileOpen(true);
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState();

  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [subMenuSaleOpen, setSubMenuSaleOpen] = useState(false);
  const [subMenuDigitalOpen, setSubMenuDigitalOpen] = useState(false);

  const [subAnchorEl, setSubAnchorEl] = useState();
  const [subAnchorSaleEl, setSubAnchorSaleEl] = useState();
  const [subAnchorDigitalEl, setSubAnchorDigitalEl] = useState();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuSaleOpen, setMobileMenuSaleOpen] = useState(false);
  const [mobileMenuDigitalOpen, setMobileMenuDigitalOpen] = useState(false);

  const [mobileAnchorEl, setMobileAnchorEl] = useState();
  const [mobileAnchorSaleEl, setMobileAnchorSaleEl] = useState();
  const [mobileAnchorDigitalEl, setMobileAnchorDigitalEl] = useState();

  const [subMobileMenuOpen, setSubMobileMenuOpen] = useState(false);
  const [subMobileMenuSaleOpen, setSubMobileMenuSaleOpen] = useState(false);
  const [subMobileMenuDigitalOpen, setSubMobileMenuDigitalOpen] =
    useState(false);

  const [subMobileAnchorEl, setSubMobileAnchorEl] = useState();
  const [subMobileAnchorSaleEl, setSubMobileAnchorSaleEl] = useState();
  const [subMobileAnchorDigitalEl, setSubMobileAnchorDigitalEl] = useState();

  const recordButtonPosition = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const recordSubButtonPosition = (event) => {
    setSubAnchorEl(event.currentTarget);
    setSubMenuOpen(true);
    setSubMenuSaleOpen(false);
    setSubMobileAnchorDigitalEl(false);
  };

  const recordSubButtonPositionSale = (event) => {
    setSubAnchorSaleEl(event.currentTarget);
    setSubMenuOpen(false);
    setSubMenuSaleOpen(true);
    setSubMenuDigitalOpen(false);
    setSubMobileAnchorDigitalEl(false);
  };

  const recordSubButtonPositionDigital = (event) => {
    setSubAnchorDigitalEl(event.currentTarget);
    setSubMenuOpen(false);
    setSubMenuSaleOpen(false);
    setSubMobileAnchorDigitalEl(true);
    setSubMenuDigitalOpen(true);
  };

  const recordMobileButtonPosition = (event) => {
    // alert(0);
    setMobileAnchorEl(event.currentTarget);
    setSubMobileOpenBox(true);
    setMobileMenuOpen(true);
  };
  const recordSubMobileButtonPosition = (event) => {
    setSubMobileAnchorEl(event.currentTarget);
    setSubMobileMenuOpen(true);
    setSubMobileMenuSaleOpen(false);
    setSubMobileMenuDigitalOpen(false);
  };

  const recordSubMobileButtonPositionSale = (event) => {
    setSubMobileAnchorSaleEl(event.currentTarget);
    setSubMobileMenuOpen(false);
    setSubMobileMenuSaleOpen(true);
    setSubMobileMenuDigitalOpen(false);
  };

  const recordSubMobileButtonPositionDigital = (event) => {
    setSubMobileAnchorDigitalEl(event.currentTarget);
    setSubMobileMenuOpen(false);
    setSubMobileMenuSaleOpen(false);
    setSubMobileMenuDigitalOpen(true);
  };

  let closeMenu = () => {
    setMenuOpen(false);
  };

  let closeSubMenu = () => {
    setSubMenuOpen(false);
    setSubMenuSaleOpen(false);
    setSubMenuDigitalOpen(false);
  };

  let closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  let closeSubMobileMenu = () => {
    setSubMobileMenuOpen(false);
    setSubMobileMenuSaleOpen(false);
    setSubMobileMenuDigitalOpen(false);
  };

  const drawer = (
    <Box
      className='mobileMenu'
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center' }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton component='a' to='/'>
            <ListItemText primary={'Home'} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' to='/about-us.html'>
            <ListItemText primary={'About us'} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={recordMobileButtonPosition} disableElevation>
            Our services <KeyboardArrowDownIcon />
          </ListItemButton>
          {/* list for mobile menu*/}
          <Menu
            className='subMobileMenu'
            anchorEl={mobileAnchorEl}
            open={mobileMenuOpen}
            onClose={closeMobileMenu}
          >
            <List>
              <ListItem disablePadding>
                <ListItemButton component='a' to='/salesforce-development.html'>
                  <ListItemText primary={'Saleforce Development'} />
                </ListItemButton>
                <ArrowForwardIosIcon
                  onClick={recordSubMobileButtonPositionSale}
                  className='customIcon'
                />
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component='a'
                  to='/web-and-mobile-app-development.html'
                >
                  <ListItemText primary={'Web and app development '} />
                </ListItemButton>
                <ArrowForwardIosIcon
                  onClick={recordSubMobileButtonPosition}
                  className='customIcon'
                />
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component='a' to='/blockchain-nft.html'>
                  <ListItemText primary={'Blockchain and NFT'} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  component='a'
                  to='/saas-application-development.html'
                >
                  <ListItemText primary={'SAAS Application Development'} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton component='a' to='/sap-emarsys.html'>
                  <ListItemText primary={'SAP Emarsys'} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton component='a' to='/services-for-start-ups.html'>
                  <ListItemText primary={'Services for start ups'} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  component='a'
                  to='/business-process-management.html'
                >
                  <ListItemText primary={'Business Process Management'} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton component='a' to='/staff-augmentation.html'>
                  <ListItemText primary={'Staff Augmentation'} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  component='a'
                  to='/digital-marketing-services.html'
                >
                  <ListItemText primary={'Digital Marketing Services'} />
                </ListItemButton>
                <ArrowForwardIosIcon
                  onClick={recordSubMobileButtonPositionDigital}
                  className='customIcon'
                />
              </ListItem>
            </List>
          </Menu>

          <Menu
            anchorEl={subMobileAnchorEl}
            open={subMobileMenuOpen}
            className='subMobileMenu'
            onClose={closeSubMobileMenu}
          >
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  component='a'
                  to='/android-app-development.html'
                >
                  <ListItemText primary={'Android app development'} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component='a' to='/ios-app-development.html'>
                  <ListItemText primary={'IOS app development'} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component='a' to='/full-stack-development.html'>
                  <ListItemText primary={'Full stack development'} />
                </ListItemButton>
              </ListItem>
            </List>
          </Menu>

          <Menu
            anchorEl={subMobileAnchorSaleEl}
            open={subMobileMenuSaleOpen}
            className='subMobileMenu'
            onClose={closeSubMobileMenu}
          >
            <List>
              <ListItem disablePadding>
                <ListItemButton component='a' to='/sales-cloud.html'>
                  <ListItemText primary={'Sales Cloud'} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component='a' to='/service-cloud.html'>
                  <ListItemText primary={'Service Cloud'} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component='a' to='/marketing-cloud.html'>
                  <ListItemText primary={'Marketing Cloud'} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component='a'
                  to='/salesforce-einstein-analytics.html'
                >
                  <ListItemText primary={'Salesforce Einstein Analytics'} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component='a' to='/salesforce-support.html'>
                  <ListItemText primary={'Salesforce Support'} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component='a' to='/salesforce-lightning.html'>
                  <ListItemText primary={'Salesforce Lightning'} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component='a'
                  to='/customer-relationship-management.html'
                >
                  <ListItemText primary={'CRM'} />
                </ListItemButton>
              </ListItem>
            </List>
          </Menu>

          <Menu
            anchorEl={subMobileAnchorDigitalEl}
            open={subMobileMenuDigitalOpen}
            className='subMobileMenu'
            onClose={closeSubMobileMenu}
          >
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  component='a'
                  to='/search-engine-optimization.html'
                >
                  <ListItemText primary={'Search Engine Optimization'} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component='a'
                  to='/social-media-optimization.html'
                >
                  <ListItemText primary={'Social media optimization'} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component='a'
                  to='/pay-per-click-advertisement.html'
                >
                  <ListItemText primary={'Pay per click advertisement'} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component='a'
                  to='/online-reputation-management.html'
                >
                  <ListItemText primary={'Online Reputation Management'} />
                </ListItemButton>
              </ListItem>
            </List>
          </Menu>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' to='/blog.html'>
            <ListItemText primary={'Blog'} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' to='/careers.html'>
            <ListItemText primary={'Careers'} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' to='/contact-us.html'>
            <ListItemText primary={'Contact us'} />
          </ListItemButton>
        </ListItem>
      </List>

      <List className='partnerButtonMobile'>
        <ListItem>
          <ListItemButton component='a' to='/contact-us.html'>
            <ListItemText primary={"Let's partner"} />
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
          <Button
            href='/'
            variant='text'
            style={{ float: 'right', position: 'absolute', right: '0px' }}
            className='logoMobile'
          >
            <img
              alt='Logo'
              style={{ width: 60, height: 43 }}
              src='https://cdn.discordapp.com/attachments/949683263386054716/1076906970440814702/logoHeader.png'
            />
          </Button>

          <Typography
            variant='h4'
            component='div'
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              maxWidth: 445,
            }}
          >
            <Button href='/' variant='text' className='logoPC'>
              <img
                alt='Logo'
                style={{ width: 115, height: 77 }}
                src='https://cdn.discordapp.com/attachments/949683263386054716/1076906970440814702/logoHeader.png'
              />
            </Button>
          </Typography>

          {/**main Menu */}
          <Box
            className='mainMenu'
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <List className='partnerButton '>
              <ListItem>
                <ListItemButton component='a' to='/contact-us.html'>
                  <ListItemText primary={"Let's partner"} />
                </ListItemButton>
              </ListItem>
            </List>

            <List>
              <ListItem disablePadding>
                <ListItemButton component='a' to='/'>
                  <ListItemText primary={'Home'} />
                </ListItemButton>
                <ListItemButton component='a' to='/about-us.html'>
                  <ListItemText primary={'About us'} />
                </ListItemButton>
                <ListItemButton onClick={recordButtonPosition} disableElevation>
                  Our services <KeyboardArrowDownIcon />
                </ListItemButton>
                <Menu
                  anchorEl={anchorEl}
                  open={menuOpen}
                  className='subMenuOptions'
                  onClose={closeMenu}
                >
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton
                        component='a'
                        to='/salesforce-development.html'
                      >
                        <ListItemText primary={'Salesforce Development '} />
                      </ListItemButton>
                      <ArrowForwardIosIcon
                        onClick={recordSubButtonPositionSale}
                        className='customIcon'
                        style={{
                          width: '43px',
                          height: '35px',
                          fontWeight: 'bolder',
                          marginLeft: '-12px',
                        }}
                      />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton
                        component='a'
                        to='/web-and-mobile-app-development.html'
                      >
                        <ListItemText primary={'Web and app development '} />
                      </ListItemButton>
                      <ArrowForwardIosIcon
                        onClick={recordSubButtonPosition}
                        className='customIcon'
                        style={{
                          width: '43px',
                          height: '35px',
                          fontWeight: 'bolder',
                          marginLeft: '-12px',
                        }}
                      />
                    </ListItem>

                    <ListItem disablePadding>
                      <ListItemButton component='a' to='/blockchain-nft.html'>
                        <ListItemText primary={'Blockchain and NFT'} />
                      </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                      <ListItemButton
                        component='a'
                        to='/saas-application-development.html'
                      >
                        <ListItemText
                          primary={'SAAS Application Development'}
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton component='a' to='/sap-emarsys.html'>
                        <ListItemText primary={'SAP Emarsys'} />
                      </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                      <ListItemButton
                        component='a'
                        to='/services-for-start-ups.html'
                      >
                        <ListItemText
                          primary={'IT Solutions for Start-up Business'}
                        />
                      </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                      <ListItemButton
                        component='a'
                        to='/business-process-management.html'
                      >
                        <ListItemText primary={'Business Process Management'} />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton
                        component='a'
                        to='/staff-augmentation.html'
                      >
                        <ListItemText primary={'Staff Augmentation'} />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton
                        component='a'
                        to='/digital-marketing-services.html'
                      >
                        <ListItemText primary={'Digital Marketing Services'} />
                      </ListItemButton>
                      <ArrowForwardIosIcon
                        onClick={recordSubButtonPositionDigital}
                        className='customIcon'
                        style={{
                          width: '43px',
                          height: '35px',
                          fontWeight: 'bolder',
                          marginLeft: '-12px',
                        }}
                      />
                    </ListItem>
                  </List>
                </Menu>
                <Menu
                  anchorEl={subAnchorDigitalEl}
                  open={subMenuDigitalOpen}
                  className='subMenuOptions'
                  onClose={closeSubMenu}
                >
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton
                        component='a'
                        to='/search-engine-optimization.html'
                      >
                        <ListItemText primary={'Search Engine Optimization'} />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton
                        component='a'
                        to='/social-media-optimization.html'
                      >
                        <ListItemText primary={'Social media optimization'} />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton
                        component='a'
                        to='/pay-per-click-advertisement.html'
                      >
                        <ListItemText primary={'Pay per click advertisement'} />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton
                        component='a'
                        to='/online-reputation-management.html'
                      >
                        <ListItemText
                          primary={'Online Reputation Management'}
                        />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Menu>

                <Menu
                  anchorEl={subAnchorEl}
                  open={subMenuOpen}
                  className='subMenuOptions'
                  onClose={closeSubMenu}
                >
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton
                        component='a'
                        to='/android-app-development.html'
                      >
                        <ListItemText primary={'Android app development'} />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton
                        component='a'
                        to='/ios-app-development.html'
                      >
                        <ListItemText primary={'IOS app development'} />
                      </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                      <ListItemButton
                        component='a'
                        to='/full-stack-development.html'
                      >
                        <ListItemText primary={'Full stack development'} />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton
                        component='a'
                        to='/custom-software-development.html'
                      >
                        <ListItemText primary={'Custom Software Development'} />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Menu>

                <Menu
                  anchorEl={subAnchorSaleEl}
                  open={subMenuSaleOpen}
                  className='subMenuOptions'
                  onClose={closeSubMenu}
                >
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton component='a' to='/sales-cloud.html'>
                        <ListItemText primary={'Sales Cloud'} />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton component='a' to='/service-cloud.html'>
                        <ListItemText primary={'Service Cloud'} />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton component='a' to='/marketing-cloud.html'>
                        <ListItemText primary={'Marketing Cloud'} />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton
                        component='a'
                        to='/salesforce-einstein-analytics.html'
                      >
                        <ListItemText
                          primary={'Salesforce Einstein Analytics'}
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton
                        component='a'
                        to='/salesforce-support.html'
                      >
                        <ListItemText primary={'Salesforce Support'} />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton
                        component='a'
                        to='/salesforce-lightning.html'
                      >
                        <ListItemText primary={'Salesforce Lightning'} />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton
                        component='a'
                        to='/customer-relationship-management.html'
                      >
                        <ListItemText primary={'CRM'} />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Menu>

                <ListItemButton component='a' to='/blog.html'>
                  <ListItemText primary={'Blog'} />
                </ListItemButton>
                <ListItemButton component='a' to='/careers.html'>
                  <ListItemText primary={'Careers'} />
                </ListItemButton>
                <ListItemButton component='a' to='/contact-us.html'>
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
