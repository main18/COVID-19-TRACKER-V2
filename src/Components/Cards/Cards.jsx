import React from 'react';
import {Grid, Card, CardContent, Typography} from '@material-ui/core';
import styles from './Cards.module.css';
import cn from 'classnames';
import CountUp from 'react-countup';

const Cards = ({data : {confirmed, recovered, deaths, lastUpdate} }) => {
    if(!confirmed){
        return 'loading ... '
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify='center'>
                <Grid item xs={12} md={3} component={Card} className={cn(styles.card, styles.confirmed)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Infected</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator=',' />
                        </Typography>
                        <Typography variant='body2'>{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} component={Card} className={cn(styles.card, styles.recoveries)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={recovered.value} duration={2.5} separator=',' />
                        </Typography>
                        <Typography variant='body2'>{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} component={Card} className={cn(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={deaths.value} duration={2.5} separator=',' />
                        </Typography>
                        <Typography variant='body2'>{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}

export default Cards;

