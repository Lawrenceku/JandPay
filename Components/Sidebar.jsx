// Navbar.js
'use client'
import { HomeOutlined } from '@mui/icons-material';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { List, ListItem, ListItemText, Stack } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const linksArr = [
    {
        label: 'Home',
        to: '/home',
        icon: <HomeOutlined />
    },
    {
        label: 'Transactions',
        to: '/transactions',
        icon: <CurrencyExchangeOutlinedIcon />
    },
    {
        label: 'Beneficiaries',
        to: '/beneficiaries',
        icon: <VolunteerActivismOutlinedIcon />
    },
    {
        label: 'Profile',
        to: '/profile',
        icon: <PersonOutlinedIcon />
    }
]

const Sidebar = () => {
    const route = usePathname()
    return (
        <aside className="p-2 w-52 flex justify-center bg-white sticky rounded-md">
            <List className='flex items-center flex-col'>
                {linksArr.map(item => {
                    return (<ListItem>
                        <Link href={item.to} key={item.to} className={`${route == item.to ? "text-primary-blue": ""}`}><Stack direction="row" alignItems="center" justifyContent="center" gap={1}>{item.icon}<ListItemText className='text-inherit text-sm font-medium'>{item.label}</ListItemText></Stack></Link>
                    </ListItem>)
                })}
            </List>
        </aside>
    );
};

export default Sidebar;
