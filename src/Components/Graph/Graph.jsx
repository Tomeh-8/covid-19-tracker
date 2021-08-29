import React, {Component} from 'react';
import {Bar} from "react-chartjs-2";

class Graph extends Component{

render(){
    const {confirmed, recovered,deaths} = this.props.data;
    if(!confirmed){
       return null;
       }
    return(
       <Bar
       data = {{
        labels: ['Confirmed', "Recovered", "Deaths"],
        datasets: [{
          label: "People",
          backgroundColor: ["rgb(0,0,255)", "rgb(0,255,0)", "rgb(255,0,0)"],
          data:[confirmed.value, recovered.value, deaths.value]
       },],
   }}
    options = {{
        legend:{display:false}

    }}
       />
    )
}
}

export default Graph