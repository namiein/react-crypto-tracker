import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "pages/Coin";
import Coins from "pages/Coins";
import Loading from "pages/Loading";

function Router() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path="/">
                    <Loading />
                </Route>
                <Route exact path="/coins">
                    <Coins />
                </Route>
                <Route path="/:coinId">
                    <Coin />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
export default Router;
