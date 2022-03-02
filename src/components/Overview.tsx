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
                    <span>${tickersData?.quotes.USD.price.toFixed(3)}</span>
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
        </OverviewSection>
    );
}
