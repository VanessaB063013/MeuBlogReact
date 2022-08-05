import React, {useState} from 'react';
import './TabPostagem.css';
import { TabContext, TabPanel } from '@material-ui/lab';
import {AppBar, Tab, Tabs, Typography} from '@material-ui/core'
import ListaPostagem from '../listapostagem/ListaPostagem'
import { Box } from '@mui/material';

function TabPostagem(){
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
    return(
        <>
        <TabContext value={value}>
            <AppBar position="static">
                <Tabs centered indicatorColor="secondary" onChange={handleChange} style={{color:'black', borderColor:'none', backgroundColor:"#fff"}} >
                    <Tab label="Todas as postagens" value="1" style={{fontWeight:'bold'}}  />
                    <Tab label="Sobre nós" value="2" style={{fontWeight:'bold'}}/>

                </Tabs>
            </AppBar>
            <TabPanel value="1" >
                <Box display="flex" flexWrap="wrap" justifyContent="center" >
                    <ListaPostagem/>

                </Box>

            </TabPanel>
            <TabPanel value="2" style={{backgroundColor:"#fff9e7"}}>
                <Typography variant="h5" gutterBottom color ="textPrimary" component="h5" align="center" className='titulo' style={{color:'black', borderColor:'none', backgroundColor:"#fde283", fontWeight:'bold'}}>
                    Sobre nós
                </Typography>

                <Typography variant="body1" gutterBottom color ="textPrimary" component="h5" align="justify" style={{color:'black', borderColor:'none', backgroundColor:"#fde283"}}>

                    Existem muitas variações disponíveis de passagens de Lorem Ipsum, mas a maioria sofreu algum tipo de alteração, seja por inserção de passagens com humor, ou palavras aleatórias que não parecem nem um pouco convincentes. Se você pretende usar uma passagem de Lorem Ipsum, precisa ter certeza de que não há algo embaraçoso escrito escondido no meio do texto. Todos os geradores de Lorem Ipsum na internet tendem a repetir pedaços predefinidos conforme necessário, fazendo deste o primeiro gerador de Lorem Ipsum autêntico da internet. Ele usa um dicionário com mais de 200 palavras em Latim combinado com um punhado de modelos de estrutura de frases para gerar um Lorem Ipsum com aparência razoável, livre de repetições, inserções de humor, palavras não características, etc.
                </Typography>

            </TabPanel>

        </TabContext>
       
        </>
    );
}

export default TabPostagem;