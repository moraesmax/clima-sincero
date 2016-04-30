
var colorCombination = [{
        backgroundColor: "#2F343A",
        textColor: "#fff",
        highlightColor: "#117DEC",
        temperatureColor: "#3B4044"
    }, {
        backgroundColor: "#2F343A",
        textColor: "#fff",
        highlightColor: "#F60400",
        temperatureColor: "#3B4044"
    }, {
        backgroundColor: "#14A77A",
        textColor: "#fff",
        highlightColor: "#B2F5E4",
        temperatureColor: "#B2F5E4"
    }, {
        backgroundColor: "#E7152E",
        textColor: "#fff",
        highlightColor: "#FCC701",
        temperatureColor: "#CF273A"
    },
    {
        backgroundColor: "#193565",
        textColor: "#F9E4CE",
        highlightColor: "#FCE36F",
        temperatureColor: "#F9E4CE"
    }
];

var messages = {
    "tempestade": ["Fucking <b>fúria dos trovões</b> do inferno!"],
    "chuvisco": ["Tá pingando igual <b>meu pau</b> depois de mijar."],
    "chuva": ["Puta que pariu! Tá <b>chovendo<b> nessa merda!"],
    "neve": ["Chegou o <b>papai noel</b> filho da puta com essa neve do caralho"],
    "nevoa": ["Não dá pra ver <b>bosta</b> nenhuma nessa porra!"],
    "fumaca": ["Alguém acendeu um <b>baseado gigante</b>? Tá só fumaça!"],
    "areia": ["Mas que <b>puta que pariu</b> de ar é esse?"],
    "cinza vulcanica": ["Olha <b>pompéia</b> aí caralho! Vulcão filho da puta!"],
    "tornado": ["Enfia o <b>tornado</b> no cu seu clima arrombado!"],
    "limpo": ["O dia tá bonito, vai pra rua levar <b>merda de passarinho</b> na cara ou algo do tipo."],
    "nuvem": ["Tem umas nuvens <b>lokas</b> no céu, deus deve tá fumando um baseado maroto."],
    "apocalipse": ["Corre pra tentar salvar essa <b>bosta</b> que tu chama de vida! é o <b>apocalipse</b>!"],
    "outros": ["Porra, <b>vai se fuder</b>, quer saber o tempo? olha pela janela seu filho da puta!"]
}

var temperatures = {
    "inferno": ["Eu acabei de ver um urubu pegando fogo enquanto voava!"],
    "muito quente": ["Quente pra caralho, tá parecendo um forno essa merda!"],
    "quente": ["Tá curtindo o calor, satanás?"],
    "pouco quente": ["Aproveite o dia com os pássaros, as abelhas e essas merdas."],
    "ameno": ["Hora de fazer um piquenique de filho da puta"],
    "tranquilo": ["Bota o cu pro ar e aproveita o clima aê caralho"],
    "meio termo": ["Tá começando a ficar frio nessa buceta"],
    "frio": ["Quem foi o animal que abriu a geladeira?"],
    "muito frio": ["Puta que pariu, tá frio pra porra!"],
    "frio demais": ["Caralho! Meu cu ta congelando!"],
    "frio pra caramba": ["Puta que pariu! Tá me achando com cara de pinguim?"],
    "congelando": ["Caralho, polo norte filho de uma puta de merda do cacete!!"]
}

function messageForTemperature(t) {
    if (t >= 38) {
        return temperatures["inferno"];
    }
    if (t < 38 && t >= 32) {
        return temperatures["muito quente"];
    }
    if (t < 32 && t >= 27) {
        return temperatures["quente"];
    }
    if (t < 27 && t >= 23) {
        return temperatures["pouco quente"];
    }
    if (t < 23 && t >= 21) {
        return temperatures["ameno"];
    }
    if (t < 21 && t >= 16) {
        return temperatures["tranquilo"];
    }
    if (t < 16 && t >= 10) {
        return temperatures["meio termo"];
    }
    if (t < 10 && t >= 4) {
        return temperatures["frio"];
    }
    if (t < 4 && t >= -3) {
        return temperatures["muito frio"];
    }
    if (t >= -6 && t < -3) {
        return temperatures["frio demais"];
    }
    if (t < -6 && t >= -12) {
        return temperatures["frio pra caramba"];
    }
    if (t < 12) {
        return temperatures["congelando"];
    }
}

