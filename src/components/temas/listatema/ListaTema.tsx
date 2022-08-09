import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import Tema from '../../../models/Tema'
import { busca } from '../../../services/Services';
import './ListaTema.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';


function ListaTema() {
    let history = useNavigate();
    const [temas, setTemas] = useState<Tema[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == '') {
            alert('Por favor, faça o login.')
            history('/login')
        }
    }, [token])

    async function getTema() {
        await busca("/tema", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getTema()
    }, [temas.length])
    
    return (
        <>
            {temas.map(tema => (
                <Box m={2} style={{backgroundColor:"#ffffcc"}}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography color='textSecondary' gutterBottom style={{ fontStyle: 'italic', color: 'black' }}>
                                Tema
                            </Typography>
                            <Typography variant="h5" component="h2" style={{ color: 'black' }}>
                                {tema.descricao}

                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Box display="flex" justifyContent="center" mb={1.5}>
                                <Link to={`/formularioTema/${tema.id}`} className="text-decorator.none" style={{ textDecoration: 'none' }}>
                                    <Box mx={1}>
                                        <Button variant="contained" className="button" size='small' color="primary" style={{ backgroundColor: '#ffdd', color: 'rgb(209,49,224)', fontWeight: 'bold' }}>
                                            atualizar
                                        </Button>
                                    </Box>
                                </Link>

                                <Link to={`/deletarTema/${tema.id}`} style={{ textDecoration: 'none' }}>
                                    <Box mx={1}>
                                        <Button variant="contained" className="button" size='small' color="secondary" style={{ backgroundColor: '#ffdd', color: 'rgb(209,49,224)', fontWeight: 'bold' }}>
                                            deletar
                                        </Button>
                                    </Box>
                                </Link>
                            </Box>

                        </CardActions>

                    </Card>




                </Box>
            ))
            }
        </>
    );
}

export default ListaTema;