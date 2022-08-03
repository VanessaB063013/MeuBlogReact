import React from 'react';
import './ListaPostagem.css';
import { Box } from '@mui/material';
import { CarRentalOutlined } from '@mui/icons-material';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

function ListaPostagem() {
    return(
        <>
        <Box m={2}>
            <Card variant="outlined">
                <CardContent>
                    <Typography color='textSecondary' gutterBottom style={{fontStyle:'italic', color:'rgb(209,49,224)'}} >
                        Postagens
                    </Typography>
                    <Typography variant="h5" component="h2" style={{color:'#e25ec5'}}>
                        Título
                   </Typography>
                   <Typography variant="h5" component="h2" style={{color:'#e25ec5'}}>
                        Texto da postagem
                   </Typography>
                   <Typography variant="h5" component="h2" style={{color:'#e25ec5'}}>
                        Tema
                   </Typography>

                </CardContent>
                <CardActions>
                    <Box display="flex" justifyContent="center" mb={1.5}>
                        <Link to="" style={{textDecoration:'none'}}>
                            <Box mx={1}>
                                <Button variant="contained" className="marginLeft" size='small' color="primary" style={{backgroundColor:'#ffdd', color:'rgb(209,49,224)', textDecoration:'none', fontWeight:'bold'}} >
                                    atualizar
                                </Button>
                            </Box>
                        </Link>

                        <Link to="" style={{textDecoration:'none'}}>
                            <Box mx={1}>
                                <Button variant="contained" className="marginLeft" size='small' color="secondary" style={{backgroundColor:'#ffdd', color:'rgb(209,49,224)', fontWeight:'bold'}}  >
                                    deletar
                                </Button>
                            </Box>
                        </Link>
                    </Box>

                </CardActions>

            </Card>




        </Box>
        
    </>

        
    );
}
export default ListaPostagem;