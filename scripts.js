

    var primeiroValor = parseInt(prompt("Digite o primeiro valor:"))
    var segundoValor = parseInt(prompt("Digite o segundo valor:"))

    var operaçao = prompt("Digite 1 para fazer uma divisão, 2 para multiplicação, 3 para soma e o 4 para subtração:")

    if (operaçao == 1) {
        var resultado = primeiroValor / segundoValor
        document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")
    } else if (operaçao == 2) {
        var resultado = primeiroValor * segundoValor
        document.write("<h2>" + primeiroValor + " x " + segundoValor + " = " + resultado + "</h2>")
    } else if (operaçao == 3) {
        var resultado = primeiroValor + segundoValor
        document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
    } else if (operaçao == 4) {
        var resultado = primeiroValor - segundoValor
        document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
    } else { document.write("<h2>Opção Inválida</h2>") }


