import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({data : {confirmed, recovered, deaths} ,country }) => {
    if(!confirmed){
        return 'loading ... '
    }
    return(
        <div className={styles.container}>
            <p className={styles.text}>{country}</p>
            <Doughnut
                className={styles.Chart}
                data={{
                    responsivness:true,
                    datasets: [
                    {
                        data: [deaths.value, recovered.value, confirmed.value],
                        backgroundColor: ["#FF7F7F", "#7FFF7F", "#33CCFF"],
                        hoverBackgroundColor: ["#fa5c5c", "#61f261", "#6edbff"],
                    },
                    ],
                        labels: ["Deaths", "Recovered", "Infected"],
                    }}
                    width={230}
                    height={230}
                    options={{
                        legend: {
                        display: true,
                        position: "bottom",
                        },
                    }}
            />
        </div>
    );
}

export default Chart;