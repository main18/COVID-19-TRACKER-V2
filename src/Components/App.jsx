import React from 'react';
import './App.css';
import Cards from './Cards/Cards';
import Chart from './Chart/Chart';
import CountryPicker from './CountryPicker/CountryPicker';
import {fetchdata} from '../api';
import image from '../images/coronavirus.png';


class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data:{},
            country:'The World',
        }
    }

    async componentDidMount(){
        this.setState({
            data : await fetchdata(),
        });
    };

    //this method listen to the change event on the CountryPicker Component
    handleSelectedCountry = async (country) => {
        return this.setState({
            country:country,
            data : await fetchdata(country), 
        });
    }

    render(){
        const {data, country} = this.state;
        return(
            <div className='container'>
                <img className='image' src={image} alt='COVID-19'/>
                <Cards data={data}/>
                <CountryPicker handleSelectedCountry={this.handleSelectedCountry}/>
                <Chart country={country} data={data}/>
            </div>
        );
    }
}


export default App;