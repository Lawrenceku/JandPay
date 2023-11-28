// Navbar.js
'use client'
import React from 'react';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Box, IconButton, Stack, Paper, Divider, InputBase, FormControl } from '@mui/material';

import JandPayLogo from './JandPay Logo 2.svg';
import { LogoutOutlined, SearchOutlined } from '@mui/icons-material';

const Navbar = () => {
  return (
    <nav className=" flex py-2 has-site-padding bg-neutral-300 items-center sticky">
      <Box className='logo'><JandPayLogo /></Box>
      <Stack direction={"row"} alignItems={"center"} gap={2} className='ml-auto'>
        <IconButton className='bg-white rounded-md'>
          <NotificationsNoneOutlinedIcon aria-label="notifications" />
        </IconButton>
        <Box>
          <Paper className='shadow-none w-96' component="form" sx={{display: 'flex', alignItems: 'center'}}>
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchOutlined />
            </IconButton>
            <InputBase
              sx={{ flex: 1 }}
              placeholder="Search JandPay"
              className='text-sm text-neutral-600'
              inputProps={{ 'aria-label': 'search google maps' }}
            />
          </Paper>
        </Box>
        <IconButton className='bg-white rounded-md'>
          <LogoutOutlined aria-label="logout" />
        </IconButton>
      </Stack>
    </nav>
  );
};

export default Navbar;