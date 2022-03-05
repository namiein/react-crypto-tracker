import React from "react";
import ApexChart from "react-apexcharts";
import { ChartDataProps } from "types";

export default function Chart({ data }: ChartDataProps) {
    return (
        <ApexChart
            type="line"
            series={[
                {
                    name: "Price",
                    data: data?.map((price) => price.close)
                }
            ]}
            options={{
                theme: {
                    mode: "dark"
                },
                chart: {
                    height: 300,
                    width: 500,
                    toolbar: {
                        show: false
                    },
                    background: "transparent"
                },
                grid: { show: false },
                stroke: {
                    curve: "smooth",
                    width: 4
                },
                yaxis: {
                    show: false
                },
                xaxis: {
                    axisBorder: { show: false },
                    axisTicks: { show: false },
                    labels: { show: false },
                    type: "datetime",
                    categories: data?.map((price) => price.time_close)
                },
                fill: {
                    type: "gradient",
                    gradient: { gradientToColors: ["#fdf8e1"], stops: [0, 100] }
                },
                colors: ["#ffd100"],
                tooltip: {
                    y: {
                        formatter: (value) => `$${value.toFixed(2)}`
                    }
                }
            }}
        />
    );
}
