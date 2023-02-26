import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea}  from '@mui/material';

export default function MultiActionAreaCard(props) {
  const { characterData } = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
        sx={{
          objectFit:'contain',
        }}
          component="img"
          height="140"
          image={characterData?.images[0] || 'https://images5.alphacoders.com/413/413842.jpg'}
          alt="Character Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {characterData?.name || '-'}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {characterData?.clan || '-'}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}