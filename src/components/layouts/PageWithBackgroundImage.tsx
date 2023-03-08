import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface Props {
  backgroundImageUrl: string;
}

const PageWithBackgroundImage: React.FC<Props> = ({ backgroundImageUrl }) => {
  return (
    <Card style={{ maxWidth: "none", height: "100vh" }}>
      <CardMedia
        component="img"
        sx={{ height: "100%", width: "100%", objectFit: "cover" }}
        image={backgroundImageUrl}
        alt="background image"
      />
      <CardContent>
    
      </CardContent>
    </Card>
  );
}

export default PageWithBackgroundImage;
