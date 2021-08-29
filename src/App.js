import React, { Component } from 'react';
import './App.css';
import CountrySelector from './Components/CountrySelector/CountrySelector';
import Graph from './Components/Graph/Graph';
import Summary from './Components/Summary/Summary';
import {getCountries, getData} from "./Api/index";



class App extends Component {
  state = {
    data: {},
    country: ""
  }

  async componentDidMount() {
    const retrievedData = await getData();
    const getAllCountries = await getCountries();
    this.setState({data:retrievedData});
    console.log(retrievedData);
    console.log(getAllCountries);
 }

 onCountryChange = async(country) => {
  const data = await getData(country);
  this.setState({data:data, country: country});
  console.log(this.state.data);
}

  render() {
    return (
      <div className="App">
       <Summary data = {this.state.data}/>
       <CountrySelector onCountryChange = {this.onCountryChange}/>
       <Graph data = {this.state.data} />
    </div>
    )
  }
}

export default App;
