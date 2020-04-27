import React, {useState, useEffect} from 'react';
import {FormControl, NativeSelect} from '@material-ui/core';
import {fetchCountries} from '../../api';
import styles from './CountryPicker.module.css';

const CountryPicker = ({handleSelectedCountry}) => {
    const [countries, setCountries] = useState([]);
    //const [country, setCountry] = useState([]);
    useEffect(()=>{
        const fetchAPI = async () => {
            setCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setCountries])
    return(
        <div className={styles.container}>
            <FormControl className={styles.select}>
                <NativeSelect onChange={(e)=>handleSelectedCountry(e.target.value)}>
                    <option value=''>The World</option>
                    {countries.map((country, i)=>(<option key={i} value={country}>{country}</option>))}
                </NativeSelect >
            </FormControl>
        </div>
    );
}

export default CountryPicker;