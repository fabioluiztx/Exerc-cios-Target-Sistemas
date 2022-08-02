let serie = [0, 1];
let result = "";
t = 20 /*Quantidade de termos da sequência*/
n = 21 /*Número q deseja verificar se tem na sequência*/

for(let i = 2; i < t; i++){
    serie[i] = serie[i - 2] + serie[i - 1];   /*criação da sequência*/
}

/*Percorrendo o vetor da sequência comparando as váriaveis*/
for(let y = 0; y < serie.length; y++){
    if(serie[y] == n){
         result = "O número pertence a sequência fibonacci";
        break;
    }else{
         result = "O número não pertence a sequência fibonacci";
    }
}
/*Exibição dos dados*/
console.log(serie);
console.log(result);