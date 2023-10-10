import React, { useState, useEffect } from 'react';
import { Grid, Paper, Box, TextField, List, ListItem, ListItemText, FormControl, ListItemButton, ListItemAvatar, Avatar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from 'axios';

const grid2 = {
    width: '33.3%',
    gap: '2'
}

const paper = {
    margin: '1em',
    backgroundColor: 'rgba(18,18,18,1)',
    minHeight: '27em',
    maxHeight: '27em'
}

const formControl = {
    width: '-webkit-fill-available',
    padding: '1.5em',
    '& .MuiInputLabel-root': {
        color: 'white'
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'rgb(117,117,117)'
        },
        '&:hover fieldset': {
            borderColor: 'rgb(255,255,255)'
        }
    },
}

const list = {
    justifyContent: 'start',
    alignItems: 'center',
    display: 'grid',
    maxWidth: '100%',
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
    left: 0
}

const inputLabelProps = {
    style: { color: 'rgba(255, 255, 255, 0.7)' }
};

const outlinedInputProps = {
    style: { color: 'white', borderColor: 'white' }
};

function Posts({ addBodyToSource }) {
    const [filterText, setFilterText] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const filteredData = data.filter(item => {
        const title = item.title.toLowerCase();
        return title.includes(filterText.toLowerCase());
    });

    const handleFilterChange = (e) => {
        setFilterText(e.target.value);
    };

    const handlePostsClick = (item) => {
        addBodyToSource(item);
    };

    return (
        <>
            <Grid sx={grid2} item  xs={12} sm={6} md={4}>
                <Paper sx={paper}>
                    <Box component="form" >
                        <FormControl variant='outlined' sx={formControl}>
                            <TextField
                                id='outlined-basic'
                                fullwidth="true"
                                margin="dense"
                                color='success'
                                variant='outlined'
                                label='Search...'
                                InputLabelProps={inputLabelProps}
                                InputProps={outlinedInputProps}
                                value={filterText}
                                onChange={handleFilterChange}
                            />
                        </FormControl>
                    </Box>
                    <List sx={list}>
                        {filteredData.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemButton onClick={() => handlePostsClick(item)}>
                                    <ListItemAvatar>
                                        <Avatar sx={{ backgroundColor: 'rgb(117,117,117)' }}>
                                            <AccountCircleIcon sx={{ color: '#121212' }} />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item.title}
                                        secondary={item.body}
                                        primaryTypographyProps={{ style: { color: 'rgb(255,255,255)' } }}
                                        secondaryTypographyProps={{ style: { color: 'rgba(255,255,255,0.7)' } }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </Grid>
        </>
    )
}

export default Posts;
