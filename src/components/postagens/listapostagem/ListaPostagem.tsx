import React, {useState, useEffect} from 'react';
import './ListaPostagem.css';
import { Box } from '@mui/material';
import { CarRentalOutlined } from '@mui/icons-material';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import Postagem from '../../../models/Postagem';
import useLocalStorage from 'react-use-localstorage';
import { busca } from '../../../services/Services';

function ListaPostagem() {
    
        let history = useNavigate();
        const [posts, setPosts] = useState<Postagem[]>([])
        const [token, setToken] = useLocalStorage('token');
    
        useEffect(() => {
            if (token == '') {
                alert('Por favor, faça o login.')
                history('/login')
            }
        }, [token])
    
        async function getPostagem() {
            await busca("/postagens", setPosts, {
                headers: {
                    'Authorization': token
                }
            })
        }
    
        useEffect(() => {
            getPostagem()
        }, [posts.length])
    return(
        <>
        {posts.map(post => (
        <Box m={2} >
            <Card variant="outlined" >
                <CardContent>
                    <Typography color='textSecondary' gutterBottom style={{fontStyle:'italic', color:'black'}} >
                        Postagens
                    </Typography>
                    <Typography variant="h5" component="h2" style={{color:'black', fontWeight:'bold'}}>
                        {post.titulo}
                   </Typography>
                   <Typography variant="h5" component="h2" style={{color:'black'}}>
                        {post.texto}
                   </Typography>
                   <Typography variant="h5" component="h2" style={{color:'black', fontWeight:'bold'}}>
                        {post.tema?.descricao}
                   </Typography>

                </CardContent>
                <CardActions>
                    <Box display="flex" justifyContent="center" mb={1.5}>
                        <Link to={`/formularioPostagem/${post.id}`} style={{textDecoration:'none'}} >
                            <Box mx={1}>
                                <Button variant="contained" className="marginLeft, b ,b-top" size='small' color="primary" >
                                    atualizar
                                </Button>
                            </Box>
                        </Link>

                        <Link to={`/deletarPostagem/${post.id}`} style={{textDecoration:'none'}}>
                            <Box mx={1}>
                                <Button variant="contained" className="marginLeft, b," size='small' color="secondary"   >
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
export default ListaPostagem;