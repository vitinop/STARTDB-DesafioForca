class Forca {
  constructor(palavraSecreta) {
    this.letrasChutadas = [];
    this.letrasCorretas = [];
    this.letrasErradas = [];
    this.vidas = 1;
    this.palavraSecreta = palavraSecreta
  }

  chutar(letra) {
    const letraTratada = letra.toLowerCase();
    if (this.isCaracterValido(letraTratada)) {
      if (this.letrasChutadas.includes(letraTratada)) {
        console.log("A Letra já foi inserida, insira outro caracter")
      } else {
        if (this.palavraSecreta.includes(letraTratada)) {
          this.letrasCorretas.push(letraTratada)
          this.letrasChutadas.push(letraTratada)
        } else {
          this.vidas -= 1
          this.letrasErradas.push(letraTratada)
          this.letrasChutadas.push(letraTratada)
        }
      }
    } else {
      console.log("Você insiriu um ou mais cateres inválidos. \n  Tente novamente inserindo apenas uma letra")
    }
  }
  isCaracterValido(input) {
    return input.length === 1 && input.match(/[a-z]/i);
  }


  buscarEstado() {
    if (!palavraOculta.includes("_")) {
      return " ganhou"
    }
    if (this.vidas > 0) {
      return "aguardando chute"
    } else {
      return "perdeu"
    }
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"
  
  buscarDadosDoJogo() {
    const palavra = this.palavraSecreta.split("")
    const palavraOculta = palavra.map(
      letra => {
        if (this.letrasCorretas.includes(letra)) {
          return letra
        }
        return "_"
      }
      
    )
   
    return {
      letrasErradas: this.letrasErradas,
      letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: palavraOculta // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    }
  }
}

module.exports = Forca;