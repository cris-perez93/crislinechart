import "linechart-test/dist/cjs/assets/index-UvnS4ki5.css";
import LineCode from "./codes/LineCode";
import SimpleLine, { SimpleLineCode } from "./charts/SimpleLineChart";
import MultipleLine, { MultipleLineCode } from "./charts/MultipleLineChart";
import CustomTooltipLineChart, { CustomTooltipLineCode } from "./charts/CustomTooltipChart";
import BigDataLineChart, { BigDataLineCode } from "./charts/BigDataLineChart";





const ChartsView = () => {
  return (
    <div className="p-10 w-[1200px] flex-col m-auto mt-20 flex gap-20 justify-center items-center   bg-[#ffffff42] rounded-md  ">
      <div className=" w-full">
        <h1 className="text-xl mb-5">
          Charts created from scratch using React and TypeScript
        </h1>
        <p className="text-sm text-justify">
          Biblioteca en desarrollo de gráficos para React, construida con
          TypeScript, está diseñada para ofrecer una experiencia de desarrollo
          fluida y eficiente, permitiendo a los desarrolladores construir
          gráficos interactivos y responsivos con facilidad. Utilizando las
          últimas versiones de React, la biblioteca aprovecha los hooks de React
          y otros avances recientes para asegurar una integración perfecta y un
          rendimiento óptimo. La biblioteca también está diseñada para ser
          altamente personalizable, permitiendo a los desarrolladores crear una
          amplia gama de gráficos con un esfuerzo mínimo.
        </p>
        <div className="mt-10 flex flex-col gap-1.5">
          <p>Installing via NPM</p>
          <div className="bg-[#b9b9b9dd] py-2 px-2 w-max rounded-md shadow-md">
            <pre className="text-xs">
              <code>{`npm install linechart-test`}</code>
            </pre>
          </div>
        </div>
      </div>
      <div className=" border w-full flex flex-col gap-10 rounded-md p-10 ">
        <div className="flex gap-10">
          <SimpleLine />
          <div className="w-[500px]">
            <LineCode
              component={SimpleLineCode}
            />
          </div>
        </div>
        <div className="flex gap-10 ">
          <MultipleLine />
          <div className="w-[500px]">
            <LineCode
              component={MultipleLineCode}
            />
          </div>
        </div>
        <div className="flex gap-10 ">
          <CustomTooltipLineChart />
          <div className="w-[500px]">
            <LineCode
              component={CustomTooltipLineCode}
            />
          </div>
        </div>
        <div className="flex flex-col gap-10 ">
          <BigDataLineChart />
          <div className="w-full">
            <LineCode
              component={BigDataLineCode}
            />
          </div>
        </div>
        
      </div>
      {/* <div className="border p-10 rounded-md ">
        <BarChart width={200} series={BAR_SETS} xAxisLabels={BAR_LABELS} />
      </div> */}
    </div>
  );
};

export default ChartsView;
