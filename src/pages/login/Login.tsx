import React, { useState, ChangeEvent, useEffect } from 'react';
import './Login.css';
import { Box } from '@mui/material';
import { Button, Grid, TextField } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import UserLogin from '../../models/UserLogin';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Services';
import { addToken } from '../../store/tokens/Actions';
import { useDispatch } from 'react-redux';
import {toast} from 'react-toastify';

function Login() {
    let history = useNavigate();
    const dispatch = useDispatch();

    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            foto: '',
            nome: '',
            usuario: '',
            senha: '',
            token: ''
        }
    )

    useEffect(()=>{
        if(token !== ""){
            dispatch (addToken(token))
            history('/home')
        }
    },[token])

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin(
            {
                ...userLogin,
                [e.target.name]: e.target.value
            }
        )

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
             await login(`/usuarios/logar`, userLogin, setToken)
             toast.success('Usuário logado com sucesso.',{
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress:undefined
            }); } catch (error) {
                toast.error('Dados do usuário inconsistentes. Erro ao logar.',{
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress:undefined
                });
        }

    }
    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid xs={6} alignItems='center'>
                    <Box paddingX={20}>
                        <form onSubmit={onSubmit}>
                            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{ fontWeight: 'bold', color: "#1b1500 ", padding: '5%' }} >
                                Entrar
                            </Typography>
                            <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                            <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                            <Box marginTop={2} textAlign='center'>

                                <Button type='submit' variant='contained' className="button">
                                    Logar
                                </Button>

                            </Box>

                        </form>
                        <Box display='flex' justifyContent='center' marginTop={2}>
                            <Box>
                                <Typography variant='subtitle1' gutterBottom align='center' style={{ marginRight: '10px', color: '#1b1500 ' }}> Não tem uma conta?</Typography>
                            </Box>
                            <Link to='/cadastrousuario' className='text-decorator-none'>
                                <Typography variant='subtitle1' gutterBottom align='center' style={{ fontWeight: 'bold', color: '#1b1500 ' }}>  Cadastre-se</Typography>
                            </Link>

                        </Box>
                    </Box>
                </Grid>

                <Grid xs={6} className='background-image1'>

                </Grid>

            </Grid>

        </>

    );
}

export default Login;