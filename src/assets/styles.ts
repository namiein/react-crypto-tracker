import styled, { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding:0;
        font-weight: 300;
        line-height: 1.2;    
        color: ${(props) => props.theme.textColor};
        background-color: ${(props) => props.theme.bgColor};
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    input{
        all: unset;
    }

    ul { 
        margin: 0;
        padding : 0;
    }
`;

// Loading.tsx
export const Main = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LoadingSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 20px;
`;

const BoucingAnimation = keyframes`
    0% {
        transform: translateY(-10px);
    }

    100% {
        color: #ffd100;
        transform: translateY(0px);
    }
`;

export const LoadingStatus = styled.p`
    font-size: 24px;
    font-family: fantasy;
    letter-spacing: 1.5px;

    span {
        display: inline-block;
        animation: ${BoucingAnimation} 1.5s infinite;

        &:nth-of-type(2) {
            animation-delay: 0.1s;
        }

        &:last-of-type {
            animation-delay: 0.22s;
        }
    }

    strong {
        margin-left: 20px;
        color: gold;
    }
`;

const SpinnerAnimation = keyframes`
    0% { 
        opacity: 0;
        transform: rotate(0deg); 
    }

    50% {
        opacity: 1;
    }
    
    100% { 
        opacity: 0;
        transform: rotate(360deg); 
    }
`;

export const CoinOuter = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.accentColor};
    border-radius: 50%;

    &::after {
        content: "";
        position: absolute;
        top: 5px;
        left: 5px;
        width: 180px;
        height: 180px;
        border-radius: 50%;
        border: solid 5px transparent;
        border-bottom-color: #ffffff;
        will-change: transform;
        animation: ${SpinnerAnimation} 1.5s linear infinite;
    }
`;

const PulseAnimation = keyframes`
    0% {
        transform: scale(0.8)
    }

    50% {
        transform: scale(1.1)
    }

    100% { 
        transform: scale(0.8)
    }
`;

export const CoinInner = styled.div`
    width: 150px;
    height: 150px;
    background: #ffffff;
    border-radius: 50%;

    & > div {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    & > div {
        will-change: transform;
        animation: ${PulseAnimation} 1.5s ease-in-out infinite;
    }
`;

export const FirstBlock = styled.div`
    position: absolute;
    top: 21px;
    right: 30px;
    width: 15px;
    height: 15px;
    background: ${(props) => props.theme.accentColor};
    transform: rotate(20deg);
`;

export const SecondBlock = styled.div`
    position: absolute;
    top: 12px;
    left: 80px;
    height: 16px;
    width: 15px;
    background: ${(props) => props.theme.accentColor};
    transform: rotate(20deg);
`;

export const ThirdBlock = styled.div`
    position: absolute;
    bottom: 18px;
    left: 40px;
    width: 15px;
    height: 16px;
    background: ${(props) => props.theme.accentColor};
    transform: rotate(20deg);
`;

export const LastBlock = styled.div`
    position: absolute;
    bottom: 10px;
    right: 70px;
    width: 15px;
    height: 15px;
    background: ${(props) => props.theme.accentColor};
    transform: rotate(20deg);
`;

export const OuterCoin = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    margin-left: 25px;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
    border-top-right-radius: 30%;
    border-bottom-right-radius: 30%;
    background: ${(props) => props.theme.accentColor};
    transform: rotate(20deg);
`;

export const InnerCoin = styled.div`
    position: absolute;
    top: 25px;
    right: -10px;
    width: 65px;
    height: 50px;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    background: #ffffff;
`;

// COINS.tsx
export const Container = styled.main`
    margin: 0 auto;
    padding: 0px 20px;
`;

export const Header = styled.header`
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: fantasy;
    letter-spacing: 2px;
`;

export const Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    max-width: 1480px;
    display: block;
    margin: 0 auto 20px;
    padding: 8px 20px;
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    color: ${(props) => props.theme.bgColor};
    border-radius: 15px;
    background-color: #ffffff;
`;

export const CoinsList = styled.ul`
    max-width: 1600px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin: 0 auto;
`;

export const Coin = styled.li`
    min-width: 250px;
    width: 100%;
    max-width: 480px;
    margin-bottom: 10px;
    padding: 20px;
    letter-spacing: 1px;
    color: ${(props) => props.theme.bgColor};
    border-radius: 15px;
    background-color: #ffffff;

    details {
        & > div:first-of-type {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 20px;

            & > span {
                font-family: inherit;
                font-size: 12px;
                font-weight: 600;
                padding: 5px 10px;
                border: 1px solid gold;
                border-radius: 25px;
                background: #ffffff;
                strong {
                    font-family: fantasy;
                    font-weight: 500;
                }
            }
        }

        & > div:last-of-type {
            margin-top: 20px;
            border-radius: 4px;
            background: ${(props) => props.theme.bgColor};

            & > span {
                min-height: 150px;
                max-height: 300px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: gold;
                font-weight: 600;
                font-family: fantasy;
            }
        }
    }

    details summary {
        font-family: fantasy;
        list-style: none;
        cursor: pointer;
    }

    a {
        margin-top: 20px;
        display: flex;
        align-items: center;
        font-weight: 500;
        font-family: fantasy;
        transition: color 0.2s ease-in;
    }

    &:hover {
        a {
            color: ${(props) => props.theme.accentColor};
        }
    }
`;

// COIN.tsx
export const Title = styled.h1`
    font-size: 48px;
    color: ${(props) => props.theme.accentColor};
`;

export const Loader = styled.span`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.accentColor};
    font-weight: 600;
`;

export const Img = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
`;

export const OverviewSection = styled.section`
    max-width: 1600px;
    margin: 0 auto;
`;

export const Overview = styled.div`
    display: flex;
    justify-content: space-between;
    row-gap: 20px;
    padding: 10px 20px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.5);

    &:last-of-type {
        flex-wrap: wrap;
        justify-content: space-around;
        margin-top: 20px;

        div {
            max-width: 120px;
        }
    }
`;

export const OverviewItem = styled.div`
    width: 33%;
    display: flex;
    align-items: center;
    flex-direction: column;

    span:first-child {
        margin-bottom: 5px;
        color: ${(props) => props.theme.accentColor};
        font-size: 10px;
        font-weight: 500;
        text-transform: uppercase;
    }

    span:last-child {
        font-family: fantasy;
    }
`;

export const Description = styled.p`
    margin: 20px;
    font-weight: 500;
`;

export const TabSection = styled.section`
    max-width: 1600px;
    margin: 0 auto;
`;

export const Tabs = styled.div`
    margin: 25px 0px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
`;

export const Tab = styled.span<{ isActive: boolean }>`
    padding: 20px;
    text-align: center;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 600;
    font-family: fantasy;
    letter-spacing: 2px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    color: ${(props) => (props.isActive ? props.theme.accentColor : props.theme.textColor)};

    a {
        display: block;
    }
`;

export const ChartWrapper = styled.div`
    margin-bottom: 30px;
    background-color: #ffffff;
    border-radius: 10px;
`;

// Footer.tsx
export const Footer = styled.footer`
    padding: 20px;
    text-align: center;
    font-size: 12px;
    font-weight: 600;

    p {
        font-size: 10px;
        color: ${(props) => props.theme.accentColor};
    }
`;
