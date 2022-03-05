import React from "react";
import { Overview, OverviewItem, Description, OverviewSection } from "assets/styles";
import { OverviewProps } from "types";

export default function OverviewComponent({ infoData, tickersData }: OverviewProps) {
    return (
        <OverviewSection>
            <Overview>
                <OverviewItem>
                    <span>Rank:</span>
                    <span>{infoData?.rank}</span>
                </OverviewItem>
                <OverviewItem>
                    <span>Symbol:</span>
                    <span>${infoData?.symbol}</span>
                </OverviewItem>
                <OverviewItem>
                    <span>Price:</span>
                    <span>{tickersData?.quotes.KRW.price.toLocaleString("ko-KR", { style: "currency", currency: "KRW" })}</span>
                </OverviewItem>
            </Overview>
            <Description>{infoData?.description}</Description>
            <Overview>
                <OverviewItem>
                    <span>Total Suply:</span>
                    <span>{tickersData?.total_supply?.toLocaleString()}</span>
                </OverviewItem>
                <OverviewItem>
                    <span>Max Supply:</span>
                    <span>{tickersData?.max_supply?.toLocaleString()}</span>
                </OverviewItem>
            </Overview>
            <Overview>
                <OverviewItem>
                    <span>15m</span>
                    <span>{tickersData?.quotes?.KRW?.percent_change_15m}%</span>
                </OverviewItem>
                <OverviewItem>
                    <span>30m</span>
                    <span>{tickersData?.quotes?.KRW?.percent_change_30m}%</span>
                </OverviewItem>
                <OverviewItem>
                    <span>1h</span>
                    <span>{tickersData?.quotes?.KRW?.percent_change_1h}%</span>
                </OverviewItem>
                <OverviewItem>
                    <span>6h</span>
                    <span>{tickersData?.quotes?.KRW?.percent_change_6h}%</span>
                </OverviewItem>
                <OverviewItem>
                    <span>12h</span>
                    <span>{tickersData?.quotes?.KRW?.percent_change_12h}%</span>
                </OverviewItem>
                <OverviewItem>
                    <span>24h</span>
                    <span>{tickersData?.quotes?.KRW?.percent_change_24h}%</span>
                </OverviewItem>
                <OverviewItem>
                    <span>7d</span>
                    <span>{tickersData?.quotes?.KRW?.percent_change_7d}%</span>
                </OverviewItem>
                <OverviewItem>
                    <span>30d</span>
                    <span>{tickersData?.quotes?.KRW?.percent_change_30d}%</span>
                </OverviewItem>
                <OverviewItem>
                    <span>365d</span>
                    <span>{tickersData?.quotes?.KRW?.percent_change_1y}%</span>
                </OverviewItem>
            </Overview>
        </OverviewSection>
    );
}
