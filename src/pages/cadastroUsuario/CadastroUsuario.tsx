import React from 'react';
import './CadastroUsuario.css';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';


function CadastroUsuario() {
    return (

        <>
            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid item xs={6} className='background-image2'></Grid>
                <Grid item xs={6} alignItems='center'>
                    <Box paddingX={10}>

                        <form>
                            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{ fontWeight: 'bold', color: "rgb(209,49,224) ", padding: '5%' }} >
                                Cadastrar
                            </Typography>
                            <TextField id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                            <TextField id='usuário' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                            <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                            <TextField id='confirmarSenha' label='confirmar senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                            <Box marginTop={2} textAlign='center'>
                                <Link to='/login' className='text-decorator-none'>
                                    <Button variant='contained' style={{ color: "rgb(209,49,224)", marginRight: "20px" }} className='botao'>
                                        Cancelar
                                    </Button>
                                </Link>
                                <Button type='submit' variant='contained' style={{ color: "rgb(209,49,224)", fontWeight: "bold" }} className='botao'>
                                    Cadastrar
                                </Button>

                            </Box>

                        </form>

                    </Box>
                </Grid>
            </Grid>
        </>

    );
}
export default CadastroUsuario;