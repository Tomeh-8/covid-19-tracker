import axios from "axios";

const url = 'https://covid19.mathdro.id/api';

 export const getData = async (country) => {
  let editableUrl = url;

 if(country) {editableUrl = `${url}/countries/${country}`};

    try {
      const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(editableUrl);
      return {confirmed, recovered, deaths, lastUpdate};
    } catch (error) {
      console.error(error);
    }
  };


  export const getCountries = async () => {
       try {
         const {data: {countries}} = await axios.get(`${url}/countries`);
         const country = countries.map((country) => country.name);
          return country;
       } catch (error) {
         console.log(error);
       }
  }
