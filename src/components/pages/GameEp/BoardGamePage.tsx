import { useState, useEffect } from 'react';
import Card from '../../layouts/Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

function GameEp1() {
  const [items, setItems] = useState([
    { id: 1, img: `${process.env.PUBLIC_URL}/images/a.JPG`, stat: '' },
    { id: 1, img: `${process.env.PUBLIC_URL}/images/a.JPG`, stat: '' },
    { id: 2, img: `${process.env.PUBLIC_URL}/images/b.JPG`, stat: '' },
    { id: 2, img: `${process.env.PUBLIC_URL}/images/b.JPG`, stat: '' },             
    { id: 3, img: `${process.env.PUBLIC_URL}/images/c.JPG`, stat: '' },
    { id: 3, img: `${process.env.PUBLIC_URL}/images/c.JPG`, stat: '' },
    { id: 4, img: `${process.env.PUBLIC_URL}/images/d.JPG`, stat: '' },
    { id: 4, img: `${process.env.PUBLIC_URL}/images/d.JPG`, stat: '' },
    { id: 5, img: `${process.env.PUBLIC_URL}/images/e.JPG`, stat: '' },   
    { id: 5, img: `${process.env.PUBLIC_URL}/images/e.JPG`, stat: '' },
    { id: 6, img: `${process.env.PUBLIC_URL}/images/f.JPG`, stat: '' },
    { id: 6, img: `${process.env.PUBLIC_URL}/images/f.JPG`, stat: '' },
    { id: 7, img: `${process.env.PUBLIC_URL}/images/g.JPG`, stat: '' },
    { id: 7, img: `${process.env.PUBLIC_URL}/images/g.JPG`, stat: '' },
    { id: 8, img: `${process.env.PUBLIC_URL}/images/h.JPG`, stat: '' },
    { id: 8, img: `${process.env.PUBLIC_URL}/images/h.JPG`, stat: '' },
  ].sort(() => Math.random() - 0.5));

  const [prev, setPrev] = useState(-1);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120);

  function check(current: any) {
    if (items[current].id === items[prev].id) {
      items[current].stat = 'correct';
      items[prev].stat = 'correct';
      setScore(score + 1);
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].stat = 'wrong';
      items[prev].stat = 'wrong';
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = '';
        items[prev].stat = '';
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id: any) {
    const item = items[id];
    if (item.stat !== '' || prev === id) {
      return;
    }
  
    if (prev === -1) {
      item.stat = 'active';
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(timer);
      alert(`Time's up! Your score is ${score}.`);
    }

    return () => clearInterval(timer);
  }, [timeLeft, score]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2} style={{ height: '50vh' }}>
      <Grid item xs={12} md={8}>
        <Paper style={{ padding: '20px', height: '100%' }}>
          <Typography variant="h6" gutterBottom>คะแนน: {score}</Typography>
          <Typography variant="h6" gutterBottom>เวลา: {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          {items.map((item, index) => (
            <Grid key={index} item xs={6} sm={4} md={3} lg={2}>
              <Card item={item} id={index} handleClick={handleClick} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default GameEp1;
