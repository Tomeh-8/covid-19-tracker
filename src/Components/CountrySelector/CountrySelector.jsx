import React, { Component } from 'react';
import { NativeSelect, FormControl, Typography } from '@material-ui/core';
import {getCountries} from "../../Api/index";

class CountrySelector extends Component {
  state = {
      countries: []
  }

 async componentDidMount(){
   const allCountries = await getCountries();
   this.setState({countries: allCountries});
 }

    render(){
        return (
            <div className = "selector">
                <Typography variant = "h6" style = {{color:"grey", fontSize:"12px"}}>Select a Country</Typography>
                <FormControl>
                <NativeSelect onChange = {(e) => this.props.onCountryChange(e.target.value)} style = {{color:"mediumpurple"}}>
                    <option value ="">
                      World
                    </option>
                    {this.state.countries.map((country, i) => <option key ={i} value = {country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
            </div>
        )
    }
}

export default CountrySelector
