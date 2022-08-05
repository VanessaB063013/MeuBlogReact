import React, {useState} from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import {Box} from '@mui/material'
import './Home.css';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';

function Home() {
    
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#ffffcc" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "rgb(209,49,224)", fontWeight: "bold" }}>Seja bem vinde!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "rgb(209,49,224)", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img className='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlY9Klfh-_qgvMUcM5jrepWJXsuGlxCGzxhg&usqp=CAU" alt=""  style={{width:"300px", height:"300px", marginLeft:"35%" , padding:"20px", borderRadius:"50%"}} />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "rgb(209,49,224)" }} className="postagens">
                    <TabPostagem/>

                </Grid>
            </Grid>
        </>
    );
}
export default Home;
