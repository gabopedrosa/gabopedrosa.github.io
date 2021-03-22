var jogadas;
function restart() {
    window.location.reload();
}

var iniciarJogo = function(disk)
{
    document.getElementById("log").innerHTML = '';
    document.getElementById("result").innerHTML = '';
    jogadas = 0;
    var inicio = '1';
    var auxiliar = '2';
    var final = '3';
    resolverTorre(disk, inicio, final, auxiliar);
    document.getElementById("result").innerHTML = '<b> Total de movimentos para resolver a torre hanoi: ' + jogadas + '</b>';
    console.log('Total de movimentos para resolver a torre hanoi:  ' + jogadas);
}
var resolverTorre = function (totalDisks, pInicial, pFinal, pAuxiliar) {
    if (totalDisks > 0) {
        resolverTorre(totalDisks - 1, pInicial, pAuxiliar, pFinal);
        jogadas++;
        document.getElementById("log").innerHTML = document.getElementById("log").innerHTML + "<br>Movendo disco do pino " + pInicial + " para o pino " + pFinal;
        console.log("Movendo disco do pino " + pInicial + " para o pino " + pFinal);
        resolverTorre(totalDisks - 1, pAuxiliar, pFinal, pInicial);
    }
}