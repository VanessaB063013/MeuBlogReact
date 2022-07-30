import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography,Grid } from '@material-ui/core';
import {Box} from '@mui/material';

function footer() {
    return (
        <>
        
        <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#fff", height: "120px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "rgb(209,49,224)" }}>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/VanessaB063013/" target="_blank">
                                <GitHubIcon style={{ fontSize: 60, color: "rgb(209,49,224)" }} />
                            </a>
                            <a href="https://www.facebook.com/vanessa.basiliojardim" target="_blank">
                                <FacebookIcon style={{ fontSize: 60, color: "rgb(209,49,224)" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/vanessa-basilio-/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "rgb(209,49,224)" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#fff", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "rgb(209,49,224)" }} >© 2022 Copyright:</Typography>
                        </Box>
                        <Box>
                        
                                <Typography variant="subtitle2" gutterBottom style={{ color: "rgb(209,49,224)" }} align="center">Vanessa Basilio</Typography>
                            
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </>
    )
}
export default footer;