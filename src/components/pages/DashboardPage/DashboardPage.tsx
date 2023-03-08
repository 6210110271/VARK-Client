import React from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

interface ImageProps {
  src: string;
  alt?: string;
  width?: string;
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: 20,
  },
  card: {
    background: 'linear-gradient(to bottom right, #64B5F6, #E3F2FD)',
    borderRadius: 10,
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.2s ease-in-out',
    '&:hover, &:focus': {
      transform: 'scale(1.05)',
      boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.25), 0px 6px 12px rgba(0, 0, 0, 0.33)',
      textDecoration: 'none',
    },
  },
  cardContent: {
    textAlign: 'center',
    padding: 20,
  },
  button: {
    color: '#fff',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textTransform: 'none',
    textDecoration: 'none',
  },
});

const Image = ({ src, alt, width }: ImageProps) => (
  <img src={src} alt={alt} style={{ width: width }} />
);

const DashboardPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Link to="/lesson" className={classes.button}>
            <Button
              variant="contained"
              className={classes.card}
              sx={{ width: '100%', height: '100%', borderRadius: '10px' }}
            >
              <div className={classes.cardContent}>
                {/* <Image src="https://picsum.photos/id/237/200/300" alt="random image" width="200px" /> */}
                <Typography variant="h4" gutterBottom>
                  การเรียนการสอน
                </Typography>
              </div>
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <Link to="/games" className={classes.button}>
            <Button
              variant="contained"
              className={classes.card}
              sx={{ width: '100%', height: '100%', borderRadius: '10px' }}
            >
              <div className={classes.cardContent}>
              {/* <Image src="https://picsum.photos/id/237/200/300" alt="random image" width="200px" /> */}

                <Typography variant="h4" gutterBottom>
                  เกมวัดผล
                </Typography>
              </div>
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default DashboardPage;
