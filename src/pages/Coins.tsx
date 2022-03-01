import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

import { fetchCoinHistory, fetchCoins } from "api";
import { ICoin, IHistorical } from "types";
import { Title, Container, Header, CoinsList, Coin, Img, Input } from "assets/styles";

import LoaderComponent from "components/Loader";
import LineChart from "components/LineChart";

function Coins() {
    const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins, {
        staleTime: 60 * 60 * 1000
    });

    const [selected, setSelected] = React.useState("btc-bitcoin");
    const [search, setSearch] = React.useState("");
    const [searchResult, setSearchResult] = React.useState<ICoin[]>([]);

    const chartQuery = useQuery<IHistorical[]>(["ohlcv", selected], () => fetchCoinHistory(selected), {
        staleTime: 5 * 60 * 1000
    });

    useEffect(() => {
        if (data && search.length > 2) {
            const filtered = data.filter((coin) => coin.name.toLowerCase().includes(search) && coin);
            setSearchResult(filtered);
        }
    }, [search, data]);

    return (
        <Container>
            <Helmet>
                <title>Crypto Tracker</title>
            </Helmet>
            <Header>
                <Title>Crypto Tracker</Title>
            </Header>
            <Input autoComplete="off" autoCorrect="off" autoCapitalize="off" type="search" name="search" placeholder="Search Your Coin..." onChange={(e) => setSearch(e.target.value)} />
            {isLoading ? (
                <LoaderComponent />
            ) : (
                <CoinsList>
                    {(data && search.length > 3 ? searchResult : data)?.slice(0, 100).map((coin) => (
                        <Coin key={coin.id}>
                            <details>
                                <summary onClick={() => setSelected(coin.id)}>{coin.name}</summary>
                                <Link
                                    to={{
                                        pathname: `/${coin.id}`,
                                        state: { name: coin.name }
                                    }}>
                                    <Img src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} />
                                    {coin.name} &rarr;
                                </Link>
                                <div>
                                    <span>
                                        Rank: <strong>{coin.rank}</strong>
                                    </span>
                                    <span>
                                        Name: <strong>{coin.name}</strong>
                                    </span>
                                    <span>
                                        Symbol: <strong>{coin.symbol}</strong>
                                    </span>
                                    <span>
                                        Type: <strong>{coin.type}</strong>
                                    </span>
                                </div>
                                {chartQuery.isLoading ? (
                                    <LoaderComponent />
                                ) : (
                                    <div>
                                        <LineChart data={chartQuery.data} />
                                    </div>
                                )}
                            </details>
                        </Coin>
                    ))}
                </CoinsList>
            )}
        </Container>
    );
}
export default Coins;
