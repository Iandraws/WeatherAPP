import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)',marginBottom:'50px' }}
  >
    •
  </Box>
);

export default function CardContainer(props) {
    const data=props.data
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 30 }} gutterBottom>
          {data.name}
        </Typography>
        <Typography variant="h5" component="div">
         Temp:{data.main.temp}
        </Typography>
        <Typography sx={{ mb: 1.5 }}>
          {data.weather[0].main}
        </Typography>
      </CardContent>
    </Card>
  );
}
