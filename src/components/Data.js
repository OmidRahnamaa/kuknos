import React, { useState } from 'react'
import { Container, Grid, Paper, Box, TextField } from '@mui/material';
import Users from './Columns/Users';
import Posts from './Columns/Posts'
import Source from './Columns/Source';


const container = {
    display: 'flex',
    justifyContent: 'center',
    padding: '2em',
    maxWidth: '100%'
}

const grid = {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
}



function Data() {

    const [sourceItems, setsourceItems] = useState([]);

    const addUsersToSource = (item) => {
        setsourceItems([...sourceItems, item]);
    }

    const addBodyToSource = (item) => {
        setsourceItems([...sourceItems, item]);
    }

    const onDeleteButtonClick = (index) => {
        const updatedStack = [...sourceItems];
        updatedStack.splice(index, 1);
        setsourceItems(updatedStack);
    }
    const onHandleClearAll = ()=> {
        setsourceItems([])
    }

    return (
        <>
            <Container sx={container}>
                <Grid sx={grid} container spacing={1} >
                    <Users addUsersToSource={addUsersToSource} />
                    <Posts addBodyToSource={addBodyToSource} />
                    <Source sourceItems={sourceItems} onHandleClearAll={onHandleClearAll}  onDeleteButtonClick={onDeleteButtonClick}/>
                </Grid>
            </Container>
        </>
    )
}

export default Data
