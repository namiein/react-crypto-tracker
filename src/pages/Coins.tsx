import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

import { fetchCoins } from "api";
import { ICoin } from "types";
import { Title, Container, Header, CoinsList, Coin, Img } from "assets/styles";

import LoaderComponent from "components/Loader";

function Coins() {
    const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins, {
        staleTime: 10 * 60 * 1000
    });

    return (
        <Container>
            <Helmet>
                <title>코인</title>
            </Helmet>
            <Header>
                <Title>코인</Title>
            </Header>
            {isLoading ? (
                <LoaderComponent />
            ) : (
                <CoinsList>
                    {data?.slice(0, 100).map((coin) => (
                        <Coin key={coin.id}>
                            <Link
                                to={{
                                    pathname: `/${coin.id}`,
                                    state: { name: coin.name }
                                }}>
                                <Img src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} />
                                {coin.name} &rarr;
                            </Link>
                        </Coin>
                    ))}
                </CoinsList>
            )}
        </Container>
    );
}
export default Coins;
