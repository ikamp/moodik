$(document).ready(function () {
    new Chart(document.getElementById("pie-chart"), {
        type: 'pie',
        data: {
            labels: ["kullananlar", "kullanmayanlar"],
            datasets: [{
                label: "Mood bildirimi",
                backgroundColor: ["#3e95cd", "#8e5ea2"],
                data: [75, 25]
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Predicted world population (millions) in 2050'
            }
        }
    });

    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
            labels: ["26/17", "27/17", "28/17", "29/17", "30/17"],
            datasets: [{
                data: [2, 3, 1, 5, 4],
                label: "Mood Avarage",
                borderColor: "#3e95cd",
                fill: false
            }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'World population per region (in millions)'
            }
        }
    });

    new Chart(document.getElementById("bar-chart-horizontal"), {
        type: 'horizontalBar',
        data: {
            labels: ["Career", "Communication", "Health", "Colleaguas", "Holidays"],
            datasets: [
                {
                    label: "Population (millions)",
                    backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                    data: [2, 1, 4, 3, 5, 0]
                }
            ]
        },
        options: {
            legend: {display: false},
            title: {
                display: true,
                text: 'Predicted world population (millions) in 2050'
            }
        }
    });
});
