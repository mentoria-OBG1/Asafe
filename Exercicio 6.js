class  Nome {
  constructor(nome,sobrenome,idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }
  saudacao(){
    if(this.nome){
      console.log("Olá");
    }
  }
  aumentarIdade(){
    this.idade++
  }
  diminuirIdade(){
    this.idade--
  }
  faseVida(){
    if(this.idade < 30){
      console.log('Você está na primeira idade')
    }else if(this.idade >60){
      console.log('Você está na terceira idade')
    }else{
      console.log('Você está na segunda idade')
    }
  }
}
let {nome, sobrenome, idade} = Nome;

const meuNome = new Nome('Asafe','Ferreira', 70);

meuNome.saudacao();
meuNome.aumentarIdade();
meuNome.aumentarIdade();
meuNome.diminuirIdade();
meuNome.faseVida();
console.log(`${nome}`)
