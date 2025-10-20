// script.js
// This script controls the behavior of the Target IQ sports dashboard. It listens for the Generate
// button click, collects user inputs, and renders a bar chart using Recharts. For this example,
// we use a static dataset rather than relying on any CORS proxies or external APIs.

document.addEventListener('DOMContentLoaded', function () {
  const generateBtn = document.getElementById('generateBtn');
  const chartContainer = document.getElementById('chart-container');

  generateBtn.addEventListener('click', () => {
    // Collect input values (currently unused in the demo)
    const brand = document.getElementById('brandInput').value;
    const geography = document.getElementById('geoInput').value;
    const industry = document.getElementById('industryInput').value;
    const timeframe = document.getElementById('timeframeInput').value;

    // Dummy dataset for the top 10 sports brands by global reach
    const data = [
      { name: 'Nike', value: 50 },
      { name: 'Adidas', value: 45 },
      { name: 'Puma', value: 30 },
      { name: 'Under Armour', value: 25 },
      { name: 'Decathlon', value: 20 },
      { name: 'ASICS', value: 18 },
      { name: 'New Balance', value: 15 },
      { name: 'Lululemon', value: 12 },
      { name: 'Anta Sports', value: 10 },
      { name: 'Garmin', value: 8 }
    ];

    // Destructure Recharts components from the global Recharts object
    const { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } = Recharts;

    // Render the bar chart inside the chart container
    ReactDOM.render(
      React.createElement(
        ResponsiveContainer,
        { width: '100%', height: 400 },
        React.createElement(
          BarChart,
          {
            data: data,
            margin: { top: 20, right: 30, left: 20, bottom: 5 }
          },
          React.createElement(XAxis, { dataKey: 'name' }),
          React.createElement(YAxis, null),
          React.createElement(CartesianGrid, { strokeDasharray: '3 3' }),
          React.createElement(Tooltip, null),
          React.createElement(Legend, null),
          React.createElement(Bar, { dataKey: 'value', barSize: 40 })
        )
      ),
      chartContainer
    );
  });
});
