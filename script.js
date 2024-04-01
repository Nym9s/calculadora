function calcularSoma() {
    var num1soma = document.getElementById('num1').value;
    var num2soma = document.getElementById('num2').value;
    // Converter os valores para números
    num1soma = parseFloat(num1soma);
    num2soma = parseFloat(num2soma);
    // Verificar se os valores são números
    if (isNaN(num1soma) || isNaN(num2soma)) {
    document.getElementById('resultado').innerText ='Por favor, insira números válidos.';
    return;
    }
    // Calcular a soma dos dois números
    var soma = num1soma + num2soma;
    // Exibir o resultado na página
    document.getElementById('resultado').innerText = 'Resultado:'+ soma;
    }
    
    
    function calcularSubtracao() {
    var num1soma = document.getElementById('num1').value;
    var num2soma = document.getElementById('num2').value;
    // Converter os valores para números
    num1soma = parseFloat(num1soma);
    num2soma = parseFloat(num2soma);
    // Verificar se os valores são números
    if (isNaN(num1soma) || isNaN(num2soma)) {
    document.getElementById('resultado').innerText =
    'Por favor, insira números válidos.';
    return;
    }
    // Calcular a soma dos dois números
    var subtracao = num1soma - num2soma;
    // Exibir o resultado na página
    document.getElementById('resultado').innerText = 'Resultado:'+ subtracao;
    }

    function calcularMultiplicacao() {
        var num1soma = document.getElementById('num1').value;
        var num2soma = document.getElementById('num2').value;
        // Converter os valores para números
        num1soma = parseFloat(num1soma);
        num2soma = parseFloat(num2soma);
        // Verificar se os valores são números
        if (isNaN(num1soma) || isNaN(num2soma)) {
        document.getElementById('resultado').innerText =
        'Por favor, insira números válidos.';
        return;
        }
        // Calcular a soma dos dois números
        var multiplicacao = num1soma * num2soma;
        // Exibir o resultado na página
        document.getElementById('resultado').innerText = 'Resultado:'+ multiplicacao;
        }

        function calcularDivisao() {
            var num1soma = document.getElementById('num1').value;
            var num2soma = document.getElementById('num2').value;
            // Converter os valores para números
            num1soma = parseFloat(num1soma);
            num2soma = parseFloat(num2soma);
            // Verificar se os valores são números
            if (isNaN(num1soma) || isNaN(num2soma)) {
            document.getElementById('resultado').innerText =
            'Por favor, insira números válidos.';
            return;
            }
            // Calcular a soma dos dois números
            var divisao = num1soma / num2soma;
            // Exibir o resultado na página
            document.getElementById('resultado').innerText = 'Resultado:'+ divisao;
            }
            multiplicacao