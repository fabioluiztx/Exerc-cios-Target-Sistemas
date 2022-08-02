const dados = require("./dados/dados.json");
let maior = Number(dados[0].valor);
let menor = Number(dados[0].valor);
let soma = 0
let media = 0
let numDias = 0;
let cont = 0;

console.log(dados);

for (let i = 0; i < dados.length; i++){
        if(Number(dados[i].valor) > 0){

            if (Number(dados[i].valor) > maior){
            maior = Number(dados[i].valor);
            }

                if (Number(dados[i].valor) < menor){
                menor = Number(dados[i].valor);
                }

                    soma += Number(dados[i].valor);
                    cont++
    }
}

media = soma / cont;

for (let z = 0; z < dados.length; z++){
    if (Number(dados[z].valor) > media){
        numDias++;
}
}

console.log("\n• Menor valor de faturamento ocorrido em um dia do mês: " + menor 
    + "\n• Maior valor de faturamento ocorrido em um dia do mês: " + maior
        + "\n• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: " + numDias + " dias.");
