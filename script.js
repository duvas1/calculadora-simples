const button = document.getElementById("calcular");

//função do botão
button.addEventListener("click", function() {
    calcular();
});

//função do calculo
function calcular() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let opr = document.querySelector(".operacoes").value;
    switch (opr) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num1 / num2;
            break;
        default:
            resultado = "Operação Invalida";
            break;
    }
    document.getElementById("resultado").innerText = "Resultado: " + resultado;

}

//remover o foco da caixa de operações
document.addEventListener("click", function (event) {
    let select = document.querySelector(".operacoes");
    if (!select.contains(event.target)) {
        select.blur();
    }
})