import React, { useEffect, useRef } from 'react';

const CanvasWithBackgroundImage = (): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    
    if (ctx) {
      // Draw background image
      const bgImage = new Image();
      bgImage.onload = () => {
        ctx.drawImage(bgImage, 0, 0, canvas?.width as number, canvas?.height as number);
      };
      bgImage.src = "url(".concat(`${process.env.PUBLIC_URL}/images/`).concat(")");
      
      // Draw other content on top of the background image
      ctx.fillStyle = 'red';
      ctx.fillRect(100, 100, 100, 100);
    }
  }, []);
  
  return (
    <canvas ref={canvasRef} width={800} height={600} />
  );
};

export default CanvasWithBackgroundImage;
