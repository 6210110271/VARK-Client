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
              image="https://t3.ftcdn.net/jpg/03/10/63/18/360_F_310631834_78nhBTepfRQVCKfbNwtvxd9nOFDGJzfG.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                เรียนรู้การอ่าน
              </Typography>
              <Typography variant="body2" color="text.secondary">
                โหมดเรียนรู้การอ่านจะประกอบไปด้วย เนื้อหา บทที่ 1 และ 2 จากหนักสือแนวทางการพัฒนาการเรียนรู้สำหรับนักเรียนที่มีความบกพร่องทางการเรียนรู้เล่มที่ 1
              </Typography>
            </CardContent>
            <CardActions>
            
            <Link to="https://project-vark.netlify.app/?fbclid=IwAR0wbeE51wz72VTDMyKCN9tmgvdlxkzr7pATqqwzD6irmMbKTiOjg9GGarc#/" >
            <Button size="small"> <Typography variant="h6">บทที่ 1</Typography></Button>
            </Link>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={6} md={6}>
          <Card sx={{ maxWidth: 600 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://media.istockphoto.com/id/91816438/photo/cartoon-writer-or-businessmen-writing.jpg?s=1024x1024&w=is&k=20&c=f3EowlQtAWo8I-NG8R-XdlnBmeziLTDWoYVzg2uaHz0="
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                เรียนรู้การเขียน
              </Typography>
              <Typography variant="body2" color="text.secondary">
                โหมดเรียนรู้การเขียนจะประกอบไปด้วย เนื้อหา บทที่ 1 และ 2 จากหนักสือแนวทางการพัฒนาการเรียนรู้สำหรับนักเรียนที่มีความบกพร่องทางการเรียนรู้เล่มที่ 1
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => navigate("/write-ep1")} > <Typography variant="h6">บทที่ 1</Typography></Button>
              <Button size="small" onClick={() => navigate("/write-ep2")} > <Typography variant="h6">บทที่ 2</Typography></Button>
              <Button size="small" onClick={() => navigate("/write-ep3")} > <Typography variant="h6">บทที่ 3</Typography></Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default LessonPage;
