import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchdata = async (country) => {
    try {
        let changeableUrl = url;
        if(country){
            changeableUrl = `${url}/countries/${country}`;
        }
        const data = await axios.get(changeableUrl);
        const modifiedData = {
            confirmed : data.data.confirmed,
            recovered : data.data.recovered,
            deaths : data.data.deaths,
            lastUpdate : data.data.lastUpdate,
        }
        return modifiedData;
    }
    catch (error) {
        console.log(error);
    }
} 

export const fetchCountries = async () => {
    try {
        const {data : {countries} } = await axios.get(`${url}/countries`);
        const Countries = countries.map((country)=>country.name);
        return Countries;
    } catch (error) {
        console.log(error);
    }
}

