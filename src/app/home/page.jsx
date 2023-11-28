'use client'
import React from 'react';
import { useToggle } from '@/hooks/useToggle';
import Navbar from '../../components/Navbar';
import { Container } from '@mui/material';
import MainHOC from '../../components/MainHOC';


function Dashboard() {
    const [showAvailableBalance, toggleShowAvailableBalance] = useToggle(true)
    return (
        <main className='bg-neutral-300 py-4'>
            <Navbar />
            <MainHOC>
                <Container className=''>

                </Container>
            </MainHOC>
        </main>)
}

export default Dashboard;