// pages/index.jsx
'use client';

import { useState, useRef, useEffect } from 'react';
import GIF from 'gif.js'; // Install via npm install gif.js

export default function AnimationMaker() {
  const [shapeType, setShapeType] = useState('rect');
  const [frames, setFrames] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [fps, setFps] = useState(24);
  const [currentFrameShapes, setCurrentFrameShapes] = useState([]);
  const drawCanvasRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const timelineCanvases = useRef({});
  const animationRef = useRef(null);

  const drawShapes = (ctx, shapes, width = 400, height = 300, bgColor = 'white', scale = 1) => {
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);
    shapes.forEach(shape => {
      ctx.beginPath();
      ctx.strokeStyle = 'blue';
      ctx.lineWidth = 2 * scale;
      if (shape.type === 'rect') {
        ctx.rect(shape.x * scale, shape.y * scale, shape.width * scale, shape.height * scale);
      } else {
        ctx.arc(shape.x * scale, shape.y * scale, shape.radius * scale, 0, Math.PI * 2);
      }
      ctx.stroke();
    });
  };

  const startDrawing = (e) => {
    if (!drawCanvasRef.current || isPlaying) return;
    setIsDrawing(true);
    const rect = drawCanvasRef.current.getBoundingClientRect();
    setStartPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const draw = (e) => {
    if (!isDrawing || !drawCanvasRef.current || isPlaying) return;
    const ctx = drawCanvasRef.current.getContext('2d');
    const rect = drawCanvasRef.current.getBoundingClientRect();
    const currentX = e.clientX - rect.left;
    const currentY = e.clientY - rect.top;

    const newShape = {
      type: shapeType,
      x: startPos.x,
      y: startPos.y,
      width: currentX - startPos.x,
      height: currentY - startPos.y,
      radius: Math.sqrt(Math.pow(currentX - startPos.x, 2) + Math.pow(currentY - startPos.y, 2))
    };
    drawShapes(ctx, [...currentFrameShapes, newShape]);
  };

  const stopDrawing = (e) => {
    if (!isDrawing || !drawCanvasRef.current) return;
    setIsDrawing(false);
    const rect = drawCanvasRef.current.getBoundingClientRect();
    const currentX = e.clientX - rect.left;
    const currentY = e.clientY - rect.top;

    const newShape = {
      type: shapeType,
      x: startPos.x,
      y: startPos.y,
      width: currentX - startPos.x,
      height: currentY - startPos.y,
      radius: Math.sqrt(Math.pow(currentX - startPos.x, 2) + Math.pow(currentY - startPos.y, 2))
    };
    setCurrentFrameShapes(prev => [...prev, newShape]);
  };

  const addNewFrame = () => {
    if (currentFrameShapes.length > 0) {
      setFrames(prev => [...prev, { id: Date.now().toString(), shapes: [...currentFrameShapes] }]);
    }
  };

  const clearDrawing = () => {
    setCurrentFrameShapes([]);
    if (drawCanvasRef.current) drawCanvasRef.current.getContext('2d').clearRect(0, 0, 400, 300);
  };

  const stepBack = () => {
    if (currentFrameShapes.length > 0) {
      setCurrentFrameShapes(prev => prev.slice(0, -1));
      const ctx = drawCanvasRef.current.getContext('2d');
      drawShapes(ctx, currentFrameShapes.slice(0, -1));
    }
  };

  const clearAll = () => {
    setFrames([]);
    setCurrentFrameShapes([]);
    if (drawCanvasRef.current) drawCanvasRef.current.getContext('2d').clearRect(0, 0, 400, 300);
    if (previewCanvasRef.current) previewCanvasRef.current.getContext('2d').clearRect(0, 0, 400, 300);
  };

  const exportAsGif = () => {
    if (frames.length === 0) return alert('No frames to export!');
    const gif = new GIF({
      workers: 2,
      quality: 10,
      width: 400,
      height: 300,
      workerScript: '/gif.worker.js'
    });

    frames.forEach(frame => {
      const canvas = document.createElement('canvas');
      canvas.width = 400;
      canvas.height = 300;
      const ctx = canvas.getContext('2d');
      drawShapes(ctx, frame.shapes, 400, 300, 'white');
      gif.addFrame(ctx, { delay: 1000 / fps });
    });

    gif.on('finished', blob => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'animation.gif';
      link.click();
      URL.revokeObjectURL(url);
    });

    gif.render();
  };

  const togglePlay = () => setIsPlaying(prev => !prev);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key.toLowerCase()) {
        case 'r': setShapeType('rect'); break;
        case 'c': setShapeType('circle'); break;
        case 'p': togglePlay(); break;
        case 'n': addNewFrame(); break;
        case 'd': clearDrawing(); break;
        case 's': stepBack(); break;
        case 'a': clearAll(); break;
        case 'g': exportAsGif(); break;
        default: break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying, frames, currentFrameShapes, fps]); // Dependencies to ensure latest state

  useEffect(() => {
    if (!isPlaying || frames.length === 0 || !previewCanvasRef.current) return;
    const ctx = previewCanvasRef.current.getContext('2d');
    let frameIndex = 0;

    const animate = () => {
      if (!isPlaying) {
        ctx.clearRect(0, 0, 400, 300);
        return;
      }
      drawShapes(ctx, frames[frameIndex].shapes);
      frameIndex = (frameIndex + 1) % frames.length;
      animationRef.current = setTimeout(() => requestAnimationFrame(animate), 1000 / fps);
    };

    animate();
    return () => clearTimeout(animationRef.current);
  }, [isPlaying, frames, fps]);

  useEffect(() => {
    frames.forEach(frame => {
      const canvas = timelineCanvases.current[frame.id];
      if (canvas) {
        const scale = Math.min(100 / 400, 75 / 300);
        drawShapes(canvas.getContext('2d'), frame.shapes, 100, 75, 'white', scale);
      }
    });
    if (drawCanvasRef.current && !isPlaying) {
      drawShapes(drawCanvasRef.current.getContext('2d'), currentFrameShapes);
    }
  }, [frames, currentFrameShapes]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 font-sans">
      <div className="max-w-5xl mx-auto bg-gray-800 rounded-xl shadow-2xl p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-300">GIF Animation Maker</h1>
<p className="text-lg text-gray-600">
  Developed by{" "}
  <a
    href="https://www.facebook.com/maximusakm"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 hover:underline"
  >
    Maximus Aung
  </a>
</p>

        <div className="flex flex-wrap gap-4 mb-6">
          <button onClick={() => setShapeType('rect')} className={`px-4 py-2 rounded-lg ${shapeType === 'rect' ? 'bg-blue-600' : 'bg-gray-700'} hover:bg-blue-500 transition`}>Rectangle (R)</button>
          <button onClick={() => setShapeType('circle')} className={`px-4 py-2 rounded-lg ${shapeType === 'circle' ? 'bg-blue-600' : 'bg-gray-700'} hover:bg-blue-500 transition`}>Circle (C)</button>
          <button onClick={togglePlay} className={`px-4 py-2 rounded-lg ${isPlaying ? 'bg-red-600' : 'bg-green-600'} hover:${isPlaying ? 'bg-red-500' : 'bg-green-500'} transition`}>{isPlaying ? 'Stop (P)' : 'Play (P)'}</button>
          <button onClick={addNewFrame} className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 transition">New Frame (N)</button>
          <button onClick={clearDrawing} className="px-4 py-2 rounded-lg bg-yellow-600 hover:bg-yellow-500 transition">Clear Drawing (D)</button>
          <button onClick={stepBack} className="px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-500 transition">Step Back (S)</button>
          <button onClick={clearAll} className="px-4 py-2 rounded-lg bg-gray-600 hover:bg-gray-500 transition">Clear All (A)</button>
          <button onClick={exportAsGif} className="px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 transition">Export GIF (G)</button>
          <div className="flex items-center gap-2">
            <label className="text-sm">FPS: {fps}</label>
            <input type="range" min="1" max="60" value={fps} onChange={(e) => setFps(parseInt(e.target.value))} className="w-32 accent-blue-500" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2 text-gray-200">Draw Here</h2>
            <canvas ref={drawCanvasRef} width={400} height={300} onMouseDown={startDrawing} onMouseMove={draw} onMouseUp={stopDrawing} onMouseOut={stopDrawing} className="border border-gray-600 rounded bg-white" />
          </div>
          <div className="bg-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2 text-gray-200">Preview</h2>
            <canvas ref={previewCanvasRef} width={400} height={300} className="border border-gray-600 rounded bg-white" />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-200">Timeline ({frames.length} Frames)</h2>
          <div className="flex flex-wrap gap-4">
            {frames.map((frame, index) => (
              <div key={frame.id} className="p-2 bg-gray-700 rounded-lg shadow">
                <canvas ref={el => (timelineCanvases.current[frame.id] = el)} width={100} height={75} className="border border-gray-600 rounded bg-white" />
                <div className="mt-2 flex justify-between text-sm">
                  <span className="text-gray-300">Frame {index + 1}</span>
                  <button onClick={() => setFrames(frames.filter(f => f.id !== frame.id))} className="px-2 py-1 bg-red-600 hover:bg-red-500 rounded transition">✕</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}