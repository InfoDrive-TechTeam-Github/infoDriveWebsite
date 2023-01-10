import * as React from 'react';
import Head from 'next/head'
import Navbar from './navbar'
import utilStyles from '../styles/utils.module.css'
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

export default function Header() {
  return (
    <div >
      <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>InfoDrive Solutions is a Software Development and Digital Transformation Solutions company</title>
            <meta name="description" content="InfoDrive Solutions is a Software Development and Digital Transformation Solutions company, we are headquartered in Singapore with regional offices in Malaysia (KL) & India (Bangalore). We deliver cutting-edge Digital Transformation Solutions to many of our prestigious customers in South East Asia." />
            <meta property="og:title" content="InfoDrive Solutions is a Software Development and Digital Transformation Solutions company" />
            <meta property="og:image" content="https://c5cea5.n3cdn1.secureserver.net/wp-content/uploads/2020/09/INFORDRIVE-LOGO-FINAL-01-1-1-1-1.png" />
            <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar/>
    </div>
  )
}