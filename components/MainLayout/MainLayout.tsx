'use client'
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const MainLayout = ({ children }: any) => {
    return (
        <div>
            <Navbar />
              {children}
            <Footer />
        </div>
    )
}

export default MainLayout