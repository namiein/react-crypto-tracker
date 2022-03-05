import React from "react";
import { useQuery } from "react-query";
import { fetchHistoryTickers } from "api";
import { ChartProps, IHistorical } from "types";
import ReactApexChart from "react-apexcharts";

import LoaderComponent from "components/Loader";

function Price({ coinId }: ChartProps) {
    const { isLoading, data } = useQuery<IHistorical[]>(["history", coinId], () => fetchHistoryTickers(coinId), {
        refetchInterval: 1000 * 60 * 1
    });

    return (
        <div>
            {isLoading ? (
                <LoaderComponent />
            ) : (
                <ReactApexChart
                    options={{
                        theme: {
                            mode: "dark"
                        },
                        chart: {
                            type: "candlestick",
                            height: 350,
                            toolbar: {
                                show: false
                            },
                            background: "transparent"
                        },
                        xaxis: {
                            type: "datetime",
                            axisTicks: { show: false },
                            labels: {
                                style: {
                                    colors: Array.from(Array(8)).map(() => "#000000")
                                }
                            }
                        },
                        yaxis: {
                            show: false
                        }
                    }}
                    series={[
                        {
                            name: "Price",
                            data: data?.map((price) => ({
                                x: new Date(price.time_close),
                                y: [price.open.toFixed(2), price.high.toFixed(2), price.low.toFixed(2), price.close.toFixed(2)]
                            }))
                        }
                    ]}
                    type="candlestick"
                    height={500}
                />
            )}
        </div>
    );
}

export default Price;