function messageForWeather(code) {
    if (code >= 200 && code < 300) {
        return messages["tempestade"];
    }
    if (code >= 300 && code < 400) {
        return messages["chuvisco"];
    }
    if (code >= 500 && code < 600) {
        return messages["chuva"];
    }
    if (code >= 600 && code < 700) {
        return messages["neve"];
    }
    if (code == 701 || code == 721 || code == 741) {
        return messages["nevoa"];
    }
    if (code == 711) {
        return messages["fumaca"];
    }
    if (code == 731 || code == 751 || code == 761 || code == 771) {
        return messages["areia"];
    }
    if (code == 762) {
        return messages["cinza vulcanica"];
    }
    if (code == 781) {
        return messages["tornado"];
    }
    if (code == 800) {
        return messages["limpo"];
    }
    if (code >= 801 && code < 900) {
        return messages["nuvem"];
    }
    if (code >= 900 && code <= 906) {
        return messages["apocalipse"];
    }
    return messages["outros"];
}

function logoForWeather(code) {
    if (code >= 200 && code < 300) {
        return "wi wi-thunderstorm";
    }
    if (code >= 300 && code < 400) {
        return "wi wi-sprinkle";
    }
    if (code >= 500 && code < 600) {
        return "wi wi-rain";
    }
    if (code >= 600 && code < 700) {
        return "wi wi-snow";
    }
    if (code == 701 || code == 721 || code == 741) {
        return "wi wi-fog";
    }
    if (code == 711) {
        return "wi wi-smoke"
    }
    if (code == 731 || code == 751 || code == 761 || code == 771) {
        return "wi wi-smog";
    }
    if (code == 762) {
        return "wi wi-volcano";
    }
    if (code == 781) {
        return "wi wi-tornado";
    }
    if (code == 800) {
        return "wi wi-day-sunny";
    }
    if (code >= 801 && code < 900) {
        return "wi wi-cloudy";
    }
    if (code >= 900 && code <= 906) {
        return "wi wi-meteor";
    }
    return "wi wi-cloud";
}


function randomColorCombination() {
    return colorCombination[Math.floor(Math.random() * colorCombination.length)];
}

function success(position) {

    $(".preloader .text").html("Beleza! <br>Te achei, agora espera enquanto eu procuro a porra do clima.")

    $.get("http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&APPID=5785af41e9ed8edc9b4aca0c0dcbc755&units=metric", function(data) {})
        .done(function(data) {
            $(".preloader").css("opacity", 0);

            setTimeout(function() {
                $(".preloader").hide();
                var layout = randomColorCombination();
                $("html, body").css("background-color", layout.backgroundColor);
                $(".graus").html(parseInt(data.main.temp) + "°");
                $(".name").html(data.name + ":");
                $(".text .bottom").html(messageForTemperature(parseInt(data.main.temp)));
                $(".text .top").html(messageForWeather(data.weather[0].id));
                $(".text .top").css("color", layout.textColor);
                $(".name").css("color", layout.textColor);
                $(".text .bottom").css("color", layout.textColor);
                $(".text .top b").css("color", layout.highlightColor);
                $(".graus").css("color", layout.temperatureColor);
                $("i").css("color", layout.textColor);
                $("i").removeClass().addClass("icon wi " + logoForWeather(data.weather[0].id));
                console.log(data);
            }, 3000);

        })
        .fail(function() {
            $(".preloader .text").html("Puta que pariu! Deu um erro do caralho aqui! <br>Atualiza a página aí porra!");
        });
}

function error() {
    $(".preloader .text").html("Puta que pariu! Ou essa tua merda de navegador não tem geolocation ou deu um erro do caralho aqui!");
}


if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error ,{enableHighAccuracy: true});
} else {
    error();
}
