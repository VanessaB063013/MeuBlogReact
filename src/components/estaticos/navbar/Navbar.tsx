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
import {Link} from 'react-router-dom';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            color: "rgb(209,49,224)",





        },
        menuButton: {
            marginRight: theme.spacing(2),


        },
        title: {
            flexGrow: 1,


        },
    }),
);

export default function Navbar() {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>

            <AppBar position="static" className='cor'>
                <Toolbar>

                    <Box style={{ marginRight: "60%" }}>
                        <Typography variant="h5" className={classes.title} >
                            MeuBlog

                        </Typography>
                    </Box>
                    <Link to='/home' className='text-decorator-none'>
                        <Box>
                            <Typography variant="h6" color="inherit" className='menu' style={{ cursor: "pointer" , color:"white"}}>
                                home
                            </Typography>
                        </Box>
                    </Link>

                    <Box>
                        <Typography variant="h6" color="inherit" className='menu' style={{ cursor: "pointer" }}>
                            temas
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" color="inherit" className='menu' style={{ cursor: "pointer" }}>
                            cadastrar tema
                        </Typography>
                    </Box>
                    <Link to='/login' className='text-decorator-none'>
                        <Box>
                            <Typography variant="h6" color="inherit" className='menu' style={{ cursor: "pointer", color: "white" }}>
                                logout
                            </Typography>
                        </Box>
                    </Link>



                </Toolbar>
            </AppBar>
        </div >
    );
}



