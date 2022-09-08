const requestCoin = async ()=>{
    const baseURL='https://api.coinlore.net/api/tickers/?start=100&limit=100';

    const response = await fetch(baseURL);

    const json = await response.json();

    const data = json.data;

    console.log(data);
}

requestCoin();