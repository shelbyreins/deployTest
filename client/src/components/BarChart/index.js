import React, { Component } from 'react';
import { getAllEvents } from "../UserFunctions";
import CanvasJSReact from './canvasjs/canvasjs.react';
import "./style.css"
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class BarChart extends Component {

    render() {
        let attendAA = 0;
        let watchedVideo = 0;
        let alc = 0;
        let noAlc = 0;
        let other = 0;


        let userId = {
            userId: localStorage.getItem("userId"),
        };

        getAllEvents(userId).then(res => {
            if (res) {

                for (let i = 0; i < res.length; i++) {
                    switch (res[i].event) {
                        case "Watched Video":
                            watchedVideo++;
                            break;
                        case "AA Meeting":
                            attendAA++;
                            break;
                        case "Alcohol Drink":
                            alc++;
                            break;
                        case "No Alcohol":
                            noAlc++;
                            break;
                        case "Other":
                            other++;
                            break;
                    }
                }
                window.options = {
                    animationEnabled: true,
                    theme: "light2",
                    title: {
                        text: "Events Tracker"
                    },
                    axisX: {
                        title: "Events",
                        reversed: true
                    },
                    axisY: {
                        interval: 2,
                        title: "# of days",
                        labelFormatter: this.addSymbols
                    },
                    data: [{
                        type: "bar",
                        dataPoints: [
                            { y: attendAA, label: "Attend AA" },
                            { y: watchedVideo, label: "Watched Video" },
                            { y: alc, label: "Alcohol" },
                            { y: noAlc, label: "No Alcohol" },
                            { y: other, label: "Other" }
                        ]
                    }]
                }

            }
        });
        return (
            <div>
                <CanvasJSChart options={window.options}
                
                />
            </div>
        );

    }
    addSymbols(e) {
        var suffixes = ["", "K", "M", "B"];
        var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
        if (order > suffixes.length - 1)
            order = suffixes.length - 1;
        var suffix = suffixes[order];
        return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
    }
}

export default BarChart;