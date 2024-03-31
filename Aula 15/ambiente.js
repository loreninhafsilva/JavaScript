var num = [8,9,3,6,5]; //inicializando o vetor
num[5] = 2; //adicionando um elemento no vetor
num.push(4); //adicionando um elemento no vetor

console.log(num); //mostrando o vetor
console.log(num[1]); //mostrando o elemento na posição 1
console.log(num.length); //mostra o tamanho do vetor
console.log(num.sort()); //coloca o vetor em ordem crescente

//percorrendo o vetor
for (var i = 0; i < num.length; i++){
    console.log(num[i]);
}

//percorrendo o vetor (simplificado)
for (var i in num){
    console.log(num[i]);
}

num.indexOf(3) //procura elemento no vetor
console.log(num.indexOf(3));