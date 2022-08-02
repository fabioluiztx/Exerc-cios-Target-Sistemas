let sp = "67836,43";
let rj = "36678,66";
let mg = "29229,88";
let es = "27165,48";
let outros = "19849,53";

let total = parseFloat(sp) + parseFloat(rj) + parseFloat(mg) + parseFloat(es) + parseFloat(outros);

console.log("Total de faturamento dos estados: " + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total));
function calcPorcen(estado){
    let x = (100 * parseFloat(estado))/total;
    return (x.toFixed(2)+"%")
}
let result = "";
result += "Percentual de faturamento de cada estado: \nSP: " + calcPorcen(sp) + "\nRJ: " + calcPorcen(rj) 
    + "\nMG: " + calcPorcen(mg) + "\nES: " + calcPorcen(es) + "\nOutros: " + calcPorcen(outros);
console.log(result);