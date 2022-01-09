import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "pages/Coin";
import Coins from "pages/Coins";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/:coinId">
                    <Coin />
                </Route>
                <Route path="/">
                    <Coins />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
export default Router;
