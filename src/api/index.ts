const BASE_URL = `https://api.coinpaprika.com/v1`;

/* eslint-disable import/prefer-default-export */
export async function fetchCoins() {
    return (await fetch(`${BASE_URL}/coins`)).json();
}

export async function fetchCoinInfo(coinId: string) {
    return (await fetch(`${BASE_URL}/coins/${coinId}`)).json();
}

export async function fetchCoinTickers(coinId: string) {
    return (await fetch(`${BASE_URL}/tickers/${coinId}`)).json();
}

export async function fetchCoinHistory(coinId: string) {
    const endDate = Math.floor(Date.now() / 1000);
    const startDate = endDate - 60 * 60 * 24 * 7 * 2;

    return (await fetch(`${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`)).json();
}

export async function fetchHistoryTickers(coinId: string) {
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 3);
    startDate.setDate(1);
    const format = [
        startDate.getFullYear(),
        startDate.getMonth() < 10 ? `0${startDate.getMonth()}` : startDate.getMonth(),
        startDate.getDate() < 10 ? `0${startDate.getDate()}` : startDate.getDate()
    ].join("-");
    const endDate = Math.floor(Date.now() / 1000);

    return (await fetch(`${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${format}&end=${endDate}`)).json();
}
