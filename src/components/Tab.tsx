import React from "react";
import { Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";

import { Tab, Tabs } from "assets/styles";
import { RouteParams } from "types";

import Price from "pages/Price";
import Chart from "pages/Chart";

export default function TabComponent() {
    const { coinId } = useParams<RouteParams>();
    const priceMatch = useRouteMatch("/:coinId/price");
    const chartMatch = useRouteMatch("/:coinId/chart");

    return (
        <>
            <Tabs>
                <Tab isActive={chartMatch !== null}>
                    <Link to={`/${coinId}/chart`}>Chart</Link>
                </Tab>
                <Tab isActive={priceMatch !== null}>
                    <Link to={`/${coinId}/price`}>Price</Link>
                </Tab>
            </Tabs>
            <Switch>
                <Route path="/:coinId/price">
                    <Price />
                </Route>
                <Route path="/:coinId/chart">
                    <Chart coinId={coinId} />
                </Route>
            </Switch>
        </>
    );
}
