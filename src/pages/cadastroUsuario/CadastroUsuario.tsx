import React, { useState, useEffect, ChangeEvent } from 'react';
import './CadastroUsuario.css';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import User from "../../models/User"
import { cadastroUsuario } from '../../services/Services';


function CadastroUsuario() {
    let history = useNavigate();

    const [confirmarSenha, setConfirmarSenha] = useState<String>("");
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: ""
        }
    )

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: ""
        }

    )

    useEffect(() => {
        if (userResult.id !== 0) {
            history("/login")
            console.log(userResult)
        }
    }, [userResult])

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha == user.senha) {
            console.log(user)
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            alert('Usuário cadastrado com sucesso')
        } else {
            alert("Dados inconsistentes. Por favor, verificar as informações de cadastro.")

        }
    }
    return (

        <>
            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid item xs={6} className='background-image2'></Grid>
                <Grid item xs={6} alignItems='center'>
                    <Box paddingX={10}>

                        <form onSubmit={onSubmit}>
                            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{ fontWeight: 'bold', color: "rgb(209,49,224) ", padding: '5%' }} >
                                Cadastrar
                            </Typography>
                            <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth required />
                            <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='foto' label='foto' variant='outlined' name='foto' margin='normal' fullWidth required />
                            <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuário' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth required/>
                            <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth required />
                            <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='confirmar senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth required/>
                            <Box marginTop={2} textAlign='center'>
                                <Link to='/login' className='text-decorator-none'>
                                    <Button variant='contained' style={{ color: "rgb(209,49,224)", marginRight: "20px",backgroundColor:'#ffdd',  textDecoration:'none'}}>
                                        Cancelar
                                    </Button>
                                </Link>
                                <Button type='submit' variant='contained' style={{ color: "rgb(209,49,224)", fontWeight: "bold",backgroundColor:'#ffdd', textDecoration:'none'}}>
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