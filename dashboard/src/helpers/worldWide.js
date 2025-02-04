

export const fetchAll = async () => {

    const infoTotal = await fetch('https://disease.sh/v3/covid-19/all')
    const infoTotalJSON = await infoTotal.json()

    const { info } = infoTotalJSON;

    return info; 

}


