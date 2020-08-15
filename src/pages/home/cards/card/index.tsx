import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@material-ui/core';

const SingleCard = ({ icon, text }: { icon: string, text: string }) => {
  return (
    <div>
      <Card>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="260"
          width= "370"
          image="https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          title="Contemplative Reptile"
        />
        <CardContent >
          <Typography gutterBottom variant="subtitle1" component="h6">
            סטימצקי
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default SingleCard;
