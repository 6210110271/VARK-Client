import { Card, CardContent, CardMedia, Button, Box, Typography, IconButton, useTheme, Grid, styled, Paper } from '@mui/material';
import React, { useState, useRef, RefObject, useEffect } from 'react';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { useNavigate } from 'react-router-dom';


export default function ReadPage2() {
  const [imageIndex, setImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(1);
  const navigate = useNavigate();

  const images = [
    {
      image: `${process.env.PUBLIC_URL}/images/b1.1.png`,
      image2: `${process.env.PUBLIC_URL}/images/b1.2.png`,
      sound: `${process.env.PUBLIC_URL}/sound/b1.3.mp3`,
    },
    {
      image: `${process.env.PUBLIC_URL}/images/b2.1.png`,
      image2: `${process.env.PUBLIC_URL}/images/b2.2.png`,
      sound: `${process.env.PUBLIC_URL}/sound/b2.3.mp3`,
    },
    {
      image: `${process.env.PUBLIC_URL}/images/b3.1.png`,
      image2: `${process.env.PUBLIC_URL}/images/b3.2.png`,
      sound: `${process.env.PUBLIC_URL}/sound/b3.3.mp3`,
    },
    {
      image: `${process.env.PUBLIC_URL}/images/b4.1.png`,
      image2: `${process.env.PUBLIC_URL}/images/b4.2.png`,
      sound: `${process.env.PUBLIC_URL}/sound/b4.3.mp3`,
    },
  ];

  const audioRef: RefObject<HTMLAudioElement> = useRef(null);

  const handleNextImage = () => {
    const nextIndex = (imageIndex + 1) % images.length;
    setImageIndex(nextIndex);
    setScore(score + 1);
    if (audioRef.current) {
      const soundPath = images[nextIndex].sound;
      audioRef.current.src = soundPath;
      audioRef.current.play();
      setIsPlaying(true);
    }
    if (nextIndex === 0) {
      alert(score);
      navigate('/lesson');
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('ended', () => {
        setIsPlaying(false);
      });
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  return (
    <Card style={{ maxWidth: "none", height: "90vh" }}>
      <CardMedia
        component="img"
        sx={{ height: "100%", width: "100%" }}
        image={`${process.env.PUBLIC_URL}/images/bg.png`}
        alt="background image"
      />

      <CardContent sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>

          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <Typography variant="h5" sx={{ flexGrow: 1, textAlign: 'center' }}>
              Score: {score}
            </Typography>
            <IconButton aria-label="play/pause">
              <Button variant="contained" startIcon={<VolumeUpIcon sx={{ height: 38, width: 38 }} />} onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? 'Stop' : 'Play'}
              </Button>
            </IconButton>

          </Box>
        </Box>
        <Box sx={{ width: '20%', margin: '35px' }}>
          <Grid sx={{ marginRight: '35px' }} container spacing={12} >
            <Grid item xs={6}>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={images[imageIndex].image}
                alt="Live from space album cover"
              />
            </Grid>
            <Grid item xs={6}>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={images[imageIndex].image2}
                alt="Live from space album cover"
              />
            </Grid>
          </Grid>
        </Box>

        <Button onClick={handleNextImage} sx={{ position: "absolute", bottom: 20, right: 80, bgcolor: "red", fontSize: 16, width: 100, height: 50 }}>Next</Button>

        <audio ref={audioRef} src={images[imageIndex].sound} />
      </CardContent>
    </Card>
  );
}

