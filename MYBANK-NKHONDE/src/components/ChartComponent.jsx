import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';  // Make sure to import Chart.js

const ChartComponent = () => {
  const canvasRef = useRef(null);  // Create a ref to hold the canvas element

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');  // Get the canvas context

    // Initialize the chart
    const chartInstance = new Chart(ctx, {
      type: 'bar',  // Example chart type
      data: {
        labels: ['January', 'February', 'March', 'April'],  // X-axis labels
        datasets: [
          {
            label: 'My First Dataset',
            data: [65, 59, 80, 81],  // Data for each label
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
      },
    });

    // Cleanup function to destroy the chart when the component unmounts or before a new chart is created
    return () => {
      if (chartInstance) {
        chartInstance.destroy();  // Destroy the chart instance
      }
    };
  }, []);  // Empty dependency array ensures this only runs once after the component mounts

  return (
    <div className="chart-container" style={{ position: 'relative', height: '300px' }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }}></canvas>
    </div>
  );  // Wrap the canvas inside a container
};

export default ChartComponent;
