import React from 'react'
import Header from './../components/Header';
import './globals.css'

const Layout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <Header />
                {children}
            </body>
        </html>
    )
}

export default Layout
