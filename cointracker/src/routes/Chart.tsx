import { useParams } from "react-router-dom";
import { getCoinHistory } from "../Api/api";
import { useQuery } from "@tanstack/react-query";
import ReactApexChart from "react-apexcharts";

import {useRecoilValue} from "recoil"
import { isDarkAtom } from "../recoil/atoms";

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: number;
  volume: string;
  market_cap: number;
}
interface IRouterProps {
  themeMode: { isDark: boolean; changeMode: () => void };
}


function Chart() {
  const params = useParams();

  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", params.coinId],
    () => getCoinHistory(`${params.coinId}`),{
      refetchInterval:5000
    }
  );

  const isDark = useRecoilValue(isDarkAtom)

  return (
    <>
      {isLoading ? (
        "Loading cart..."
      ) : (
        <ReactApexChart
          type="line"
          series={[
            {
              name: "price",
              data: data?.map((price) => price.close) as number[],
            },
          ]}
          options={{
            chart: {
              height: "500px",
              width: "500px",
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            theme: {
              mode: isDark ?  "dark" : "light",
            },
            grid: { show: false },
            stroke: {
              curve: "smooth",
              width: 4,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: { show: false },
              type: "datetime",
              categories: data?.map((price) =>
                new Date(price.time_close * 1000).toISOString()
              ),
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
            },
            colors: ["#0fbcf9"],
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(2)}`,
              },
            },
          }}
        />
      )}
    </>
  );
}
export default Chart;
