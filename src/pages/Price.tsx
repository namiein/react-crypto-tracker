import React from "react";
import { useQuery } from "react-query";
import { fetchHistoryTickers } from "api";
import { ChartProps, IHistorical } from "types";

import Loader from "components/Loader";
import CandleStick from "components/CandleStick";

function Price({ coinId }: ChartProps) {
    const { isLoading, data } = useQuery<IHistorical[]>(["history", coinId], () => fetchHistoryTickers(coinId), {
        refetchInterval: 1000 * 60 * 1
    });

    return <div>{isLoading ? <Loader /> : <CandleStick data={data} />}</div>;
}

export default Price;
