import React from "react";
import { Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";

import { ChartWrapper, Tab, Tabs, TabSection } from "assets/styles";
import { RouteParams } from "types";

import Price from "pages/Price";
import Chart from "pages/Chart";

export default function TabComponent() {
    const { coinId } = useParams<RouteParams>();
    const chartMatch = useRouteMatch("/:coinId");
    const priceMatch = useRouteMatch("/:coinId/price");

    return (
        <TabSection>
            <Tabs>
                <Tab isActive={chartMatch !== null}>
                    <Link to={`/${coinId}`}>Chart</Link>
                </Tab>
                <Tab isActive={priceMatch !== null}>
                    <Link to={`/${coinId}/price`}>Price</Link>
                </Tab>
            </Tabs>
            <Switch>
                <Route exact path="/:coinId">
                    <ChartWrapper>
                        <Chart coinId={coinId} />
                    </ChartWrapper>
                </Route>
                <Route exact path="/:coinId/price">
                    <Price />
                </Route>
            </Switch>
        </TabSection>
    );
}
