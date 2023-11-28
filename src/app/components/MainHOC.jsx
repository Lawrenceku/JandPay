// mainHOC.jsx
'use client'
import React from 'react';
import Sidebar from './Sidebar';

const MainHOC = ({ children }) => {
    return <div className='main-grid has-site-padding py-4'>
        <Sidebar />
        {children}
    </div>
}

export default MainHOC;