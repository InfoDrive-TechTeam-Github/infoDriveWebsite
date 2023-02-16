import * as React from 'react';
import { useEffect } from 'react';
import Head from 'next/head';
import Navbar from './navbar';
import utilStyles from '../styles/utils.module.css';
import Box from '@mui/material/Box';
//import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Avatar from '@mui/material/Avatar';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Link from '@mui/material/Link';
function disableRightClick(event) {
  event.preventDefault();
}
export default function Header() {
  // useEffect(() => {
  //   window.addEventListener('contextmenu', disableRightClick);
  //   return () => {
  //     window.removeEventListener('contextmenu', disableRightClick);
  //   };
  // }, []);
  return (
    <div>
      <Navbar />
    </div>
  );
}
