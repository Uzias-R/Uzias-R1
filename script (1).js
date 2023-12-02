let Calculadora = document.getElementById('peso');
const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click',  () => {
    const DATO = document.getElementById('peso').value;
    console.log("se hizo click")
    console.log("dato ingresado", DATO)
    if (DATO > 0) {
        ERROR.style.display = 'none';
        if (DATO <= 30) {
            let flujo = calcularLasGotasDeSuero(DATO);
            let mantenimiento = flujo * 24;
            FLU.innerHTML = `Mantenimiento (Gotas de suero): ${flujo} goteo/min `;
            MAN.innerHTML = `: ${mantenimiento} goteo/min`;
        } else {
            let { GotasDiario, mantenimiento } = calcularFlujoSuperficieCorporal(DATO);
            FLU.innerHTML = `Superficie Corporal: ${GotasDiario.toFixed(2)} goteo/min `;
            MAN.innerHTML = `Superficie Corporal: ${mantenimiento.toFixed(2)} goteo/min`;
        }
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
});
        else if {
        let respuesta = goteo(DATO)
        C1.innerHTML = "4hs=" + (respuesta*(1/4)) + " goteo/min"
        C2.innerHTML = "8hs=" + (respuesta*(1/8)) + " goteo/min"
        C3.innerHTML = "12hs=" + (respuesta*(1/12)) + " goteo/min"
        C4.innerHTML = "16hs=" + (respuesta*(1/16)) + " goteo/min"
        C5.innerHTML = "20hs=" + (respuesta*(1/20)) + " goteo/min"
        C6.innerHTML = "24hs=" + (respuesta*(1/24)) + " goteo/min"
    }
function goteo(DATO){
    let resultado = DATO/(3)
    return resultado 
}
