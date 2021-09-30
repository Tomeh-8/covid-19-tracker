import React from 'react';
import{Grid, Card, CardContent, Typography} from "@material-ui/core";
import CountUp from 'react-countup';

const Summary = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed){
        return "loading..."
    }
    return (
        <div>
            <Grid container justify = "center" spacing = {4}>
                <Grid item component = {Card} xs = {12} md = {3} style = {{backgroundColor:"yellow"}}>
                    <CardContent>
                       <Typography color="primary" gutterBottom>Infected</Typography>
                       <Typography variant = "h6" style = {{color:"chocolate"}}>
                           <CountUp
                             start = {0}
                             separator = ","
                             end = {confirmed.value}
                             duration = {3}
                           />
                       </Typography>
                       <Typography variant="body2" style = {{color:"mediumpurple"}}>Number of cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card} xs = {12} md = {3} style = {{backgroundColor:"green"}}>
                    <CardContent>
                       <Typography style = {{color:"black"}} gutterBottom>Recovered</Typography>
                       <Typography variant = "h6" style = {{color:"white"}} >
                       <CountUp
                             start = {0}
                             separator = ","
                             end = {recovered.value}
                             duration = {3}
                           />
                       </Typography>
                       <Typography variant="body2" style = {{color:"cyan"}} >Number of cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card} xs = {12} md = {3} style = {{backgroundColor:"crimson"}}>
                    <CardContent>
                       <Typography style = {{color:"gold"}}  gutterBottom>Deaths</Typography>
                       <Typography variant = "h6" style = {{color:"white"}}>
                       <CountUp
                             start = {0}
                             separator = ","
                             end = {deaths.value}
                             duration = {3}
                           />
                       </Typography>
                       <Typography variant="body2" style = {{color:"cyan"}}>Number of cases</Typography>
                    </CardContent>
                </Grid>
            </Grid>
            <Typography color="textSecondary" variant = "h5" style = {{color:"mediumpurple", marginTop: "30px"}} >{new Date(lastUpdate).toDateString()}</Typography>
        </div>
    )
}

export default Summary