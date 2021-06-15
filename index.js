
$(document).ready(function () {
    $.ajax({
        method: "GET",
        datatype: "json",
        url: "https://api.covid19api.com/summary"
    }).done(function (data) {
        console.log(data);

        $("#date").text(data.Global.Date);
        $("#newConfirmed").text(data.Global.NewConfirmed);
        $("#newDeaths").text(data.Global.NewDeaths);
        $("#newRecovered").text(data.NewRecovered);
        $("#totalConfirmed").text(data.TotalConfirmed);
        $("#totalDeaths").text(data.TotalDeaths);
        $("#totalRecovered").text(data.TotalRecovered);
        var listaPaises = data.Countries;
        var contentHtml = "";
        $.each(listaPaises, function (i, pais) {
            contentHtml += "<tr>";
            contentHtml += "<td>" + (i + 1) + "</td>";
            contentHtml += "<td>" + pais.Country + "</td>";
            contentHtml += "<td>" + pais.TotalConfirmed + "</td>";
            contentHtml += "<td>" + pais.TotalDeaths + "</td>";
            contentHtml += "<td>" + pais.TotalRecovered + "</td>";
            contentHtml += "<td>" + pais.NewConfirmed + "</td>";
            contentHtml += "<td>" + pais.NewDeaths + "</td>";
            contentHtml += "<td>" + pais.NewRecovered + "</td>";
            contentHtml += "</tr>";
        });
    }).fail(function (err) {
        console.log(err);
        alert("ocurrió un error al cargar la página");
    });
});

function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    // TODO
}

function formatDate(date) {
    // TODO
    var fecha = new Date (date);
    var fechaCreada = '' + fecha.getMonth() + '/' + fecha.getDate() + '/' + fecha.getFullYear();
    return fechaCreada;
}