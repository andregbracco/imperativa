
let penalizado = false

function puedeSubir(altura, compania, penalizado) {
    if (penalizado == "si") {
        return false
    }
    else if (altura >= 140 && altura < 200) {
        return true;
    }

    else if (altura < 140 && altura > 120 && compania === true) {
        return true;
    }
    else {
        return false
    }
}

console.log(puedeSubir(150, false, "si"))