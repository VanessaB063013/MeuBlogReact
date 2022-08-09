import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography,Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';


function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if(token !== ""){
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
            <Box style={{ backgroundColor: "#FBCA1F ", height: "120px" }}>
                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h5" align="center" gutterBottom style={{ color: "black" }}>Siga-nos nas redes sociais </Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <a href="https://github.com/VanessaB063013/" target="_blank">
                        <GitHubIcon style={{ fontSize: 60, color: "black" }} />
                    </a>
                    <a href="https://www.facebook.com/vanessa.basiliojardim" target="_blank">
                        <FacebookIcon style={{ fontSize: 60, color: "black" }} />
                    </a>
                    <a href="https://www.linkedin.com/in/vanessa-basilio-/" target="_blank">
                        <LinkedInIcon style={{ fontSize: 60, color: "black" }} />
                    </a>
                </Box>
            </Box>
            <Box style={{ backgroundColor: "#e3b104", height: "60px" }}>
                <Box paddingTop={1}>
                    <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "black" }} >© 2022 Copyright:</Typography>
                </Box>
                <Box>
                
                        <Typography variant="subtitle2" gutterBottom style={{ color: "black" }} align="center">Vanessa Basilio</Typography>
                    
                </Box>
            </Box>
        </Grid>
    </Grid>

    }
    return (
        <>
        
       {footerComponent}

        </>
    )
}
export default Footer;