import React from 'react';
import './Login.css';
import {Box} from '@mui/material';
import { Button, Grid, TextField } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import {Link} from 'react-router-dom';

function Login(){
    return (
        <>
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid xs={6} alignItems='center'>
                <Box paddingX={20}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{fontWeight:'bold', color:"rgb(209,49,224) ", padding:'5%'}} >
                          Entrar
                        </Typography>
                        <TextField id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                            <Button type='submit' variant='contained' style={{color:"rgb(209,49,224)"}} className='botao'>
                                Logar
                            </Button>
                            </Link>
                        </Box>

                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box>
                            <Typography variant='subtitle1' gutterBottom align='center' style={{ marginRight:'10px' , color:'rgb(209,49,224)'}}> Não tem uma conta?</Typography>
                        </Box>
                        <Typography variant='subtitle1' gutterBottom align='center'style={{fontWeight:'bold', color:'rgb(209,49,224)'}}>  Cadastre-se</Typography>
                    </Box>
                </Box>
            </Grid>
            
            <Grid xs={6} style={{
                backgroundImage: `url(https://miro.medium.com/max/1400/1*TMYPt-WhRNKUTdXXQ0N2SQ.jpeg)`, 
                backgroundRepeat: 'no-repeat', 
                width:'100vh', minHeight:'100 vh' , 
                backgroundSize:'cover', 
                backgroundPosition:'center'}}>

            </Grid>
            
        </Grid>
        
        </>
   
    );
}

export default Login;