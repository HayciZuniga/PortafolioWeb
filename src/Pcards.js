import * as React from 'react';
import Pcarousel from './Pcarousel';
import Scarousel from './Scarousel';
import Jcarousel from './Jcarousel';
import JTcarousel from './JTcarousel';
import CHcarousel from './CHcarousel';
import Procarousel from './Procarousel';
import Bcarousel from './Bcarousel';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { deepPurple } from '@mui/material/colors';

import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
  
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    alignContent:'center',
    backgroundColor:"#20013d"
      }),);
  


export default function MultiActionAreaCard() {
    return (

      <div className='Card'>
        <Box sx={{
          position: "relative",
          display:"flex",
          justifyContent:"center",
          alignItems:"left",
          fontSize:"100px",
          marginTop:"30px"
        }}>
        <Typography variant="h3" sx={{color:"#ffffff"}}> 
          Proyectos Web
        </Typography>
        </Box>
       
        <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 10, gap: 2, }}
      >   

<Box sx={{ flexGrow: 1 }} >
<Grid container spacing={2} columns={16}>
       <Grid item xs={8}>
          <Item>
          <Card sx={{ maxWidth: 500}}>
           <CHcarousel/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          JuriChat - 2024
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Prototipo desarrollado en Flutterflow con el proyecto JuriChat, 
          es una plataforma web cuya interfaz principal constará de un
           chat interactivo implementado a través del LLM. 
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" sx={{ color: deepPurple[500] }} 
        href='https://app.flutterflow.io/share/ley-express-o5njx3'>
          Ver Flutterflow
        </Button>
        <Button size="small" sx={{ color: deepPurple[500] }} 
        href='https://github.com/EduardoAlvarez12/juri-chat'>
          Ver Repositorio
        </Button>
      </CardActions>
    </Card>
          </Item>
        </Grid>

      <Grid item xs={8}>
          <Item>
          <Card sx={{ maxWidth: 560 }}>
        <JTcarousel/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
              Jóvenes en STEM - 2023 
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Sitio web Jóvenes en STEM , desarrollado en colaboración para lograr la 
            implementación del sitio, con el framework django, React , Material UI.

            El proyecto permite que los praticipantes conocer sobre el desarrollado
            del proyecto, actividades e historia.
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small"  sx={{ color: deepPurple[500] }}
          href="https://github.com/EduardoAlvarez12/jovenes_stem_project">
          Ver Repositorio
        </Button>
        <Button size="small"  sx={{ color: deepPurple[500] }}
         href="https://www.jovenesenstem-ugb.com/">
          Ver sitio
        </Button>
      </CardActions>
    </Card>
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>
          <Card sx={{ maxWidth: 540 }}>
      <CardActionArea>
        <Jcarousel/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Jóvenes en STEM - 2023 
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Prototipo realizado en figma para sitio web de Jóvenes en STEM, proyecto de Proyección social,
            para brindar información sobre las actividades e historia del proyecto.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" sx={{ color: deepPurple[500] }} 
        href='https://www.figma.com/design/CSB5sD6gwQnojtLzZobAFU/TecnoGirls-en-STEM--Sitio-Web?m=auto&t=ZpqNqefd3idoRrQZ-6'>
          Ver Figma
        </Button>
      </CardActions>
    </Card>
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>
          <Card sx={{ maxWidth: 600 }}>
        <Procarousel/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
              Proyects Pro - 2023
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          El proyecto consiste en realizar una plataforma de programadores y empresas de diferentes rubros,
           con el fin de establecer como intermediario la plataforma para poder determinar los proyectos 
           que una empresa afiliada a la plataforma.
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small"  sx={{ color: deepPurple[500] }}
          href="https://www.figma.com/proto/Rl3jZQGsOpo0KXEH4rmjm5/PROYECT-PRO?t=5c2um2AKOUC0Rvlr-1">
          Ver Figma
        </Button>
      </CardActions>
      </Card>
          </Item>
        </Grid>


        <Grid item xs={8}>
          <Item>
          <Card sx={{ maxWidth: 500}}>
           <Pcarousel/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Platinum Sponsor/PMV  - 2023
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Desarrollo de la plataforma “Platinum Sponsor” innovadora para la publicación de
           material audiovisual, que les permite los usuarios subir y compartir historias, novelas, etc.
          </Typography>
        </CardContent>
    </Card>
          </Item>
        </Grid>


        <Grid item xs={8}>
          <Item>
          <Card sx={{ maxWidth: 500 }}>
         <Scarousel/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Studen’s Grade Calculator - 2022
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Desarrollo de un sitio web para docentes que facilite el registro de cálculo automático de notas, 
          con capacidad de personalización y modificación de cálculos. 
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small"  sx={{ color: deepPurple[500] }} 
        href='https://github.com/elenalazzo/Proyecto_SGC'>
          Ver repositorio
        </Button>
      </CardActions>
    </Card>
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>
          <Card sx={{ maxWidth: 500 }}>
        <Bcarousel/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
              Bazar Ana - 2022
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Creación de prototipo para un bazar de venta de ropa, el cual tenia
            como fin un inventario para el manejo de los productos.
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small"  sx={{ color: deepPurple[500] }}
          href="https://www.figma.com/proto/Rl3jZQGsOpo0KXEH4rmjm5/PROYECT-PRO?t=5c2um2AKOUC0Rvlr-1">
          Ver Figma
        </Button>
      </CardActions>
    </Card>
          </Item>
        </Grid>
      </Grid>   
    </Box>

      </Container>

      </div>
    );
}