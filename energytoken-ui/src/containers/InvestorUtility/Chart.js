import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
const config = require("../../config.js");
const {
    BACKEND_URL
} = config.default;

const LineChart = (props) => {
    const [values, setValues] = useState([]);
    const [labels, setLabels] = useState([]);

    const panelId = props.id;

    const data = (canvas) => {
        const ctx = canvas.getContext('2d')
        const gradient = ctx.createLinearGradient(0,0,100,0);
        return {
            backgroundColor: gradient,
            labels: labels,
            datasets: [
                {
                    label: 'kWh',
                    data: values,
                    fill: true,
                    backgroundColor: "#808080",
                    borderColor: 'rgba(0, 0, 0, 0.2)',
                },
            ],
        }
    }

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Total produced energy [kWh]",
                    font: {
                        weight: "bold"
                    }
                },
                ticks: {
                    color: 'rgb(0,0,0)',
                    weight: "bold",
                }
            },
            x: {
                title: {
                    display: true,
                    text: "Date in [Month Day]",
                    font: {
                        weight: "bold"
                    }
                },
                ticks: {
                    color: 'rgb(0,0,0)',
                    weight: "bold"
                }
            },
        },
        elements: {
            line: {
                tension: 0.3
            }
        },
        animation: false,
        datasets: {
            line: {
                pointRadius: 0 // disable for all `'line'` datasets
            }
        },
        plugins: {
            legend: {
                align: "center",
                position:"right",
                labels: {
                    font: {
                        weight: "bold"
                    }
                },
            },
            title: {
                display: true,
                text: `Energy Generation - Panel ID: ${panelId}`,
                align: "center"
            },
        },
    };

    async function getEnergyProduction(start, end) {
        const id = props.id;

        const unixEndDate = end ? end : Date.now();
        
        const unixStartDate = start ? start : unixEndDate - 604800000 // 7 days

        console.log(unixStartDate, unixEndDate)
        
        const result = await fetch(`${BACKEND_URL}/api/solarPanel/${id}/energy/${unixStartDate}/${unixEndDate}`, {
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            const newValue = data.data

            return newValue
        })
        .catch(err => {
           return err
        })

        const keys = Object.keys(result);
        const values = Object.values(result);
        setLabels(keys);
        setValues(values);
    }

    useEffect(() => {
        if (props.id){
            getEnergyProduction();
        }
    }, [setValues, panelId])

    return (
        <>
            {props.loaded && <Line data={data} options={options} width={"300px"} height={"100px"} />}
        </>
    );
}

export default LineChart;