var obj = {
    nome: "Állef",
    idade: 28,
    profissao: "Programador",
    estouTrabalhando: true,
};

console.log(obj);
console.log(typeof obj);

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);

console.log("O meu nome é: "+obj.nome);

obj.nome = "Allen";

console.log(obj.nome);
console.log(obj);

obj.graduacao = true;
console.log(obj);