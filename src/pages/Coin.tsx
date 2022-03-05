import React from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { Link, useLocation, useParams } from "react-router-dom";

import { fetchCoinInfo, fetchCoinTickers } from "api";
import { InfoData, PriceData, RouteParams, RouteState } from "types";

import TabComponent from "components/Tab";
import { Container, Header, Title } from "assets/styles";
import OverviewComponent from "components/Overview";
import LoaderComponent from "components/Loader";

function Coin() {
    const { coinId } = useParams<RouteParams>();
    const { state } = useLocation<RouteState>();

    const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>(["info", coinId], () => fetchCoinInfo(coinId));
    const { isLoading: tickersLoading, data: tickersData } = useQuery<PriceData>(["tickers", coinId], () => fetchCoinTickers(coinId), {
        refetchInterval: 1000 * 60 * 1
    });

    const loading = infoLoading || tickersLoading;

    return (
        <Container>
            <Helmet>
                <title>{state?.name ? state.name : loading ? "Loading..." : infoData?.name}</title>
            </Helmet>
            <Header>
                <Link to="/coins">
                    <Title>{state?.name ? state.name : loading ? "Loading..." : infoData?.name}</Title>
                </Link>
            </Header>
            {loading ? (
                <LoaderComponent />
            ) : (
                <>
                    <OverviewComponent infoData={infoData} tickersData={tickersData} />
                    <TabComponent />
                </>
            )}
        </Container>
    );
}

export default Coin;
