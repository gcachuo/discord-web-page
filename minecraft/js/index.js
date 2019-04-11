const url = 'minecraft.discordmexico.ga';

$(function () {
    ping(url).done(data => {
        console.log(data);
        if (data.error) {
            $("#serverInfo .card-header").text('El servidor esta apagado.');
        } else {
            $("#serverInfo .card-header").text(`${data.description} | ${data.players.online} jugando`);
            $("#serverInfo .card-body").show();
            if (data.players.online !== 0) {
                $.each(data.players.sample, function (i, v) {
                    $("#serverInfo table tbody").append(`<tr><td>${v.name}</td></tr>`);
                });
            } else {
                $("#serverInfo .card-body").text(`No hay nadie jugando en el servidor.`);
            }
        }
    });
});

function ping(url) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://api.minetools.eu/ping/${url}/25565`,
        "method": "GET"
    };

    return $.ajax(settings);
}