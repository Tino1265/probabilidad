const factorial = (n)=>{
    var acumulador = 1;
    for (var i = 1; i <= n; i++) {
    	acumulador = acumulador*i;
    }
    return acumulador;   
}


const binomial = ()=>{
	var input1 = document.querySelector(".input1").value;
    var input2 = document.querySelector(".input2").value;
    var input3 = document.querySelector(".input3").value;
    let combinacion = factorial(input2)/(factorial(input2-input3)*factorial(input3));
    let resul = combinacion*(input1)**(input3)*(1-input1)**(input2-input3);
    let res = parseFloat(resul*100).toFixed(4);;
    if (input1.length == 0 && input2.length==0 && input3.length==0) {
    	alert("los campos son necesarios")
    } else{
    	var t = `<div class='div-4' id='hola'><p>${res}%</p></div>`;
        document.body.innerHTML += t;
    }
    var ei = document.querySelector(".div-4");
    ei.addEventListener("click",()=>{
        window.location.reload();
    })
    return res;
}



const hipergeometrica = ()=>{
    var h1 = document.querySelector(".h1").value;
    var h2 = document.querySelector(".h2").value;
    var h3 = document.querySelector(".h3").value;
    var h4 = document.querySelector(".h4").value;
    let combi = factorial(h3)/(factorial(h3-h4)*factorial(h4));
    let r1 = h1-h3;
    let r2 = h2-h4;
    let combi2 = factorial(r1)/(factorial(r1-r2)*factorial(r2));
    console.log(combi2);
    let combi3 = factorial(h1)/(factorial(h1-h2)*factorial(h2));
    let resul = (combi*combi2)/combi3;
    let res = parseFloat(resul*100).toFixed(4);;
    if (h1.length == 0 && h2.length==0 && h3.length==0 && h4.length==0) {
        alert("los campos son necesarios");
    } else{
        document.body.innerHTML += `<div class="k1"><p>${res}%</p></div>`
    }
    var e7 = document.querySelector(".k1");
    e7.addEventListener("click",()=>{
        window.location.reload();
    })
}

const poison = ()=>{
    var p1 = document.querySelector(".po1").value;
    var p2 = document.querySelector(".po2").value;
    let op1 = (p1)**p2;
    let eu = Math.exp(1);
    let u = eu**(-p1);
    let res = (op1*u)/factorial(p2);
    var resul = parseFloat(res*100).toFixed(4);
    console.log(resul);
    if (p1.length == 0 && p2.length==0) {
        alert("los campos son necesarios");
    } else{
        document.body.innerHTML += `<div class="k2"><p>${resul}%</p></div>`
    }
    var e8 = document.querySelector(".k2");
    e8.addEventListener("click",()=>{
        window.location.reload();
    })
}

