

import { LineChart } from 'linechart-test'; 

const MultipleLine = () => {
const lineSets = [
    {
    label: "2023",
    data: [
        { x: 1, y: 4 },
        { x: 2, y: 18 },
        { x: 3, y: 20 },
        { x: 4, y: 36 },
        { x: 5, y: 35 },
        { x: 6, y: 33 },
        { x: 7, y: 40 },
        { x: 8, y: 55 },
        { x: 9, y: 42 },
        { x: 10, y: 40 },
        { x: 11, y: 47 },
        { x: 12, y: 55 },
      ],
       strokeColor: "#c0c9f3",
    },
    {
    label: "2024",
    data: [
        { x: 1, y: 10 },
        { x: 2, y: 25 },
        { x: 3, y: 39 },
        { x: 4, y: 20 },
        { x: 5, y: 50 },
        { x: 6, y: 15 },
        { x: 7, y: 33 },
        { x: 8, y: 45 },
        { x: 9, y: 50 },
        { x: 10, y: 60 },
        { x: 11, y: 72 },
        { x: 12, y: 87 },
      ],
       strokeColor: "#6982f1",
       backgroundColorLine: "rgba(105, 130, 241, 0.2)",
    }
];

const xAxisLabels = ["Ene", "Feb", "Mar", "Abr", "May", 
"Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

return (
    <div className='border p-10  rounded-md relative '>
    <p className='absolute text-xs left-6 top-2'>Multiple line chart</p>
    <LineChart
        width={450}
        lineSets={lineSets} 
        xAxisLabels={xAxisLabels}
        lineToShowPointInfo={0} 
        horizontalGuides={{ 
        count: 5, 
        stroke: 1,
        color: "#ccccccfa",
        dashed: true, 
        }}
    />
    </div>
);
};

export default MultipleLine;

export const MultipleLineCode = `
import { LineChart } from 'linechart-test'; 

const MultipleLine = () => {
const lineSets = [
    {
    label: "2023",
    data: [
        { x: 1, y: 4 },
        { x: 2, y: 18 },
        { x: 3, y: 20 },
        { x: 4, y: 36 },
        { x: 5, y: 35 },
        { x: 6, y: 33 },
        { x: 7, y: 40 },
        { x: 8, y: 55 },
        { x: 9, y: 42 },
        { x: 10, y: 40 },
        { x: 11, y: 47 },
        { x: 12, y: 55 },
      ],
       strokeColor: "#c0c9f3",
    },
    {
    label: "2024",
    data: [
        { x: 1, y: 10 },
        { x: 2, y: 25 },
        { x: 3, y: 39 },
        { x: 4, y: 20 },
        { x: 5, y: 50 },
        { x: 6, y: 15 },
        { x: 7, y: 33 },
        { x: 8, y: 45 },
        { x: 9, y: 50 },
        { x: 10, y: 60 },
        { x: 11, y: 72 },
        { x: 12, y: 87 },
      ],
       strokeColor: "#6982f1",
       backgroundColorLine: "rgba(105, 130, 241, 0.2)",
    }
];

const xAxisLabels = ["Ene", "Feb", "Mar", "Abr", "May", 
"Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

return (
    <div className='border p-10 w-1/2 rounded-md relative '>
    <p className='absolute text-xs left-6 top-2'>Simple line chart</p>
    <LineChart
        width={450}
        lineSets={lineSets} 
        xAxisLabels={xAxisLabels}
        lineToShowPointInfo={0} 
        horizontalGuides={{ 
        count: 5, 
        stroke: 1,
        color: "#ccccccfa",
        dashed: true, 
        }}
    />
    </div>
);
};

export default MultipleLine;
`