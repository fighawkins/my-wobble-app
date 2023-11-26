import { useRef, useEffect, useState } from 'react';

const CanvasComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const startDrawing = (event: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
  
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    if (!context) return;
  
    context.strokeStyle = 'black';
    context.lineWidth = 2;
    
    const { offsetX, offsetY } = event;
    context.beginPath();
    context.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };
  
  const draw = (event: MouseEvent) => {
    if (!isDrawing) return;
  
    const canvas = canvasRef.current;
    if (!canvas) return;
  
    const context = canvas.getContext('2d');
    if (!context) return;
  
    const { offsetX, offsetY } = event;
    context.lineTo(offsetX, offsetY);
    context.stroke();
  };
  
  const stopDrawing = () => {
    if (!isDrawing) return;
  
    const canvas = canvasRef.current;
    if (!canvas) return;
  
    const context = canvas.getContext('2d');
    if (!context) return;
  
    context.closePath();
    setIsDrawing(false);
  };
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
  
    const context = canvas.getContext('2d');
  if (!context) return;

  context.fillStyle = 'red';
  context.fillRect(10, 10, 100, 100);
    // No need to cast to React's MouseEvent since we are using native events
    const handleMouseDown = (event: MouseEvent) => {
      startDrawing(event);
    };
    const handleMouseMove = (event: MouseEvent) => {
      draw(event);
    };
    const handleMouseUp = () => {
      stopDrawing();
    };
    const handleMouseOut = () => {
      stopDrawing();
    };
  
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseout', handleMouseOut);
  
    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);
  return <canvas ref={canvasRef} width={500} height={500} style={{ border: '1px solid black' }}></canvas>;
}

export default CanvasComponent;