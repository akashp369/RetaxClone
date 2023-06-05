import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Successful',
      // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      data : [2000, 2500, 7000, 4400, 5000, 6000],
      backgroundColor: 'rgb(114,46,208)',
      barThickness: 10,
      borderRadius: 10
    },
    {
      label: 'Failed',
      // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      data : [500, 800, 2000, 3000, 1000, 500],
      backgroundColor: 'rgb(254,119,115)',
      barThickness: 10,
      borderRadius: 10
    },
  ],
};

function Graph() {
  return (
    <div style={{width:"600px"}}>
      <Bar options={options} data={data}/>;
    </div>
  );
}

export default Graph;