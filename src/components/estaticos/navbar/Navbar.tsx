import React from 'react';
import './Navbar.css';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { addToken } from '../../../store/tokens/Actions';
import {toast} from 'react-toastify';




export default function Navbar() {
    let history = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    function goLogout() {
        dispatch(addToken(''))
        toast.info('Usuário deslogado',{
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress:undefined
        });
        history('/login')
    }

    var navbarComponent;

    if(token !== ""){
        navbarComponent = <AppBar position="static" className='cor'>
        <Toolbar>

            <Box style={{ marginRight: "50%", color: "black" }}  className="name-meu-blog">
                <Typography variant="h5" >
                    MeuBlog

                </Typography>
            </Box>
            <Link to='/home' className='text-decorator-none' >
                <Box>
                    <Typography variant="h6" color="inherit" className='menu' style={{ cursor: "pointer", color: "black" }}>
                        home
                    </Typography>
                </Box>
            </Link>
            <Link to='/posts' className='text-decorator-none' >
                <Box>
                    <Typography variant="h6" color="inherit" className='menu' style={{ cursor: "pointer", color: "black" }}>
                        postagens
                    </Typography>
                </Box>
            </Link>
            
        <Link to='/tema' className='text-decorator-none'>
            <Box>
                <Typography variant="h6" color="inherit" className='menu' style={{ cursor: "pointer", color: "black" }}>
                    temas
                </Typography>
            </Box>
        </Link>

        <Link to='/formularioTema' className='text-decorator-none'>
            <Box>
                <Typography variant="h6" color="inherit" className='menu' style={{ cursor: "pointer", color: "black" }}>
                    cadastrar tema
                </Typography>

            </Box>
        </Link>
        
            <Box onClick={goLogout}>
                <Typography variant="h6" color="inherit" className='menu' style={{ cursor: "pointer", color: "black" }}>
                    logout
                </Typography>
            </Box>
    



    </Toolbar>
</AppBar>

    }

    return (
        <>
            {navbarComponent}
            
        </>
    );

}



