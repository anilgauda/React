import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {

    const [data,useData] = useState({});
    const currencyUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    useEffect(()=>{
        fetch(currencyUrl).then((res)=> res.json()).then((res) => useData(res[currency])).catch((e)=>console.log(e));
        console.log('Data: ',data);
    },[currency])

    console.log(data);
    return data;
}

export default useCurrencyInfo;