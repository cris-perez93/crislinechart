import { LineChart } from 'linechart-test'; 

const SimpleLine = () => {
const lineSets = [
    {
    label: "2023",
    data: [
        { x: 1, y: 4 },
        { x: 2, y: 18 },
        { x: 3, y: 20 },
        { x: 4, y: 21 },
        { x: 5, y: 22 },
        { x: 6, y: 23 },
        { x: 7, y: 20 },
        { x: 8, y: 25 },
        { x: 9, y: 22 },
        { x: 10, y: 30 },
        { x: 11, y: 27 },
        { x: 12, y: 35 },
      ],
       strokeColor: "#FF6384",
       backgroundColorLine: "rgba(206, 0, 58, 0.2)", 
    }
];

const xAxisLabels = ["Ene", "Feb", "Mar", "Abr", "May", 
"Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

return (
    <div className='border p-10  rounded-md relative '>
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

export default SimpleLine;


export const SimpleLineCode = `
import { LineChart } from 'linechart-test';

const SimpleLine = () => {
    const lineSets = [
        {
        label: "2023",
        data: [
            { x: 1, y: 4 },
            { x: 2, y: 18 },
            { x: 3, y: 20 },
            { x: 4, y: 21 },
            { x: 5, y: 22 },
            { x: 6, y: 23 },
            { x: 7, y: 20 },
            { x: 8, y: 25 },
            { x: 9, y: 22 },
            { x: 10, y: 30 },
            { x: 11, y: 27 },
            { x: 12, y: 35 },
          ],
           strokeColor: "#FF6384",
           backgroundColorLine: "rgba(206, 0, 58, 0.2)",
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
    
    export default SimpleLine;
    `;
