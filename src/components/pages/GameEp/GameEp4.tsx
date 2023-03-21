import { useState, useEffect } from 'react';
import Cards from '../../layouts/Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Button } from '@mui/material';
import { Add_score } from '../../../types/score.type';
import { RootReducers } from '../../../reducers';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as scoreAction from "../../../actions/score.action"


interface Item {
  id: number;
  img: string;
  stat: string;
  clicked: boolean;
}

function GameEp4() {
  const [items, setItems] = useState<Item[]>([
    { id: 1, img: `${process.env.PUBLIC_URL}/images/a1.1.1.png`, stat: '', clicked: false },
    { id: 1, img: `${process.env.PUBLIC_URL}/images/a1.1.png`, stat: '', clicked: false },
    { id: 2, img: `${process.env.PUBLIC_URL}/images/a2.1.1.PNG`, stat: '', clicked: false },
    { id: 2, img: `${process.env.PUBLIC_URL}/images/a2.1.PNG`, stat: '', clicked: false },
    { id: 3, img: `${process.env.PUBLIC_URL}/images/a3.1.1.PNG`, stat: '', clicked: false },
    { id: 3, img: `${process.env.PUBLIC_URL}/images/a3.1.PNG`, stat: '', clicked: false },
    { id: 4, img: `${process.env.PUBLIC_URL}/images/a4.1.1.PNG`, stat: '', clicked: false },
    { id: 4, img: `${process.env.PUBLIC_URL}/images/a4.1.PNG`, stat: '', clicked: false },
    { id: 5, img: `${process.env.PUBLIC_URL}/images/a5.1.1.PNG`, stat: '', clicked: false },
    { id: 5, img: `${process.env.PUBLIC_URL}/images/a5.1.PNG`, stat: '', clicked: false },
  ].sort(() => Math.random() - 0.5));

  const dispatch = useDispatch<any>();
  const scoreReducer = useSelector((state: RootReducers) => state.scoreReducer);
  const navigate = useNavigate();


  const [prev, setPrev] = useState(-1);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120);
  const [gameOver, setGameOver] = useState(false);

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

      if (!items[current].clicked) {
        setTimeout(() => {
          items[current].stat = '';
          items[prev].stat = '';
          setItems([...items]);
          setPrev(-1);
        }, 1000);
      } else {
        setPrev(-1);
      }
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

    item.clicked = true;
    setTimeout(() => {
      item.clicked = false;
      setItems([...items]);
    }, 1000);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);

    if (timeLeft === 0 || score === items.length / 2) {
      clearInterval(timer);
      setGameOver(true); // set gameOver to true
    }

    return () => clearInterval(timer);
  }, [timeLeft, score, items.length]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handleReset = () => {
    setScore(0);
    setTimeLeft(120);
    setItems(items.map((item) => ({
      ...item,
      stat: '',
      clicked: false,
    })).sort(() => Math.random() - 0.5));
  };

  const handleSave = () => {
    let userId = localStorage.getItem("userId");
    if (userId) {
      const newScore: Add_score = {
        score: score,
        userId: userId,
        gameEp: "ep4"
      };

      dispatch(scoreAction.addScore(newScore,navigate));
    }
  };

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
              <Cards item={item} id={index} handleClick={handleClick} />
            </Grid>
          ))}
        </Grid>
      </Grid>

      {gameOver && (
        <>
          <Grid item xs={12} md={8}>
            <Grid container justifyContent="center" alignItems="center" spacing={2}>
              <Grid item>
                <Button variant="contained" color="primary" onClick={handleReset}>
                  เริ่มเกม
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="secondary" onClick={handleSave}>
                  บันทึกคะแนน
                </Button>
              </Grid>
            </Grid>

          </Grid>
        </>
      )}
    </Grid>

  );
}

export default GameEp4;
