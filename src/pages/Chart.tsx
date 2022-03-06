import React from "react";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "api";
import { ChartProps, IHistorical } from "types";

import Loader from "components/Loader";
import LineChart from "components/LineChart";

function Chart({ coinId }: ChartProps) {
    const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId), {
        refetchInterval: 1000 * 60 * 1
    });

    return <div>{isLoading ? <Loader /> : <LineChart data={data} />}</div>;
}

export default Chart;
