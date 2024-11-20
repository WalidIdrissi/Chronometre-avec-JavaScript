let minuteur = document.getElementById("minuteur");
let temps = null;
let startTemps = 0;
let stopTemps = 0;
let travailleTemps = false;
function start() {
    if (!travailleTemps) {
        startTemps = Date.now() - stopTemps;
        temps = setInterval(modifierMinuteur, 10);
        travailleTemps = true;
    }
}
function stop() {
    if (travailleTemps) {
        clearInterval(temps);
        stopTemps = Date.now() - startTemps;
        travailleTemps = false;
    }
}
function reset() {
    // location.reload(); //pour refresh cette page
    temps = null;
    startTemps = 0;
    stopTemps = 0;
    minuteur.textContent = "00:00:00:00";
}
function modifierMinuteur() {
    stopTemps = Date.now() - startTemps;
    let h = Math.floor(stopTemps / (1000 * 60 * 60))
        .toString()
        .padStart(2, 0);
    let min = Math.floor((stopTemps / (1000 * 60)) % 60)
        .toString()
        .padStart(2, 0);
    let s = Math.floor((stopTemps / 1000) % 60)
        .toString()
        .padStart(2, 0);
    let ms = Math.floor((stopTemps % 1000) / 10)
        .toString()
        .padStart(2, 0);
    minuteur.textContent = `${h}:${min}:${s}:${ms}`;
}
