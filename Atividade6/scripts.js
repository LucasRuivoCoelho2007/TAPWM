function verifica_triangulo(){
    var ladoA = Number(document.getElementById("ladoA").value);
    var ladoB = Number(document.getElementById("ladoB").value);
    var ladoC = Number(document.getElementById("ladoC").value);

    try{
        if (ladoA < (ladoB + ladoC) && ladoA > Math.abs(ladoB - ladoC) && ladoB < (ladoA + ladoC) && ladoB > Math.abs(ladoA - ladoC) && ladoC < (ladoA + ladoB) && ladoC > Math.abs(ladoA - ladoB)){
            if(ladoA == ladoB && ladoB == ladoC){
                document.getElementById("resp").innerText = "É um triângulo equilátero!";
            }
            else if(ladoA == ladoB && ladoA != ladoC ||
                ladoA != ladoB && ladoA == ladoC ||
                ladoB == ladoC && ladoB != ladoA
            ){
                document.getElementById("resp").innerText = "É um triângulo isósceles";
            }
            else {
                document.getElementById("resp").innerText = "É um triângulo escaleno!";
            }
        }
        else{
            document.getElementById("resp").innerText = "Não é triângulo";
        }
    }catch(error){
        document.getElementById("resp").innerText = error;
    }
    
    
}

