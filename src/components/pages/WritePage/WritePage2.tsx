import { Stage, Layer, Line, Image } from 'react-konva';
import { useState, useRef, Key, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import useTheme from '@mui/material/styles/useTheme';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    height: '90vh',
  },
  buttonBox: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    padding: ({ spacing }: any) => spacing(2),

  },
}));

const images = [
  `${process.env.PUBLIC_URL}/images/draw/2.1.png`,
  `${process.env.PUBLIC_URL}/images/draw/2.2.png`,
  `${process.env.PUBLIC_URL}/images/draw/2.3.png`,
  `${process.env.PUBLIC_URL}/images/draw/2.4.png`,
];

const WritePage2 = () => {
  const theme = useTheme();
  const classes = useStyles({ spacing: theme.spacing });

  const [lines, setLines] = useState<any>([]);
  const isDrawing = useRef(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [image, setImage] = useState<HTMLImageElement>();

  const handleMouseDown = (e: any) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e: { target: { getStage: () => any; }; }) => {
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();

    let lastLine = lines[lines.length - 1];

    if (lastLine) {
      lastLine.points = lastLine.points.concat([point.x, point.y]);
      lines.splice(lines.length - 1, 1, lastLine);
      setLines(lines.concat());
    }
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const handleChangeImage = () => {
    setImageIndex((imageIndex + 1) % images.length);
    setLines([]);
  };

  const handleReset = () => {
    setLines([]);
  };

  useEffect(() => {
    const img = new window.Image();
    img.src = images[imageIndex];
    img.onload = () => {
      setImage(img);
    };
  }, [imageIndex]);

  return (
    <div className={classes.container}>
      <Stage
        width={1500}
        height={870}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
      >
        <Layer>
          <Image image={image} width={1500} height={900} />
          {lines.map((line: { points: number[] | Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array | undefined; tool: string; }, i: Key | null | undefined) => (
            <Line
              key={i}
              points={line.points}
              stroke="#df4b26"
              strokeWidth={6}
              tension={0.5}
              lineCap="round"
              globalCompositeOperation={
                line.tool === 'eraser' ? 'destination-out' : 'source-over'
              }
            />
          ))}
        </Layer>
      </Stage>
      <Box className={classes.buttonBox}>
        <Button variant="contained" onClick={handleChangeImage}>
          รูปถัดไป
        </Button>
        <Button variant="contained" onClick={handleReset}>
          ลบลายเส้นทั้งหมด
        </Button>
      </Box>
    </div>
  );
};

export default WritePage2;
