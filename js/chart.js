import { totalboys, totalgirls, ecolenum, Poussinsnum, Minimesnum, Cadetsnum, Juniorsnum, Seniorsnum } from "./db.js";

google.charts.load("current", { packages: ["corechart"] });

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ["Task", "nombre des garcons"],
        ["boys", totalboys],
        ["girls", totalgirls],
    ]);

    var options = {
        title: "Sex",
        pieHole: 0.0,
    };

    var chart = new google.visualization.PieChart(
        document.getElementById("donutchart")
    );
    chart.draw(data, options);

}

function drawChart1() {
    var data = google.visualization.arrayToDataTable([
        ["Grade", "Nombre D'Athléte", { role: "style" }],
        ["Ecole", ecolenum, "#C0C0C0"],
        ["Poussins", Poussinsnum, "#FFEF33 "],
        ["Minime", Minimesnum, "#008000"],
        ["Cadét", Cadetsnum, "#0000FF"],
        ["Junior", Juniorsnum, "#800000"],
        ["Sinior", Seniorsnum, "color: #000000"],
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([
        0,
        1,
        {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation",
        },
        2,
    ]);

    var options = {
        title: "Nombre D'Athléte / Grade",
        width: 600,
        height: 500,
        bar: { groupWidth: "95%" },
        legend: { position: "none" },
    };
    var chart = new google.visualization.ColumnChart(
        document.getElementById("drawChart1")
    );
    chart.draw(view, options);
}
setTimeout(

    () => {

        google.charts.setOnLoadCallback(drawChart);
        google.charts.setOnLoadCallback(drawChart1);

    }, 3000)