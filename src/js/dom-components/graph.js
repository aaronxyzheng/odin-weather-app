import Chart from "chart.js/auto";

function createBarChart(timeArray, dataArray) {
    const graph = document.querySelector("#graph");

    const existingChart = Chart.getChart(graph);
    if (existingChart) {
        existingChart.destroy();
    }

    const data = {
        labels: timeArray,
        datasets: [
            {
                label: timeArray,
                data: dataArray,
                fill: false,
                borderColor: "#495057",
                tension: 0.1,
            },
        ],
    };

    const chart = new Chart(graph, {
        type: "line",
        data: data,
    });
}

export default createBarChart;
