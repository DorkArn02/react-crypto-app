import axios from 'axios'

export const getMarket = async () => {

    const options = {
        method: 'GET',
        url: `${process.env.REACT_APP_API}`,
        params: { vs_currency: 'usd', page: '1', per_page: '100', order: 'market_cap_desc' },
        headers: {
            'X-RapidAPI-Key': `${process.env.REACT_APP_KEY}`,
            'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
        }
    };

    const data = await axios.request(options).then(response => {
        return response.data
    }).catch(error => {
        console.error(error);
    });

    return data
}

export const getCoin = async (id) => {
    const options = {
        method: 'GET',
        url: `https://coingecko.p.rapidapi.com/coins/${id}`,
        params: {
            localization: 'true',
            tickers: 'true',
            market_data: 'true',
            community_data: 'true',
            developer_data: 'true',
            sparkline: 'false'
        },
        headers: {
            'X-RapidAPI-Key': `${process.env.REACT_APP_KEY}`,
            'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
        }
    };

    const data = await axios.request(options).then(function (response) {
        return response.data
    }).catch(function (error) {
        return error
    });

    return data
}