import React from 'react';
import { Grid, Paper, Box, Typography, Stack, IconButton } from '@mui/material';
import Delete from "@mui/icons-material/Delete"

const grid2 = {
    width: '33.3%',
    gap: '2'
}

const paper = {
    margin: '1em',
    backgroundColor: 'rgba(18,18,18,1)',
    minHeight: '27em',
    maxHeight: '27em',
    maxWidth: '100%'
}

const logo = {
    float: 'right',
    justifyContent: 'center',
    alignItems: 'center'
}

const typo = {
    padding: '1.5em',
    color: 'rgba(255,255,255,0.7)',
    display: 'flex',
    placeItems: 'center',
    justifyContent: 'space-between',
}

const box = {
    padding: '1em',
    display: 'flex',
    maxWidth: '100%',
    flexFlow: 'wrap',
}

const buttonBase = {
    position: 'relative',
    appearance: 'none',
    maxWidth: '100%',
    fontSize: '0.8125rem',
    display: 'inline-flex',
    alignItems: 'center',
    height: '32px',
    justifyContent: 'center',
    color: 'rgb(255, 255, 255)',
    backgroundColor: 'rgb(54, 132, 109)',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    border: '0px none',
    verticalAlign: 'middle',
    boxSizing: 'border-box',
    padding: '0px',
    borderRadius: '3em',
    cursor: 'pointer',
    flexFlow: 'row wrap',
    transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    width: '100 %',
    marginRight: '0.5em',
    marginBottom: '0.5em',
    '&:hover': {
        backgroundColor: 'rgb(27, 96, 76)'
    },
}



function Source({ sourceItems, onDeleteButtonClick, onHandleClearAll}) {
    const handleDeleteClick = (index) => {
        onDeleteButtonClick(index);
    }
    const handleClearAll =()=>{
        onHandleClearAll();
    }
    return (
        <>
            <Grid sx={grid2} item xs={12} sm={6} md={4}>
                <Paper sx={paper}>
                    <Box component="div">
                        <Typography sx={typo} component="h6" variant="h6">
                            Tap to delete
                            <IconButton size='medium' color='inherit' sx={logo} aria-label='logo' onClick={handleClearAll}>
                                <Delete />
                            </IconButton>
                        </Typography>

                        <Box sx={box}>
                            {sourceItems.map((item, index) => (
                                <Stack
                                    key={index}
                                    sx={buttonBase}
                                    variant="contained"
                                    color="success"
                                    onClick={() => { handleDeleteClick(index) }}
                                    role='button'
                                >
                                    <span style={{
                                        overflow: 'hidden',
                                        paddingLeft: '12px',
                                        paddingRight: '12px',
                                        whiteSpace: 'nowrap',
                                        textOverflow: 'ellipsis',
                                    }}>{item.name}  {item.title}</span>
                                </Stack>
                            ))}
                        </Box>
                    </Box>
                </Paper>
            </Grid>
        </>
    )
}

export default Source;
