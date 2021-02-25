import React from 'react'

const Footer = () => {
    return (
        <div style={footerStyle}> 
            <h3>Github Finder</h3>
            <h5>&copy; 2021 Sriharsh Amur </h5>
        </div>
    )
}

const footerStyle = {
    textAlign: 'center',
    padding: '10px',
    backgroundColor: 'black',
    color: 'white',
    // position: 'absolute',
    bottom: '0',
    // top: '50vh',
    // width: '100vw'
}

export default Footer;