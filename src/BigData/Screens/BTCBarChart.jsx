import React, { Component } from 'react';
// import io from 'socket.io-client'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Button, Col, Row, Statistic } from 'antd';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


export const options = {
    maintainAspectRatio: true,
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 4,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'right',
        },
        title: {
            display: true,
            text: 'BTC Transaction Volume LIVE',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];



class BTCBarChart extends React.Component {


    // socket = io('http://localhost:7777/', { forceNew: true })
    state = {
        BTCData: {},
        variableCnt: 10,
        data: {
            labels,
            datasets: [
                {
                    label: 'BTC Volume',
                    data: labels.map((i) => (i.length * 100)),
                    borderColor: 'rgb(240, 245, 245)',
                    backgroundColor: 'rgb(71, 107, 107)',
                },
                //   {
                //     label: 'Dataset 2',
                //     data: labels.map((i) => (i.length * 100)),
                //     borderColor: 'rgb(53, 162, 235)',
                //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
                //   },
            ],

        }

    }







    componentDidMount() {
        //  Socket Code 
        // console.log("IN MOUNT BTC BAR CHART")
        // console.log("SOCKET RECEIVIBNG")

        // this.socket.on('connect', function () {
        //     this.socket.on('message',(data) =>{
        //         console.log(JSON.stringify(data));
        //     });
        // });
        // this.socket.on("connect_error", (err) => {
        //     console.log(`connect_error due to ${err.message}`);
        //   });
        // Socket Code Ends 

        this.dataRefresh()
        // this.timerID = setInterval(() => this.dataRefresh(), 3000)

    }

    componentWillUnmount() {
    }


    dataRefresh = () => {

        fetch('http://localhost:5001/refresh-data',
            {
                crossDomain:true,
                method: "GET",
                headers: { 'Content-Type': 'application/json' },
                // body: JSON.stringify({
                    // username: user,
                    // password: pass,
                //   })
            })
            .then(response => response.json())
            .then(data => this.setState({ BTCData: data.data }, () => { console.log(this.state.BTCData) }))
            .catch((error) => { console.log(error) })

        var d = {
            labels,
            datasets: [
                {
                    label: 'BTC Volume',
                    data: labels.map((i) => (i.length + this.state.variableCnt)),
                    borderColor: 'rgb(240, 245, 245)',
                    backgroundColor: 'rgb(71, 107, 107)',
                },
            ],

        }

        this.setState({ data: d })
        this.setState((prevState, props) => ({ variableCnt: prevState.variableCnt + 5 }))

    }



    render() {
        return (
            <>
                <Row gutter={16}>
                    <Col span={12}>
                        <Statistic title="BTC Volume, So Far!" value={this.state.BTCData.vol} />
                    </Col>
                </Row>

                <Bar
                    width={"400%"}
                    options={options}
                    data={this.state.data}
                />


            </>

        )
    }



}


export default BTCBarChart



