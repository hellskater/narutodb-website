import * as React from 'react';
import get from 'lodash/get'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea}  from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function MultiActionAreaCard(props) {
  const { characterData } = props;

  const imageUrl = `${get(characterData,['images',0]).split('.png')[0]}.png`
  const status = get(characterData,['personal','status'],false)
  console.log('STATUS',characterData.personal)
  return (
    <Card sx={{ maxWidth: 450, minWidth: 330 }}>
      <CardActionArea>
        <CardMedia
        sx={{
          maxHeight: '8rem',
          minWidth: '16rem'
        }}
          component="img"
          height="140"
          image={imageUrl || 'https://images5.alphacoders.com/413/413842.jpg'}
          alt="Character Image"
        />
        <CardContent>
          <Typography  variant="h5" component="div">
             {characterData?.name || '-'}
      </Typography>
          {status === 'Deceased' ? <>
          <FiberManualRecordIcon color='error' fontSize='small' />
          <Typography gutterBottom variant="caption">
            Dead
          </Typography>
          </>
          :
          <>
          <FiberManualRecordIcon color='error' fontSize='small' />
          <Typography gutterBottom variant="caption">
            Alive
          </Typography>
          </>
         }
          <Typography gutterBottom variant="body2" component="div">
            Clan: {characterData?.personal?.clan || '-'}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}