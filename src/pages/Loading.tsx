import React from "react";
import { useHistory } from "react-router-dom";
import { useQueryClient } from "react-query";
import { fetchCoins } from "api";

import { CoinInner, CoinOuter, FirstBlock, InnerCoin, LastBlock, LoadingSection, LoadingStatus, Main, OuterCoin, SecondBlock, ThirdBlock } from "assets/styles";

export default function Loading() {
    const history = useHistory();
    const queryClient = useQueryClient();

    const [percentage, setPercentage] = React.useState(0);

    React.useEffect(() => {
        let timerId: NodeJS.Timer;
        if (percentage < 100) {
            timerId = setInterval(() => setPercentage((prev) => prev + 1), 150);
        } else if (percentage === 100) {
            history.replace("/coins");
        }

        return () => clearInterval(timerId);
    }, [percentage, history]);

    React.useEffect(() => {
        queryClient.prefetchQuery(["allCoins"], fetchCoins, {
            staleTime: 60 * 60 * 1000
        });
    }, [queryClient]);

    return (
        <Main>
            <LoadingSection>
                <CoinOuter>
                    <CoinInner>
                        <div>
                            <FirstBlock />
                            <SecondBlock />
                            <OuterCoin>
                                <InnerCoin />
                            </OuterCoin>
                            <ThirdBlock />
                            <LastBlock />
                        </div>
                    </CoinInner>
                </CoinOuter>
                <LoadingStatus>
                    Loading<span>.</span>
                    <span>.</span>
                    <span>.</span>
                    <strong>{percentage}%</strong>
                </LoadingStatus>
            </LoadingSection>
        </Main>
    );
}
