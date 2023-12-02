let Calculadora = document.getElementById('gotas');
const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const C1 = document.getElementById('calculo 1'); 
const C2 = document.getElementById('calculo 2');
const C3 = document.getElementById('calculo 3');
const C4 = document.getElementById('calculo 4');
const C5 = document.getElementById('calculo 5');
const C6 = document.getElementById('calculo 6');
CALCULAR.addEventListener("click", () => {
    const DATO = document.getElementById("peso").value;
     console.log("se hizo click")
     console.log("dato ingresado", DATO)
    if (DATO > O) {
        ERROR.style.display = "none";
        if (DATO <= 24){
            let flujo = CalcularFlujoGotas(DATO)
            let conversion = flujo * 60;
            FLU.innerHTML = conversion (CalcularFlujoGotas) ${flujo} microgotas/min`;
            MAN.innerHTML = mlDeSuero*60/min: ${conversion} microgotas/min`;
        } else {
            let { volumenDiario, conversion } = calcularFlujoSuperficieCorporal(DATO);
            FLU.innerHTML = `microgotas * 60: ${volumenDiario.toFixed(2)} microgotas`;
            MAN.innerHTML = `macrogotas * 20: ${conversion.toFixed(2)} macrogotas`;
        }
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    }  
     let respuesta = goteo(DATO);
    C1.innerHTML = "4hs=" + (respuesta*(1/4)) + " goteo/min";
    C2.innerHTML = "8hs=" + (respuesta*(1/8)) + " goteo/min";
    C3.innerHTML = "12hs=" + (respuesta*(1/12)) + " goteo/min";
    C4.innerHTML = "16hs=" + (respuesta*(1/16)) + " goteo/min";
    C5.innerHTML = "20hs=" + (respuesta*(1/20)) + " goteo/min";
    C6.innerHTML = "24hs=" + (respuesta*(1/24)) + " goteo/min";
} );

let gotas = 500 
if (gotas >= 500) {
    console.log(CalcularFlujoGotas(5))
}
function CalcularFlujoGotas(peso) {
   let resultado = ((gotas * 60) / 60)
   return resultado
}
console.log (resultado)

console.log (macrogotas(20))
function macrogotas (gotas) {
    let resultado = ((gotas * 20) * 3)
    return resultado
}

