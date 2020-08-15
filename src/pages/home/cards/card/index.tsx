import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@material-ui/core';

const SingleCard = ({ icon, text }: { icon: string, text: string }) => {
  console.log('icon -> ', icon)
  console.log('text -> ', text)
  return (
    <div>
      <Card>
        <CardMedia
          component="img"
          alt={text}
          height="260"
          width= "370"
          image= {icon}
          title={text}
        />
        <CardContent >
          <Typography gutterBottom variant="subtitle1" component="h6">
            {text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default SingleCard;
