import React from 'react';
import './ListaTema.css';
import { Box } from '@mui/material';
import { CarRentalOutlined } from '@mui/icons-material';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';


function ListaTema(){
    return(
    <>
    <Box m={2}>
            <Card variant="outlined">
                <CardContent>
                    <Typography color='textSecondary' gutterBottom style={{fontStyle:'italic', color:'rgb(209,49,224)'}}>
                        Tema
                    </Typography>
                    <Typography variant="h5" component="h2" style={{color:'#e25ec5'}}>
                        Minha Descrição

                    </Typography>
                </CardContent>
                <CardActions>
                    <Box display="flex" justifyContent="center" mb={1.5}>
                        <Link to="" className="text-decorator.none" style={{textDecoration:'none'}}>
                            <Box mx={1}>
                                <Button variant="contained" className="marginLeft" size='small' color="primary" style={{backgroundColor:'#ffdd', color:'rgb(209,49,224)',fontWeight:'bold'}}>
                                    atualizar
                                </Button>
                            </Box>
                        </Link>

                        <Link to="" style={{textDecoration:'none'}}>
                            <Box mx={1}>
                                <Button variant="contained" className="marginLeft" size='small' color="secondary" style={{backgroundColor:'#ffdd', color:'rgb(209,49,224)', fontWeight:'bold'}}>
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

export default ListaTema;