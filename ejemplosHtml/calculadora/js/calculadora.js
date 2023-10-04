function calcular(){
    var op = document.getElementById("txt_operacion").value;
    var n1 = document.getElementById("txt_numero1").value;
    var n2 = document.getElementById("txt_numero2").value;

    var resultado;
    var error = false;

    switch(op){
        case '+':
            resultado = parseFloat(n1) + parseFloat(n2);
            break;

        case '-':
            resultado = parseFloat(n1) - parseFloat(n2);
            break;
        
        case '*':
            resultado = parseFloat(n1) * parseFloat(n2);
            break;
        
        case '/':
            if(parseFloat(n2) == 0){
                alert("No puedes hacer una divisioón entre cero");
                error = true;
            }
            else{
                resultado = parseFloat(n1) / parseFloat(n2);   
            }
            break;
    }
    if(!error){
        alert("El resultado es: " +resultado);
    }


}