var countDownDate = new Date("2025-05-01").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("date_before").innerHTML =
        days +
        " jours " +
        hours +
        " heures " +
        minutes +
        " minutes " +
        seconds +
        " secondes avant le 1er mai";

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML =
            "NOUS SOMMES LE PREMIER MAI";
    }
}, 1000);
