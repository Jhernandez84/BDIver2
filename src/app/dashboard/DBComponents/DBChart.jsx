"use client"

import React, { useEffect } from 'react';
import Chart from 'react-apexcharts';

export const DBChart = ({ChartType, ChartData, ChartId, ChartWidth, ChartTitle}) => {

    // Define las opciones del gráfico
    const options = {
      series: [{
        data: ChartData.map(item => parseInt(item.qty, 10)),
      }],
      chart: {
        type: ChartType || bar,
        // height: '95%',
        width: '90%',
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: false,
        }
      },
      dataLabels: {
        enabled: false,
        style: {
          colors: ["#ffffff"], // Color blanco para el texto
        },
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        categories: ChartData.map(item => item.date),
        labels: {
          style: {
            colors: '#ffffff', // Color blanco para el texto del eje
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: '#ffffff', // Color blanco para el texto del eje Y
          },
        },
      },
    };

    // Usa useEffect para renderizar el gráfico cuando el componente esté montado
    useEffect(() => {
      const chart = new ApexCharts(document.querySelector(`#${ChartId}`), options);
      chart.render();
  
      // Limpia el gráfico cuando el componente se desmonte
      return () => {
        chart.destroy();
      };
    }, []); // El array de dependencias vacío asegura que useEffect solo se ejecute una vez al montar el componente

    
  return (
   <>
   <div className="text-center justify-items-stretch text-base dark:bg-gray-700">
    <div className="text-center justify-text-center justify-self-center	text-base dark:text-white dark:bg-gray-800 m-2 h-[40px] rounded-t-lg">
      <h1>{ChartTitle}</h1>
    </div>
    <div className="text-center text-base dark:bg-gray-700 h-[10%]" id={ChartId}>
      {/* El gráfico se renderizará aquí */}
    </div>
   </div>
   </>
  );
};

export default DBChart;