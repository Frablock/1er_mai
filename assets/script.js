// Countdown
let countDownDate = new Date("2025-05-01").getTime();

let x = setInterval(function () {
    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

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

// Carte
let map = L.map("map").setView([46.5, 2.360481], 5); //focus sur la France entière
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Image drapeau
const pin_icon = L.icon({iconUrl:'./assets/imgs/pin.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});


// Fonction de chargement des données
function ajoute_manif(manif, _)
{
    // Message à montrer
    const popup = `Ville: ${manif.ville}<br>Heure: ${manif.heure}<br>Lieu: ${manif.lieu}`;

    // Ajout à la carte
    L.marker([manif.lat, manif.lng], { icon: pin_icon }).addTo(map).bindPopup(popup);
}

// Itération sur la liste de manifs
MANIFS.forEach(ajoute_manif)
