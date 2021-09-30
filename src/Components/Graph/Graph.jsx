import React, {Component} from 'react';
import {Bar} from "react-chartjs-2";
import{Grid} from "@material-ui/core";
import "./Graph.module.css";

class Graph extends Component{

render(){
    const {confirmed, recovered,deaths} = this.props.data;
    if(!confirmed){
       return null;
       }
    return(
       <div className = "graph">
          <Bar
          data = {{
          labels: ['Confirmed', "Recovered", "Deaths"],
          datasets: [{
          label: "people",
          backgroundColor: ["yellow", "rgb(0,255,0)", "rgb(255,0,0)"],
          data:[confirmed.value, recovered.value, deaths.value]
       },],
   }}
    options = {{
        legend:{display:false}

    }}
       />
       </div>
    )
}
}

export default Graph