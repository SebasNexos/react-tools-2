

export const fetchHistory = async () => {

    const history = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all')
    const historyJSON = await history.json()

    return historyJSON; 

}