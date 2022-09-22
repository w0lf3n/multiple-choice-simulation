import React, { useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Correct answers',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Participants',
      },
    },
  },
};

/**
 * @param {Array<{ id: number, answers: Array, total: number }>} data
 * @returns {{ labels: Array<number>, datasets: Array<number> }}
 */
const splitIntoLabelsAndData = (dataset) => {
  const labels = [];
  const data = [];
  dataset.map((test) => test.total / test.answers.length).sort().forEach((result) => {
    const labelValue = (result * 100).toFixed(0);
    if (!labels.includes(labelValue)) {
      labels.push(labelValue);
      data.push(0);
    }
    data[data.length - 1] = data[data.length - 1] + 1;
  });
  return { labels, data };
};

const RED_BORDER = 'rgba(255,99,132,1)';
const RED_BACKGR = 'rgba(255, 99, 132, 0.2)';
const GREEN_BORDER = 'rgba(75, 192, 192, 1)';
const GREEN_BACKGR = 'rgba(75, 192, 192, 0.2)';

function LineChart({ dataset }) {
  const { labels, data } = useMemo(() => splitIntoLabelsAndData(dataset), [dataset]);
  const LIMIT = 50;
  if (labels.length > 0 && data.length > 0) {
    const datasets = [{
      label: 'Participants',
      data,
      backgroundColor: (context) => ((labels[context.index] >= LIMIT) ? GREEN_BACKGR : RED_BACKGR),
      borderColor: (context) => ((labels[context.index] >= LIMIT) ? GREEN_BORDER : RED_BORDER),
      borderWidth: 1,
    }];
    return (
      <div className="Chart" style={{ width: `${labels.length * 50}px` }}>
        <Bar options={options} data={{ labels: labels.map((value) => `${value}%`), datasets }} />
      </div>
    );
  }
}

LineChart.propTypes = {
  dataset: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    total: PropTypes.number,
    answers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      answers: PropTypes.arrayOf(PropTypes.number),
      correct: PropTypes.number,
    })),
  })).isRequired,
};

export default LineChart;
