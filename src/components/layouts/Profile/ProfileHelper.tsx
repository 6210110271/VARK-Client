import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography, Grid, LinearProgress, Card, CardContent } from '@material-ui/core';
import Divider from "@mui/material/Divider";

interface ProfileProps {
  name: string;
  dateOfBirth: string;
  score3: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
    heading: {
      marginBottom: theme.spacing(2),
    },
    progress: {
      height: theme.spacing(3),
      borderRadius: theme.shape.borderRadius,
    },
    card: {
      backgroundColor: "#f2f2f2",
      padding: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  }),
);

const ProfileHelper: React.FC<ProfileProps> = ({ name, dateOfBirth, score3 }) => {
  const classes = useStyles();

  const calculatePercentage = (score: number): number => {
    return (score / 100) * 100;
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h4" className={classes.heading}>
            โปรไฟล์
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5">ชื่อผู้ใช้ : {name}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">Date of Birth: {dateOfBirth}</Typography>
            </Grid>
            
            <Divider />

            <Grid item xs={12}>
              <Typography variant="body1">เกมวัดผล</Typography>
              <LinearProgress
                variant="determinate"
                value={calculatePercentage(score3)}
                className={classes.progress}
                style={{width: 450}}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileHelper;
