// Descrizione:
// sfruttiamo le timing functions per fare il conto alla rovescia per 
// la correzione di domani! Ogni secondo il nostro countdown dovrà 
// scalare fino alle 9:30 di domani mattina!
// Consigli del giorno:
// Questo esercizio richiede un po' di ricerca ma anche un po' di 
// domande che accompagnano l'uomo da tempo immemore:
// Da quante ore è composto un giorno?
// Da quanti minuti è composta un'ora?
// Da quanti secondi è composto un minuto?
// Da quanti millisecondi è composto un secondo?
// Quanti millisecondi mi separano da domani alle 9:30?
// Esiste un oggetto JS in grado di gestire le date?
// Esistono dei metodi per trasformare una data in millisecondi?

let tempo = document.getElementById("tmp")
let countTo = new Date("jan 19, 2024 09:30:00").getTime()

updateCountdown()

let countDown = setInterval(updateCountdown, 1000)

function updateCountdown() {
    let now = new Date().getTime()
    let tempoMancante = countTo - now
    if (tempoMancante <= 0) {
        clearInterval(countDown);
        tempo.innerHTML = "Lezione in corso"}
    else{
        let ore = Math.floor((tempoMancante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let minuti = Math.floor((tempoMancante % (1000 * 60 * 60)) / (1000 * 60))
        let secondi = Math.floor((tempoMancante % (1000 * 60)) / 1000)
        tempo.innerHTML = `${formatNumber(ore)}<span style="font-size: 15px;" class="fw-bold ">h</span>.${formatNumber(minuti)}<span style="font-size: 15px;" class="fw-bold">m</span>.${formatNumber(secondi)}<span style="font-size: 15px;" class="fw-bold">s</span>`
    }    
}
function formatNumber(numero) {
    if (numero < 10) {
        return '0' + numero
    } else {
        return numero
    }
}