import  { useRef, useEffect } from 'react';

const CanvasComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Ensure that canvas element is not null before accessing it
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      if (context) {
        context.fillStyle = 'red';
        context.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  }, []);
  return <canvas ref={canvasRef}></canvas>;
};

export default CanvasComponent;