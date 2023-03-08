import React from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Typography, Grid, CardMedia, CardContent, CardActions, Card } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const LessonPage = () => {

  const navigate = useNavigate();


  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={4} md={6}>

          <Card sx={{ maxWidth: 600 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="../images/game/bg1.png"
              title="green iguana"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                เกมจับภาพคู่กับตัวอักษร
              </Typography>
              <Typography variant="body2" color="text.secondary">
                เป็นโหมดเกมจับคู่ภาพกับตัวอักษร โดยมีเวลานับถอยหลัง
              </Typography>
            </CardContent>
            <CardActions>
            <Button size="small" onClick={() => navigate("/ep-1")} > <Typography variant="h6">Ep 1</Typography></Button>
              <Button size="small" onClick={() => navigate("/ep-2")} > <Typography variant="h6">Ep 2</Typography></Button>
              <Button size="small" onClick={() => navigate("/**")} > <Typography variant="h6">Ep 3</Typography></Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={6} md={6}>
          <Card sx={{ maxWidth: 600 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="../images/game/bg2.png"
              title="green iguana"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                เกมจับคู่ตัวอักษร
              </Typography>
              <Typography variant="body2" color="text.secondary">
                เป็นโหมดเกมจับคู่ตัวอักษรที่มีความเหมือนกัน โดยมีเวลานับถอยหลัง
              </Typography>
            </CardContent>
            <CardActions>

              <Button size="small" onClick={() => navigate("/**")} > <Typography variant="h6">Ep 1</Typography></Button>
              <Button size="small" onClick={() => navigate("/**")} > <Typography variant="h6">Ep 2</Typography></Button>
              <Button size="small" onClick={() => navigate("/**")} > <Typography variant="h6">Ep 3</Typography></Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default LessonPage;
