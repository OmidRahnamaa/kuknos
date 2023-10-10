import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const appBar = {
   backgroundColor: 'rgba(18,18,18,1)'
}

const toolBar = {
    display:'flex',
    justifyContent: 'space-between'
}

const typo ={
    marginLeft: '1em'
}

function Header() {

    return (
        <>
            <AppBar sx={appBar} position="static">
                <Toolbar sx={toolBar}>
                    <Typography variant="h6" component='div' sx={typo}>
                        Kuknos Code Challenge
                    </Typography>
                    
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header
