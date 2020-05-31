import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const SingleCard = ({ icon, text }:{ icon:string, text:string }) => {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            {icon}
          </Typography>
          <Typography variant="body2" component="p">
            {text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default SingleCard;
