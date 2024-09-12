function calcula(opera) (

    let num1 = parseFloat(document.getElementById('zeroum').value);
    let num2 = parseFloat(document.getElementById('zerodois').value);
    let resultado = 0;
    if(isNaN(num1)) || isNaN(num2)){
        alert('Divida por zero.');
    }else{
        if(opera == '+'){
            resultado = num1 + num2;
        }else if(opera == '-'){
            resultado = num1 - num2;
        }else if(opera == '*'){
            resultado = num1 * num2;
        }else if(opera == '/'){
            resultado = num1 / num2;
        }
        if(resultado<0){
            document.getElementById('resultado').style.color='red';
        }
        document.getElementById('resultado').textContent = 'resultado: ' + resultado;
        }