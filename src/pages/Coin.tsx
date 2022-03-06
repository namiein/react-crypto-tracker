import React from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCoinInfo, fetchCoinTickers } from "api";

import { Container, Header, Title } from "assets/styles";
import { InfoData, PriceData, RouteParams, RouteState } from "types";

import Loader from "components/Loader";
import OverView from "components/Overview";
import Tab from "components/Tab";
import Footer from "components/Footer";

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
                <Loader />
            ) : (
                <>
                    <OverView infoData={infoData} tickersData={tickersData} />
                    <Tab />
                </>
            )}
            <Footer />
        </Container>
    );
}

export default Coin;
