import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "pages/Coin";
import Coins from "pages/Coins";
import Loading from "pages/Loading";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/loading">
                    <Loading />
                </Route>
                <Route path="/:coinId">
                    <Coin />
                </Route>
                <Route exact path="/">
                    <Coins />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
export default Router;
