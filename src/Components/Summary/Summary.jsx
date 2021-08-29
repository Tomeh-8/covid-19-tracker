import React from 'react';
import{Grid, Card, CardContent, Typography} from "@material-ui/core";
import CountUp from 'react-countup';

const Summary = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed){
        return "loading..."
    }
    return (
        <div>
            <Grid container justify = "center" spacing = {2}>
                <Grid item component = {Card} xs = {12} md = {3}>
                    <CardContent>
                       <Typography color="textSecondary" gutterBottom>Infected</Typography>
                       <Typography variant = "h6">
                           <CountUp
                             start = {0}
                             separator = ","
                             end = {confirmed.value}
                             duration = {3}
                           />
                       </Typography>
                       <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                       <Typography variant="body2">number of cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card} xs = {12} md = {3}>
                    <CardContent>
                       <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                       <Typography variant = "h6">
                       <CountUp
                             start = {0}
                             separator = ","
                             end = {recovered.value}
                             duration = {3}
                           />
                       </Typography>
                       <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                       <Typography variant="body2">number of cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card} xs = {12} md = {3}>
                    <CardContent>
                       <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                       <Typography variant = "h6">
                       <CountUp
                             start = {0}
                             separator = ","
                             end = {deaths.value}
                             duration = {3}
                           />
                       </Typography>
                       <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                       <Typography variant="body2">number of cases</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Summary