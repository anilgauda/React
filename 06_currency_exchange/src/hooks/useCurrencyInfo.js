import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data,useData] = useState({});
    const currencyUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    useEffect(()=>{
        fetch(currencyUrl).then((res)=> JSON.parse(res)).then((res) => useData(res[currency]));
        console.log('Data: ',data);
    },[currency])

    console.log(data);
    return data;
}

export default useCurrencyInfo;