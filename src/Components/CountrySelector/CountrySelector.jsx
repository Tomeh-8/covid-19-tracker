import React, { Component } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
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
            <FormControl>
                <NativeSelect onChange = {(e) => this.props.onCountryChange(e.target.value)}>
                    <option value ="">
                      World
                    </option>
                    {this.state.countries.map((country, i) => <option key ={i} value = {country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        )
    }
}

export default CountrySelector
