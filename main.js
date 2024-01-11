const chartData = {
    labels: ["Child care home", "Cleanliness program", "Helping people", "Excursions", "Feeding the poor"],
    data: [40, 35, 10, 10, 5],
};

const myChart = document.querySelector(".my-chart");
new Chart(myChart, {
    type: "doughnut",
    data: {
        labels: chartData.labels,
        datasets: [
            {
                label: "language",
                data: chartData.data,
                backgroundColor:  [
                    '#BEF3C0',
                    '#AC94F1',
                    '#FFF0CA','#F9CF64','#F38FBF'
                  ],
            },
        ],
    },
    options:{
        borderWidth:0,
        plugins:{
            legend:{
                display:false,
            },
        },
    },
});


